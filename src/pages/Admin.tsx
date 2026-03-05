import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { Plus, Pencil, Trash2, LogOut, ImagePlus } from "lucide-react";
import { useAuth } from "@/hooks/useAuth";
import { supabase } from "@/integrations/supabase/client";
import { useQueryClient } from "@tanstack/react-query";
import { toast } from "@/components/ui/use-toast";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { categories, brands } from "@/data/products";

interface ProductForm {
  name: string;
  code: string;
  category: string;
  brand: string;
  model: string;
  engine: string;
  year_start: number;
  year_end: number;
  description: string;
  badge: string;
  guarantee: string;
  availability: string;
  shipping: string;
}

const emptyForm: ProductForm = {
  name: "",
  code: "",
  category: categories[0],
  brand: brands[0],
  model: "",
  engine: "",
  year_start: 2020,
  year_end: 2025,
  description: "",
  badge: "",
  guarantee: "6 meses",
  availability: "Pronta entrega",
  shipping: "Envio em até 24h",
};

interface DbProduct {
  id: string;
  name: string;
  code: string;
  category: string;
  brand: string;
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

export default function Admin() {
  const { user, isAdmin, loading, signOut } = useAuth();
  const navigate = useNavigate();
  const queryClient = useQueryClient();

  const [products, setProducts] = useState<DbProduct[]>([]);
  const [productImages, setProductImages] = useState<Record<string, string[]>>({});
  const [showForm, setShowForm] = useState(false);
  const [editingId, setEditingId] = useState<string | null>(null);
  const [form, setForm] = useState<ProductForm>(emptyForm);
  const [imageFiles, setImageFiles] = useState<File[]>([]);
  const [saving, setSaving] = useState(false);
  const [loadingProducts, setLoadingProducts] = useState(true);

  useEffect(() => {
    if (!loading && (!user || !isAdmin)) {
      navigate("/admin/login");
    }
  }, [user, isAdmin, loading, navigate]);

  useEffect(() => {
    if (isAdmin) loadProducts();
  }, [isAdmin]);

  async function loadProducts() {
    setLoadingProducts(true);
    try {
      const { data, error } = await supabase
        .from("products")
        .select("*")
        .order("created_at", { ascending: false });

      if (error) throw error;

      const prods = (data as unknown as DbProduct[]) || [];
      setProducts(prods);

      const { data: imgs, error: imgsError } = await supabase.from("product_images").select("*");
      if (imgsError) throw imgsError;

      const imgMap: Record<string, string[]> = {};
      ((imgs as unknown as { product_id: string; image_url: string; sort_order: number }[]) || []).forEach((img) => {
        if (!imgMap[img.product_id]) imgMap[img.product_id] = [];
        imgMap[img.product_id].push(img.image_url);
      });
      setProductImages(imgMap);
    } catch (error) {
      console.error("Erro ao carregar produtos:", error);
      toast({
        title: "Erro ao carregar produtos",
        description: "Não foi possível atualizar a lista agora. Tente novamente.",
        variant: "destructive",
      });
    } finally {
      setLoadingProducts(false);
    }
  }

  async function uploadImages(productId: string) {
    for (let i = 0; i < imageFiles.length; i++) {
      const file = imageFiles[i];
      const ext = file.name.split(".").pop();
      const path = `${productId}/${Date.now()}-${i}.${ext}`;

      const { error: uploadError } = await supabase.storage
        .from("product-images")
        .upload(path, file);

      if (uploadError) {
        console.error("Erro ao enviar imagem:", uploadError);
        continue;
      }

      const { data: urlData } = supabase.storage
        .from("product-images")
        .getPublicUrl(path);

      const { error: imageInsertError } = await supabase.from("product_images").insert({
        product_id: productId,
        image_url: urlData.publicUrl,
        sort_order: i,
      } as any);

      if (imageInsertError) {
        console.error("Erro ao salvar referência da imagem:", imageInsertError);
      }
    }
  }

  async function handleSave(e: React.FormEvent) {
    e.preventDefault();
    setSaving(true);

    try {
      const payload = {
        name: form.name,
        code: form.code,
        category: form.category,
        brand: form.brand,
        application: `${form.model} ${form.engine}`,
        model: form.model,
        engine: form.engine,
        year_start: form.year_start,
        year_end: form.year_end,
        description: form.description,
        badge: form.badge || null,
        guarantee: form.guarantee,
        availability: form.availability,
        shipping: form.shipping,
      };

      if (editingId) {
        const { error } = await supabase.from("products").update(payload as any).eq("id", editingId);
        if (error) throw error;
        if (imageFiles.length > 0) await uploadImages(editingId);
      } else {
        const { data, error } = await supabase
          .from("products")
          .insert(payload as any)
          .select("id")
          .single();
        if (error) throw error;
        if (data) await uploadImages((data as any).id);
      }

      queryClient.invalidateQueries({ queryKey: ["products"] });
      const successTitle = editingId ? "Produto atualizado!" : "Produto cadastrado!";

      setShowForm(false);
      setEditingId(null);
      setForm(emptyForm);
      setImageFiles([]);
      setSaving(false);

      // Não bloquear o submit aguardando refresh da listagem
      void loadProducts();

      toast({
        title: successTitle,
        description: "O produto foi salvo com sucesso.",
      });
    } catch (error) {
      console.error("Erro ao salvar produto:", error);
      toast({
        title: "Erro ao salvar produto",
        description: "Não foi possível salvar. Tente novamente.",
        variant: "destructive",
      });
    } finally {
      setSaving(false);
    }
  }

  async function handleDelete(id: string) {
    if (!confirm("Tem certeza que deseja excluir este produto?")) return;

    // Delete images from storage
    const { data: imgs } = await supabase
      .from("product_images")
      .select("image_url")
      .eq("product_id", id);

    if (imgs) {
      for (const img of imgs) {
        const url = (img as any).image_url as string;
        const path = url.split("/product-images/")[1];
        if (path) await supabase.storage.from("product-images").remove([path]);
      }
    }

    await supabase.from("products").delete().eq("id", id);
    queryClient.invalidateQueries({ queryKey: ["products"] });
    await loadProducts();
  }

  function handleEdit(product: DbProduct) {
    setForm({
      name: product.name,
      code: product.code,
      category: product.category,
      brand: product.brand,
      model: product.model,
      engine: product.engine,
      year_start: product.year_start,
      year_end: product.year_end,
      description: product.description,
      badge: product.badge || "",
      guarantee: product.guarantee,
      availability: product.availability,
      shipping: product.shipping,
    });
    setEditingId(product.id);
    setImageFiles([]);
    setShowForm(true);
  }

  if (loading) {
    return (
      <div className="min-h-screen bg-background">
        <Header />
        <div className="container py-20 text-center text-muted-foreground">Carregando...</div>
        <Footer />
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background">
      <Header />

      <div className="container py-8">
        <div className="flex items-center justify-between">
          <div>
            <h1 className="font-display text-2xl font-bold text-foreground">Painel Administrativo</h1>
            <p className="text-sm text-muted-foreground">Gerencie seus produtos</p>
          </div>
          <div className="flex items-center gap-3">
            <button
              onClick={() => { setShowForm(true); setEditingId(null); setForm(emptyForm); setImageFiles([]); }}
              className="flex items-center gap-2 rounded-md bg-accent px-4 py-2.5 text-sm font-semibold text-accent-foreground"
            >
              <Plus size={16} /> Novo Produto
            </button>
            <button
              onClick={() => signOut()}
              className="flex items-center gap-2 rounded-md border px-4 py-2.5 text-sm font-medium text-muted-foreground hover:text-foreground"
            >
              <LogOut size={16} /> Sair
            </button>
          </div>
        </div>

        {/* Form */}
        {showForm && (
          <div className="mt-6 rounded-lg border bg-card p-6">
            <h2 className="font-display text-lg font-semibold text-foreground">
              {editingId ? "Editar Produto" : "Novo Produto"}
            </h2>
            <form onSubmit={handleSave} className="mt-4 grid gap-4 sm:grid-cols-2">
              <div>
                <label className="text-sm font-medium text-foreground">Nome da Peça *</label>
                <input value={form.name} onChange={(e) => setForm({ ...form, name: e.target.value })} required
                  className="mt-1 w-full rounded-md border bg-background px-3 py-2 text-sm text-foreground outline-none focus:ring-2 focus:ring-accent" />
              </div>
              <div>
                <label className="text-sm font-medium text-foreground">Código (ex: RC 1137) *</label>
                <input value={form.code} onChange={(e) => setForm({ ...form, code: e.target.value })} required
                  className="mt-1 w-full rounded-md border bg-background px-3 py-2 text-sm text-foreground outline-none focus:ring-2 focus:ring-accent" />
              </div>
              <div>
                <label className="text-sm font-medium text-foreground">Categoria *</label>
                <select value={form.category} onChange={(e) => setForm({ ...form, category: e.target.value })}
                  className="mt-1 w-full rounded-md border bg-background px-3 py-2 text-sm text-foreground outline-none focus:ring-2 focus:ring-accent">
                  {categories.map((c) => <option key={c} value={c}>{c}</option>)}
                </select>
              </div>
              <div>
                <label className="text-sm font-medium text-foreground">Marca do Veículo *</label>
                <select value={form.brand} onChange={(e) => setForm({ ...form, brand: e.target.value })}
                  className="mt-1 w-full rounded-md border bg-background px-3 py-2 text-sm text-foreground outline-none focus:ring-2 focus:ring-accent">
                  {brands.map((b) => <option key={b} value={b}>{b}</option>)}
                </select>
              </div>
              <div>
                <label className="text-sm font-medium text-foreground">Modelo do Carro *</label>
                <input value={form.model} onChange={(e) => setForm({ ...form, model: e.target.value })} required
                  className="mt-1 w-full rounded-md border bg-background px-3 py-2 text-sm text-foreground outline-none focus:ring-2 focus:ring-accent" />
              </div>
              <div>
                <label className="text-sm font-medium text-foreground">Motorização *</label>
                <input value={form.engine} onChange={(e) => setForm({ ...form, engine: e.target.value })} required
                  className="mt-1 w-full rounded-md border bg-background px-3 py-2 text-sm text-foreground outline-none focus:ring-2 focus:ring-accent" />
              </div>
              <div>
                <label className="text-sm font-medium text-foreground">Ano Inicial *</label>
                <input type="number" value={form.year_start} onChange={(e) => setForm({ ...form, year_start: Number(e.target.value) })} required
                  className="mt-1 w-full rounded-md border bg-background px-3 py-2 text-sm text-foreground outline-none focus:ring-2 focus:ring-accent" />
              </div>
              <div>
                <label className="text-sm font-medium text-foreground">Ano Final *</label>
                <input type="number" value={form.year_end} onChange={(e) => setForm({ ...form, year_end: Number(e.target.value) })} required
                  className="mt-1 w-full rounded-md border bg-background px-3 py-2 text-sm text-foreground outline-none focus:ring-2 focus:ring-accent" />
              </div>
              <div className="sm:col-span-2">
                <label className="text-sm font-medium text-foreground">Descrição Técnica</label>
                <textarea value={form.description} onChange={(e) => setForm({ ...form, description: e.target.value })} rows={3}
                  className="mt-1 w-full rounded-md border bg-background px-3 py-2 text-sm text-foreground outline-none focus:ring-2 focus:ring-accent" />
              </div>
              <div>
                <label className="text-sm font-medium text-foreground">Selo</label>
                <select value={form.badge} onChange={(e) => setForm({ ...form, badge: e.target.value })}
                  className="mt-1 w-full rounded-md border bg-background px-3 py-2 text-sm text-foreground outline-none focus:ring-2 focus:ring-accent">
                  <option value="">Nenhum</option>
                  <option value="destaque">Destaque</option>
                  <option value="mais-vendido">Mais Vendido</option>
                  <option value="estoque-limitado">Estoque Limitado</option>
                  <option value="envio-imediato">Envio Imediato</option>
                </select>
              </div>
              <div>
                <label className="text-sm font-medium text-foreground">Garantia</label>
                <input value={form.guarantee} onChange={(e) => setForm({ ...form, guarantee: e.target.value })}
                  className="mt-1 w-full rounded-md border bg-background px-3 py-2 text-sm text-foreground outline-none focus:ring-2 focus:ring-accent" />
              </div>
              <div>
                <label className="text-sm font-medium text-foreground">Disponibilidade</label>
                <input value={form.availability} onChange={(e) => setForm({ ...form, availability: e.target.value })}
                  className="mt-1 w-full rounded-md border bg-background px-3 py-2 text-sm text-foreground outline-none focus:ring-2 focus:ring-accent" />
              </div>
              <div>
                <label className="text-sm font-medium text-foreground">Envio</label>
                <input value={form.shipping} onChange={(e) => setForm({ ...form, shipping: e.target.value })}
                  className="mt-1 w-full rounded-md border bg-background px-3 py-2 text-sm text-foreground outline-none focus:ring-2 focus:ring-accent" />
              </div>
              <div className="sm:col-span-2">
                <label className="text-sm font-medium text-foreground">Fotos do Produto</label>
                <label className="mt-1 flex cursor-pointer items-center gap-2 rounded-md border border-dashed bg-background px-4 py-6 text-sm text-muted-foreground hover:border-accent">
                  <ImagePlus size={20} />
                  {imageFiles.length > 0
                    ? `${imageFiles.length} arquivo(s) selecionado(s)`
                    : "Clique para selecionar imagens"}
                  <input
                    type="file"
                    accept="image/*"
                    multiple
                    className="hidden"
                    onChange={(e) => setImageFiles(Array.from(e.target.files || []))}
                  />
                </label>
              </div>
              <div className="flex gap-3 sm:col-span-2">
                <button type="submit" disabled={saving}
                  className="rounded-md bg-accent px-6 py-2.5 text-sm font-semibold text-accent-foreground disabled:opacity-50">
                  {saving ? "Salvando..." : editingId ? "Atualizar" : "Cadastrar"}
                </button>
                <button type="button" onClick={() => { setShowForm(false); setEditingId(null); }}
                  className="rounded-md border px-6 py-2.5 text-sm font-medium text-muted-foreground hover:text-foreground">
                  Cancelar
                </button>
              </div>
            </form>
          </div>
        )}

        {/* Product List */}
        <div className="mt-8">
          {loadingProducts ? (
            <p className="text-center text-muted-foreground">Carregando produtos...</p>
          ) : products.length === 0 ? (
            <div className="rounded-lg border bg-card p-12 text-center">
              <p className="text-lg font-medium text-muted-foreground">Nenhum produto cadastrado</p>
              <p className="mt-1 text-sm text-muted-foreground">Clique em "Novo Produto" para começar</p>
            </div>
          ) : (
            <div className="overflow-x-auto rounded-lg border">
              <table className="w-full text-sm">
                <thead className="bg-muted">
                  <tr>
                    <th className="px-4 py-3 text-left font-medium text-foreground">Foto</th>
                    <th className="px-4 py-3 text-left font-medium text-foreground">Nome</th>
                    <th className="px-4 py-3 text-left font-medium text-foreground">Código</th>
                    <th className="px-4 py-3 text-left font-medium text-foreground">Categoria</th>
                    <th className="px-4 py-3 text-left font-medium text-foreground">Marca</th>
                    <th className="px-4 py-3 text-left font-medium text-foreground">Ações</th>
                  </tr>
                </thead>
                <tbody>
                  {products.map((p) => (
                    <tr key={p.id} className="border-t">
                      <td className="px-4 py-3">
                        {productImages[p.id]?.[0] ? (
                          <img src={productImages[p.id][0]} alt="" className="h-12 w-12 rounded object-cover" />
                        ) : (
                          <div className="flex h-12 w-12 items-center justify-center rounded bg-muted text-xs text-muted-foreground">
                            Sem foto
                          </div>
                        )}
                      </td>
                      <td className="px-4 py-3 font-medium text-foreground">{p.name}</td>
                      <td className="px-4 py-3 text-muted-foreground">{p.code}</td>
                      <td className="px-4 py-3 text-muted-foreground">{p.category}</td>
                      <td className="px-4 py-3 text-muted-foreground">{p.brand}</td>
                      <td className="px-4 py-3">
                        <div className="flex gap-2">
                          <button onClick={() => handleEdit(p)} className="rounded p-1.5 text-accent hover:bg-accent/10">
                            <Pencil size={16} />
                          </button>
                          <button onClick={() => handleDelete(p.id)} className="rounded p-1.5 text-destructive hover:bg-destructive/10">
                            <Trash2 size={16} />
                          </button>
                        </div>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          )}
        </div>
      </div>

      <Footer />
    </div>
  );
}
