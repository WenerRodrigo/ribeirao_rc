import { Menu, X } from "lucide-react";
import { useEffect, useState } from "react";
import logo from "../assets/logo.svg";

interface HeaderProps {
  onNavigate?: (id: string) => void;
}

const Header: React.FC<HeaderProps> = ({ onNavigate }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isMenuOpen]);

  const scrollToSection = (id: string) => {
    if (onNavigate) {
      onNavigate(id);
    } else {
      const element = document.getElementById(id);
      if (element) {
        element.scrollIntoView({ behavior: "smooth" });
      }
    }
  };

  const navigateHome = () => {
    window.location.href = "/";
  };

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          isScrolled ? "bg-white shadow-lg" : "bg-transparent"
        }`}
      >
        <nav className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <button
              data-testid="menu-toggle"
              className="md:hidden text-gray-700 order-1"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              <Menu size={24} />
            </button>

            <button
              onClick={navigateHome}
              className="flex items-center space-x-2 order-2 md:order-1"
            >
              <div className="w-56 flex items-center justify-center">
                <img src={logo} alt="Ribeirão Câmbio" />
              </div>
              {/* <span className="text-2xl font-bold text-gray-600">
                Ribeirão <span className="">Câmbio</span>
              </span> */}
            </button>

            <div className="hidden md:flex items-center space-x-8 order-3 md:order-2">
              <button
                onClick={() => scrollToSection('inicio')}
                className="text-gray-700 hover:text-zinc-400 transition-colors font-medium"
              >
                Início
              </button>
              <button
                onClick={() => scrollToSection('sobre')}
                className="text-gray-700 hover:text-zinc-400 transition-colors font-medium"
              >
                Sobre
              </button>
              <button
                onClick={() => scrollToSection('pecas')}
                className="text-gray-700 hover:text-zinc-400 transition-colors font-medium"
              >
                Peças
              </button>
              <button
                onClick={() => scrollToSection('historia')}
                className="text-gray-700 hover:text-zinc-400 transition-colors font-medium"
              >
                Nossa História
              </button>
              <button
                onClick={() => scrollToSection('contato')}
                className="bg-zinc-900 text-white px-6 py-2 rounded-lg hover:bg-zinc-700 transition-colors font-medium"
              >
                Contato
              </button>
            </div>
            <div className="md:hidden w-6 order-3"></div>
          </div>
        </nav>
      </header>
      {isMenuOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-50 z-40 md:hidden"
          onClick={() => setIsMenuOpen(false)}
        />
      )}
      <div
        className={`fixed top-0 left-0 h-full w-80 bg-white shadow-2xl z-50 transform transition-transform duration-300 ease-in-out md:hidden ${
          isMenuOpen ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        <div className="p-6">
          <div className="flex items-center justify-between mb-8">
            <div className="flex items-center space-x-2">
              <div className="w-10 h-10 bg-grandient-to-br from-turquoise to-turquoise rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-xl">RC</span>
              </div>
              <span className="text-xl font-bold text-zinc-900">
                Ribeirão <span className="text-zinc-900">Câmbio</span>
              </span>
            </div>
            <button
              data-testid="menu-close"
              onClick={() => setIsMenuOpen(false)}
              className="text-gray-700 hover:text-gray-900"
            >
              <X size={24} />
            </button>
          </div>
          <nav className="space-y-1">
            <button
              onClick={() => scrollToSection("inicio")}
              className="block w-full text-left text-gray-700 hover:text-turquoise hover:bg-blue-50 transition-colors py-3 px-4 rounded-lg font-medium"
            >
              Início
            </button>
            <button
              onClick={() => scrollToSection("sobre")}
              className="block w-full text-left text-gray-700 hover:text-turquoise hover:bg-blue-50 transition-colors py-3 px-4 rounded-lg font-medium"
            >
              Sobre
            </button>
            <button
              onClick={() => scrollToSection("pecas")}
              className="block w-full text-left text-gray-700 hover:text-turquoise hover:bg-blue-50 transition-colors py-3 px-4 rounded-lg font-medium"
            >
              Peças
            </button>
            <button
              onClick={() => scrollToSection("historia")}
              className="block w-full text-left text-gray-700 hover:text-turquoise hover:bg-blue-50 transition-colors py-3 px-4 rounded-lg font-medium"
            >
              Nossa História
            </button>
            <button
              onClick={() => scrollToSection("contato")}
              className="block w-full text-left bg-green-600 text-white hover:bg-turquoise transition-colors py-3 px-4 rounded-lg font-medium mt-4"
            >
              Contato
            </button>
          </nav>
        </div>
      </div>
    </>
  );
};

export default Header;
