import { categories, brands } from "@/data/products";

interface FilterSidebarProps {
  selectedCategory: string;
  selectedBrand: string;
  onCategoryChange: (v: string) => void;
  onBrandChange: (v: string) => void;
}

export default function FilterSidebar({
  selectedCategory,
  selectedBrand,
  onCategoryChange,
  onBrandChange,
}: FilterSidebarProps) {
  return (
    <aside className="space-y-6">
      {/* Categories */}
      <div>
        <h3 className="font-display text-sm font-semibold text-foreground">Categoria</h3>
        <ul className="mt-3 space-y-1">
          <li>
            <button
              onClick={() => onCategoryChange("")}
              className={`w-full rounded px-3 py-2 text-left text-sm transition-colors ${!selectedCategory ? "bg-accent/10 font-semibold text-accent" : "text-muted-foreground hover:text-foreground"}`}
            >
              Todas as categorias
            </button>
          </li>
          {categories.map((c) => (
            <li key={c}>
              <button
                onClick={() => onCategoryChange(c)}
                className={`w-full rounded px-3 py-2 text-left text-sm transition-colors ${selectedCategory === c ? "bg-accent/10 font-semibold text-accent" : "text-muted-foreground hover:text-foreground"}`}
              >
                {c}
              </button>
            </li>
          ))}
        </ul>
      </div>

      {/* Brands */}
      <div>
        <h3 className="font-display text-sm font-semibold text-foreground">Marca do Veículo</h3>
        <ul className="mt-3 space-y-1">
          <li>
            <button
              onClick={() => onBrandChange("")}
              className={`w-full rounded px-3 py-2 text-left text-sm transition-colors ${!selectedBrand ? "bg-accent/10 font-semibold text-accent" : "text-muted-foreground hover:text-foreground"}`}
            >
              Todas as marcas
            </button>
          </li>
          {brands.map((b) => (
            <li key={b}>
              <button
                onClick={() => onBrandChange(b)}
                className={`w-full rounded px-3 py-2 text-left text-sm transition-colors ${selectedBrand === b ? "bg-accent/10 font-semibold text-accent" : "text-muted-foreground hover:text-foreground"}`}
              >
                {b}
              </button>
            </li>
          ))}
        </ul>
      </div>
    </aside>
  );
}
