import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X } from "lucide-react";
import { getWhatsAppLink } from "@/data/products";
import logo from "@/assets/logo.svg"

const navLinks = [
  { label: "Início", href: "/" },
  { label: "Sobre", href: "/#sobre" },
  { label: "Peças", href: "/pecas" },
  { label: "Nossa História", href: "/#historia" },
  { label: "Contato", href: "/#contato" },
];

export default function Header() {
  const [open, setOpen] = useState(false);
  const location = useLocation();

  const handleNavClick = (href: string) => {
    setOpen(false);
    if (href.startsWith("/#")) {
      const id = href.replace("/#", "");
      if (location.pathname === "/") {
        document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
      }
    }
  };

  return (
    <header className="sticky top-0 z-50 border-b bg-card/95 backdrop-blur supports-[backdrop-filter]:bg-card/80">
      <div className="container flex h-16 items-center justify-between md:h-20">
        {/* Logo */}
        <Link to="/" className="flex flex-col leading-none">
        <div className="w-md-52 w-52 flex items-center justify-center">
          <img src={logo} alt="Ribeirão Câmbio" />
        </div>
          {/* <span className="font-display text-xl font-bold tracking-tight text-foreground md:text-2xl">
            RIBEIRÃO CÂMBIO
          </span>
          <span className="text-[10px] tracking-[0.35em] text-muted-foreground">RC</span> */}
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden items-center gap-8 md:flex">
          {navLinks.map((l) => (
            <Link
              key={l.label}
              to={l.href.startsWith("/#") && location.pathname !== "/" ? "/" : l.href}
              onClick={() => handleNavClick(l.href)}
              className="text-sm font-medium text-muted-foreground transition-colors hover:text-foreground"
            >
              {l.label}
            </Link>
          ))}
          <a
            href={getWhatsAppLink()}
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-md bg-primary px-5 py-2.5 text-sm font-semibold text-primary-foreground transition-colors hover:bg-primary/90"
          >
            Solicitar Orçamento
          </a>
        </nav>

        {/* Mobile toggle */}
        <button
          onClick={() => setOpen(!open)}
          className="inline-flex items-center justify-center rounded-md p-2 text-foreground md:hidden"
          aria-label="Menu"
        >
          {open ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Nav */}
      {open && (
        <nav className="border-t bg-card px-6 py-4 md:hidden">
          <div className="flex flex-col gap-4">
            {navLinks.map((l) => (
              <Link
                key={l.label}
                to={l.href.startsWith("/#") && location.pathname !== "/" ? "/" : l.href}
                onClick={() => handleNavClick(l.href)}
                className="text-sm font-medium text-muted-foreground transition-colors hover:text-foreground"
              >
                {l.label}
              </Link>
            ))}
            <a
              href={getWhatsAppLink()}
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-md bg-primary px-5 py-2.5 text-center text-sm font-semibold text-primary-foreground"
            >
              Solicitar Orçamento
            </a>
          </div>
        </nav>
      )}
    </header>
  );
}
