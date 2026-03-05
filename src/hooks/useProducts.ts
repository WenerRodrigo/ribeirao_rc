import { useQuery } from "@tanstack/react-query";
import { supabase } from "@/integrations/supabase/client";
import { products as staticProducts, type Product } from "@/data/products";

export interface DbProduct {
  id: string;
  name: string;
  code: string;
  category: string;
  brand: string;
  application: string;
  model: string;
  engine: string;
  year_start: number;
  year_end: number;
  description: string;
  badge: string | null;
  guarantee: string;
  availability: string;
  shipping: string;
}

export interface DbProductImage {
  id: string;
  product_id: string;
  image_url: string;
  sort_order: number;
}

function dbToProduct(db: DbProduct, images: DbProductImage[]): Product {
  const sorted = images.sort((a, b) => a.sort_order - b.sort_order);
  const imageUrls = sorted.map((i) => i.image_url);
  return {
    id: db.id,
    name: db.name,
    code: db.code,
    category: db.category,
    brand: db.brand,
    application: `${db.model} ${db.engine}`,
    model: db.model,
    engine: db.engine,
    yearStart: db.year_start,
    yearEnd: db.year_end,
    description: db.description,
    image: imageUrls[0] || "/placeholder.svg",
    images: imageUrls.length > 0 ? imageUrls : ["/placeholder.svg"],
    badge: db.badge as Product["badge"],
    guarantee: db.guarantee,
    availability: db.availability,
    shipping: db.shipping,
  };
}

export function useProducts() {
  return useQuery({
    queryKey: ["products"],
    queryFn: async () => {
      const { data: dbProducts, error } = await supabase
        .from("products")
        .select("*")
        .order("created_at", { ascending: false });

      if (error) throw error;

      if (!dbProducts || dbProducts.length === 0) {
        return staticProducts;
      }

      const { data: images } = await supabase
        .from("product_images")
        .select("*");

      return dbProducts.map((p) =>
        dbToProduct(
          p as unknown as DbProduct,
          ((images as unknown as DbProductImage[]) || []).filter((i) => i.product_id === p.id)
        )
      );
    },
  });
}

export function useProduct(id: string | undefined) {
  return useQuery({
    queryKey: ["product", id],
    enabled: !!id,
    queryFn: async () => {
      // Try DB first
      const { data: dbProduct } = await supabase
        .from("products")
        .select("*")
        .eq("id", id!)
        .maybeSingle();

      if (dbProduct) {
        const { data: images } = await supabase
          .from("product_images")
          .select("*")
          .eq("product_id", id!);

        return dbToProduct(
          dbProduct as unknown as DbProduct,
          (images as unknown as DbProductImage[]) || []
        );
      }

      // Fallback to static
      const staticProduct = staticProducts.find((p) => p.id === id);
      return staticProduct || null;
    },
  });
}
