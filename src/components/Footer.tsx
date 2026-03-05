import { Link } from "react-router-dom";
import { Phone, Mail, MapPin, Building2, Instagram, Facebook } from "lucide-react";
import { getWhatsAppLink } from "@/data/products";

export default function Footer() {
  const socialLinks = [
    { name: "Facebook", icon: Facebook, href: "https://www.facebook.com/RibeiraoCambio/" },
    { name: "Instagram", icon: Instagram, href: "https://www.instagram.com/ribeiraocambio/" },
  ];
  return (
    <footer id="contato" className="bg-footer text-footer-foreground">
      <div className="container py-16">
        <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-4">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-2">
              <span className="rounded bg-accent px-3 py-2 font-display text-sm font-bold text-accent-foreground">RC</span>
              <span className="font-display text-lg font-bold text-card">Ribeirão Câmbio</span>
            </div>
            <p className="mt-4 text-sm leading-relaxed text-footer-foreground/70">
              Especialistas em peças de câmbio automotivo, oferecendo qualidade e confiança há mais de 2 anos.
            </p>
          </div>

          {/* Links */}
          <div>
            <h4 className="font-display text-sm font-semibold text-card">Links Rápidos</h4>
            <ul className="mt-4 space-y-2 text-sm">
              <li><Link to="/" className="hover:text-accent">Início</Link></li>
              <li><Link to="/#sobre" className="hover:text-accent">Sobre</Link></li>
              <li><Link to="/pecas" className="hover:text-accent">Peças</Link></li>
              <li><Link to="/#historia" className="hover:text-accent">Nossa História</Link></li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-display text-sm font-semibold text-card">Contato</h4>
            <ul className="mt-4 space-y-3 text-sm">
              <li className="flex items-center gap-2"><Phone size={14} /> (16) 98111-5555</li>
              <li className="flex items-center gap-2"><Mail size={14} /> contato@ribeiraocambio.com.br</li>
              <li className="flex items-center gap-2"><MapPin size={14} /> Ribeirão Preto, SP</li>
              <li className="flex items-center gap-2"><Building2 size={14} /> CNPJ: 56.283.588/0001-92</li>
            </ul>
          </div>

          {/* Social */}
          <div>
            <h4 className="font-display text-sm font-semibold text-card">Redes Sociais</h4>
            <p className="mt-4 text-sm text-footer-foreground/70">Siga-nos nas redes sociais e fique por dentro das novidades</p>
            <div className="mt-4 flex gap-3">
              {socialLinks.map(({ name, icon: Icon, href }) => (
                <a
                  key={name}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex h-10 w-10 items-center justify-center rounded-full bg-footer-foreground/10 text-footer-foreground transition-all duration-300 hover:scale-105 hover:bg-accent hover:text-accent-foreground"
                  aria-label={name}
                >
                  <Icon size={18} strokeWidth={1.5} />
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
      <div className="border-t border-footer-foreground/10">
        <div className="container flex flex-col items-center justify-between gap-4 py-6 text-xs text-footer-foreground/50 md:flex-row">
          <span>© 2026 Ribeirão Câmbio. Todos os direitos reservados.</span>
          <div className="flex gap-6">
            <a href="#" className="hover:text-accent">Política de Privacidade</a>
            <a href="#" className="hover:text-accent">Termos de Uso</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
