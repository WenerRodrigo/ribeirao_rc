import { useState, useEffect, useCallback } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { Link } from "react-router-dom";
import { getWhatsAppLink } from "@/data/products";
import hero1 from "@/assets/hero-1.jpg";
import hero2 from "@/assets/hero-2.jpg";
import hero3 from "@/assets/hero-3.jpg";

const slides = [
  {
    image: hero1,
    title: "Especialistas em Câmbio Automotivo",
    subtitle: "Peças de qualidade para câmbio manual",
    cta: "Ver Peças",
    href: "/pecas",
    external: false,
  },
  {
    image: hero2,
    title: "Atendemos Oficinas e Mecânicos",
    subtitle: "Enviamos para todo Brasil",
    cta: "Solicitar Orçamento",
    href: getWhatsAppLink(),
    external: true,
  },
  {
    image: hero3,
    title: "Peças Selecionadas e Garantia de Qualidade",
    subtitle: "Estoque disponível e suporte técnico",
    cta: "Falar no WhatsApp",
    href: getWhatsAppLink(),
    external: true,
  },
];

export default function HeroCarousel() {
  const [current, setCurrent] = useState(0);

  const next = useCallback(() => setCurrent((c) => (c + 1) % slides.length), []);
  const prev = useCallback(() => setCurrent((c) => (c - 1 + slides.length) % slides.length), []);

  useEffect(() => {
    const t = setInterval(next, 6000);
    return () => clearInterval(t);
  }, [next]);

  const slide = slides[current];

  return (
    <section className="relative h-[70vh] min-h-[500px] overflow-hidden bg-primary">
      {/* Background images */}
      {slides.map((s, i) => (
        <div
          key={i}
          className="absolute inset-0 transition-opacity duration-700"
          style={{ opacity: i === current ? 1 : 0 }}
        >
          <img src={s.image} alt="" className="h-full w-full object-cover" />
          <div className="absolute inset-0 bg-gradient-to-r from-primary/90 via-primary/60 to-primary/30" />
        </div>
      ))}

      {/* Content */}
      <div className="container relative z-10 flex h-full items-center">
        <div className="max-w-2xl animate-fade-in">
          <h1 className="font-display text-4xl font-bold leading-tight text-primary-foreground md:text-5xl lg:text-6xl">
            {slide.title}
          </h1>
          <p className="mt-4 text-lg text-primary-foreground/80 md:text-xl">
            {slide.subtitle}
          </p>
          <div className="mt-8">
            {slide.external ? (
              <a
                href={slide.href}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center rounded-md bg-whatsapp px-8 py-3.5 text-sm font-semibold text-whatsapp-foreground shadow-lg transition-transform hover:scale-105"
              >
                {slide.cta}
              </a>
            ) : (
              <Link
                to={slide.href}
                className="inline-flex items-center rounded-md bg-accent px-8 py-3.5 text-sm font-semibold text-accent-foreground shadow-lg transition-transform hover:scale-105"
              >
                {slide.cta}
              </Link>
            )}
          </div>
        </div>
      </div>

      {/* Arrows */}
      <button onClick={prev} className="absolute left-4 top-1/2 z-10 -translate-y-1/2 rounded-full bg-card/20 p-2 text-primary-foreground backdrop-blur hover:bg-card/40" aria-label="Anterior">
        <ChevronLeft size={24} />
      </button>
      <button onClick={next} className="absolute right-4 top-1/2 z-10 -translate-y-1/2 rounded-full bg-card/20 p-2 text-primary-foreground backdrop-blur hover:bg-card/40" aria-label="Próximo">
        <ChevronRight size={24} />
      </button>

      {/* Dots */}
      <div className="absolute bottom-6 left-1/2 z-10 flex -translate-x-1/2 gap-2">
        {slides.map((_, i) => (
          <button
            key={i}
            onClick={() => setCurrent(i)}
            className={`h-2.5 rounded-full transition-all ${i === current ? "w-8 bg-accent" : "w-2.5 bg-primary-foreground/40"}`}
            aria-label={`Slide ${i + 1}`}
          />
        ))}
      </div>
    </section>
  );
}
