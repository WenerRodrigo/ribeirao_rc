import { Link } from "react-router-dom";
import { MessageCircle } from "lucide-react";
import type { Product } from "@/data/products";
import { getWhatsAppLink } from "@/data/products";
import ProductBadge from "./ProductBadge";

export default function ProductCard({ product }: { product: Product }) {
  return (
    <div className="group flex flex-col overflow-hidden rounded-lg border bg-card shadow-sm transition-shadow hover:shadow-md">
      <Link to={`/pecas/${product.id}`} className="relative aspect-square overflow-hidden bg-muted">
        <img
          src={product.image}
          alt={product.name}
          className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
          loading="lazy"
        />
        {product.badge && (
          <div className="absolute left-3 top-3">
            <ProductBadge type={product.badge} />
          </div>
        )}
      </Link>
      <div className="flex flex-1 flex-col p-4">
        <span className="text-xs font-medium text-accent">{product.category}</span>
        <Link to={`/pecas/${product.id}`}>
          <h3 className="mt-1 font-display text-base font-semibold text-card-foreground hover:text-accent">
            {product.name}
          </h3>
        </Link>
        <p className="mt-1 text-sm text-muted-foreground">
          {product.application} • {product.yearStart}–{product.yearEnd}
        </p>
        <div className="mt-auto pt-4">
          <a
            href={getWhatsAppLink(product.name)}
            target="_blank"
            rel="noopener noreferrer"
            className="flex w-full items-center justify-center gap-2 rounded-md bg-whatsapp px-4 py-2.5 text-sm font-semibold text-whatsapp-foreground transition-colors hover:bg-whatsapp/90"
          >
            <MessageCircle size={16} />
            Solicitar Orçamento
          </a>
        </div>
      </div>
    </div>
  );
}
