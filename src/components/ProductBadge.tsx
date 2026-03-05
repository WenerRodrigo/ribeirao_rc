import { Star, TrendingUp, AlertTriangle, Truck } from "lucide-react";

const badgeConfig = {
  destaque: { label: "Produto em Destaque", icon: Star, className: "bg-accent text-accent-foreground" },
  "mais-vendido": { label: "Mais Vendido", icon: TrendingUp, className: "bg-badge-highlight text-badge-highlight-foreground" },
  "estoque-limitado": { label: "Estoque Limitado", icon: AlertTriangle, className: "bg-destructive text-destructive-foreground" },
  "envio-imediato": { label: "Envio Imediato", icon: Truck, className: "bg-whatsapp text-whatsapp-foreground" },
};

export default function ProductBadge({ type }: { type: keyof typeof badgeConfig }) {
  const config = badgeConfig[type];
  const Icon = config.icon;
  return (
    <span className={`inline-flex items-center gap-1 rounded-full px-2.5 py-1 text-xs font-semibold ${config.className}`}>
      <Icon size={12} />
      {config.label}
    </span>
  );
}
