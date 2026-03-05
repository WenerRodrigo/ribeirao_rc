import { Link } from "react-router-dom";
import { Wrench, Truck, ShieldCheck, HeadphonesIcon } from "lucide-react";
import Header from "@/components/Header";
import HeroCarousel from "@/components/HeroCarousel";
import ProductCard from "@/components/ProductCard";
import Footer from "@/components/Footer";
import WhatsAppFab from "@/components/WhatsAppFab";
import { getWhatsAppLink } from "@/data/products";
import { useProducts } from "@/hooks/useProducts";

const features = [
  { icon: Wrench, title: "Peças Técnicas", desc: "Componentes de câmbio manual com alta precisão" },
  { icon: Truck, title: "Envio Nacional", desc: "Enviamos para todo o Brasil com rastreamento" },
  { icon: ShieldCheck, title: "Garantia", desc: "Qualidade e Garantia em todas as peças" },
  { icon: HeadphonesIcon, title: "Suporte Técnico", desc: "Equipe especializada para tirar suas dúvidas" },
];

const Index = () => {
  const { data: products = [] } = useProducts();
  const featured = products.filter((p) => p.badge);

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <HeroCarousel />

      {/* Features */}
      <section className="border-b bg-card py-12">
        <div className="container grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {features.map((f) => (
            <div key={f.title} className="flex items-start gap-4">
              <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-lg bg-accent/10 text-accent">
                <f.icon size={24} />
              </div>
              <div>
                <h3 className="font-display text-sm font-semibold text-foreground">{f.title}</h3>
                <p className="mt-1 text-sm text-muted-foreground">{f.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Featured Products */}
      <section className="bg-muted py-20">
        <div className="container">
          <div className="flex items-end justify-between">
            <div>
              <h2 className="font-display text-3xl font-bold text-foreground md:text-4xl">Peças em Destaque</h2>
              <p className="mt-2 text-muted-foreground">Confira nossas peças mais procuradas</p>
            </div>
            <Link to="/pecas" className="hidden text-sm font-semibold text-accent hover:underline md:block">
              Ver todas →
            </Link>
          </div>
          <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {featured.slice(0, 4).map((p) => (
              <ProductCard key={p.id} product={p} />
            ))}
          </div>
          <div className="mt-8 text-center md:hidden">
            <Link to="/pecas" className="text-sm font-semibold text-accent hover:underline">Ver todas as peças →</Link>
          </div>
        </div>
      </section>

      {/* History */}
      <section id="historia" className="py-20">
        <div className="container text-center">
          <h2 className="font-display text-3xl font-bold text-foreground md:text-4xl">Nossa História</h2>
          <p className="mx-auto mt-4 max-w-2xl text-muted-foreground">
            A Ribeirão Câmbio nasceu da paixão pela mecânica automotiva. Com mais de 2 anos de experiência no mercado de peças para câmbio manual, nos consolidamos como referência em Ribeirão Preto – SP, atendendo oficinas e mecânicos com peças selecionadas, garantia de qualidade e envio para todo o Brasil.
          </p>
          <div className="mt-10 grid gap-6 sm:grid-cols-3">
            <div className="rounded-lg border bg-card p-6">
              <p className="font-display text-3xl font-bold text-accent">+2</p>
              <p className="mt-1 text-sm text-muted-foreground">Anos de Experiência</p>
            </div>
            <div className="rounded-lg border bg-card p-6">
              <p className="font-display text-3xl font-bold text-accent">+500</p>
              <p className="mt-1 text-sm text-muted-foreground">Peças em Estoque</p>
            </div>
            <div className="rounded-lg border bg-card p-6">
              <p className="font-display text-3xl font-bold text-accent">+1000</p>
              <p className="mt-1 text-sm text-muted-foreground">Clientes Atendidos</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-primary py-20">
        <div className="container text-center">
          <h2 className="font-display text-3xl font-bold text-primary-foreground md:text-4xl">
            Pronto para Começar?
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-primary-foreground/70">
            Entre em contato conosco e encontre as melhores peças para seu veículo
          </p>
          <a
            href={getWhatsAppLink()}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-8 inline-flex items-center rounded-md bg-whatsapp px-10 py-4 text-base font-semibold text-whatsapp-foreground shadow-lg transition-transform hover:scale-105"
          >
            Falar no WhatsApp
          </a>
        </div>
      </section>

      <Footer />
      <WhatsAppFab />
    </div>
  );
};

export default Index;
