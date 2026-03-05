import { useParams, Link } from "react-router-dom";
import { useState } from "react";
import { ChevronLeft, MessageCircle, ShieldCheck, Package, Truck } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import WhatsAppFab from "@/components/WhatsAppFab";
import ProductBadge from "@/components/ProductBadge";
import { getWhatsAppLink } from "@/data/products";
import { useProduct } from "@/hooks/useProducts";

export default function ProductDetail() {
  const { id } = useParams<{ id: string }>();
  const { data: product, isLoading } = useProduct(id);
  const [selectedImage, setSelectedImage] = useState(0);

  if (isLoading) {
    return (
      <div className="min-h-screen bg-background">
        <Header />
        <div className="container py-20 text-center text-muted-foreground">Carregando...</div>
        <Footer />
      </div>
    );
  }

  if (!product) {
    return (
      <div className="min-h-screen bg-background">
        <Header />
        <div className="container py-20 text-center">
          <p className="text-lg text-muted-foreground">Produto não encontrado</p>
          <Link to="/pecas" className="mt-4 inline-block text-sm font-semibold text-accent hover:underline">
            ← Voltar para peças
          </Link>
        </div>
        <Footer />
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background">
      <Header />

      <div className="container py-8">
        <Link to="/pecas" className="inline-flex items-center gap-1 text-sm text-muted-foreground hover:text-accent">
          <ChevronLeft size={16} />
          Voltar para peças
        </Link>

        <div className="mt-6 grid gap-10 lg:grid-cols-2">
          {/* Gallery */}
          <div>
            <div className="overflow-hidden rounded-lg border bg-card">
              <img
                src={product.images[selectedImage]}
                alt={product.name}
                className="aspect-square w-full object-cover transition-transform duration-300 hover:scale-110"
              />
            </div>
            {product.images.length > 1 && (
              <div className="mt-4 flex gap-3">
                {product.images.map((img, i) => (
                  <button
                    key={i}
                    onClick={() => setSelectedImage(i)}
                    className={`h-20 w-20 overflow-hidden rounded-md border-2 ${i === selectedImage ? "border-accent" : "border-transparent"}`}
                  >
                    <img src={img} alt="" className="h-full w-full object-cover" />
                  </button>
                ))}
              </div>
            )}
          </div>

          {/* Info */}
          <div>
            {product.badge && (
              <div className="mb-4">
                <ProductBadge type={product.badge} />
              </div>
            )}
            <h1 className="font-display text-2xl font-bold text-foreground md:text-3xl">{product.name}</h1>
            <p className="mt-1 text-sm font-semibold text-accent">Código: {product.code}</p>

            <div className="mt-6 space-y-3 rounded-lg border bg-muted/50 p-5">
              <h3 className="font-display text-sm font-semibold text-foreground">Aplicação</h3>
              <div className="grid gap-2 text-sm">
                <div className="flex justify-between">
                  <span className="text-muted-foreground">Marca</span>
                  <span className="font-medium text-foreground">{product.brand}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-muted-foreground">Modelo</span>
                  <span className="font-medium text-foreground">{product.model}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-muted-foreground">Motorização</span>
                  <span className="font-medium text-foreground">{product.engine}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-muted-foreground">Ano</span>
                  <span className="font-medium text-foreground">{product.yearStart} a {product.yearEnd}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-muted-foreground">Categoria</span>
                  <span className="font-medium text-foreground">{product.category}</span>
                </div>
              </div>
            </div>

            <div className="mt-6">
              <h3 className="font-display text-sm font-semibold text-foreground">Descrição</h3>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{product.description}</p>
            </div>

            <div className="mt-6 flex flex-col gap-3 sm:flex-row">
              <div className="flex items-center gap-2 text-sm text-muted-foreground">
                <ShieldCheck size={16} className="text-accent" />
                Garantia: {product.guarantee}
              </div>
              <div className="flex items-center gap-2 text-sm text-muted-foreground">
                <Package size={16} className="text-accent" />
                {product.availability}
              </div>
              <div className="flex items-center gap-2 text-sm text-muted-foreground">
                <Truck size={16} className="text-accent" />
                {product.shipping}
              </div>
            </div>

            <a
              href={getWhatsAppLink(product.name)}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-8 flex w-full items-center justify-center gap-3 rounded-lg bg-whatsapp px-6 py-4 text-center text-sm font-bold text-whatsapp-foreground shadow-lg transition-transform hover:scale-[1.02] md:text-base"
            >
              <MessageCircle size={22} className="shrink-0" />
              <span className="text-center">
                Solicitar orçamento via whatsapp
              </span>
            </a>
          </div>
        </div>
      </div>

      <Footer />
      <WhatsAppFab />
    </div>
  );
}
