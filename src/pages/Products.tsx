import { useState, useMemo } from "react";
import { Filter, X } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import WhatsAppFab from "@/components/WhatsAppFab";
import ProductCard from "@/components/ProductCard";
import SearchBar from "@/components/SearchBar";
import FilterSidebar from "@/components/FilterSidebar";
import { useProducts } from "@/hooks/useProducts";

export default function Products() {
  const [search, setSearch] = useState("");
  const [category, setCategory] = useState("");
  const [brand, setBrand] = useState("");
  const [showFilters, setShowFilters] = useState(false);

  const { data: products = [], isLoading } = useProducts();

  const filtered = useMemo(() => {
    const q = search.toLowerCase();
    return products.filter((p) => {
      const matchSearch =
        !q ||
        p.name.toLowerCase().includes(q) ||
        p.category.toLowerCase().includes(q) ||
        p.model.toLowerCase().includes(q) ||
        p.application.toLowerCase().includes(q) ||
        p.brand.toLowerCase().includes(q) ||
        p.code.toLowerCase().includes(q) ||
        String(p.yearStart).includes(q) ||
        String(p.yearEnd).includes(q);
      const matchCategory = !category || p.category === category;
      const matchBrand = !brand || p.brand === brand;
      return matchSearch && matchCategory && matchBrand;
    });
  }, [search, category, brand, products]);

  return (
    <div className="min-h-screen bg-background">
      <Header />

      <section className="bg-primary py-12">
        <div className="container">
          <h1 className="font-display text-3xl font-bold text-primary-foreground md:text-4xl">Nossas Peças</h1>
          <p className="mt-2 text-primary-foreground/70">Amplo catálogo de peças de câmbio para seu veículo</p>
          <div className="mt-6 max-w-2xl">
            <SearchBar value={search} onChange={setSearch} />
          </div>
        </div>
      </section>

      <div className="container py-10">
        <button
          onClick={() => setShowFilters(!showFilters)}
          className="mb-6 flex items-center gap-2 rounded-md border px-4 py-2 text-sm font-medium text-foreground lg:hidden"
        >
          {showFilters ? <X size={16} /> : <Filter size={16} />}
          Filtros
        </button>

        <div className="flex flex-wrap gap-10">
          <div className={`w-64 shrink-0 ${showFilters ? "block" : "hidden"} lg:block`}>
            <FilterSidebar
              selectedCategory={category}
              selectedBrand={brand}
              onCategoryChange={setCategory}
              onBrandChange={setBrand}
            />
          </div>

          <div className="flex-1">
            {isLoading ? (
              <p className="py-20 text-center text-muted-foreground">Carregando peças...</p>
            ) : (
              <>
                <p className="mb-6 text-sm text-muted-foreground">
                  {filtered.length} {filtered.length === 1 ? "peça encontrada" : "peças encontradas"}
                </p>
                {filtered.length === 0 ? (
                  <div className="py-20 text-center">
                    <p className="text-lg font-medium text-muted-foreground">Nenhuma peça encontrada</p>
                    <p className="mt-2 text-sm text-muted-foreground">Tente alterar os filtros ou a busca</p>
                  </div>
                ) : (
                  <div className="grid gap-6 sm:grid-cols-2 xl:grid-cols-3">
                    {filtered.map((p) => (
                      <ProductCard key={p.id} product={p} />
                    ))}
                  </div>
                )}
              </>
            )}
          </div>
        </div>
      </div>

      <Footer />
      <WhatsAppFab />
    </div>
  );
}
