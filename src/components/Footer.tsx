import { Phone, Mail, MapPin, Facebook, Instagram, Linkedin, Building } from 'lucide-react';

interface FooterProps {
  onNavigate?: (id: string) => void;
}

export default function Footer({ onNavigate }: FooterProps) {
  const scrollToSection = (id: string) => {
    if (onNavigate) {
      onNavigate(id);
    } else {
      const element = document.getElementById(id);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }
  };

  return (
    <footer className="bg-zinc-900 text-white pt-16 pb-8">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-4 gap-8 mb-12">
          <div>
            <div className="flex items-center space-x-2 mb-4">
              <div className="w-10 h-10 bg-black rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-xl">RC</span>
              </div>
              <span className="text-xl font-bold">Ribeirão Câmbio</span>
            </div>
            <p className="text-gray-400 leading-relaxed">
              Especialistas em peças de câmbio automotivo, oferecendo qualidade e
              confiança há mais de 2 anos.
            </p>
          </div>

          <div>
            <h3 className="text-lg font-bold mb-4">Links Rápidos</h3>
            <ul className="space-y-2">
              <li>
                <button
                  onClick={() => scrollToSection('inicio')}
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  Início
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollToSection('sobre')}
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  Sobre
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollToSection('pecas')}
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  Peças
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollToSection('historia')}
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  Nossa História
                </button>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-bold mb-4">Contato</h3>
            <ul className="space-y-3">
              <li className="flex items-start space-x-3">
                <Phone size={20} className="text-blue-400 mt-1 flex-shrink-0" />
                <span className="text-gray-400">(16) 99796-9717</span>
              </li>
              <li className="flex items-start space-x-3">
                <Mail size={20} className="text-blue-400 mt-1 flex-shrink-0" />
                <span className="text-gray-400">contato@ribeiraocambio.com.br</span>
              </li>
              <li className="flex items-start space-x-3">
                <MapPin size={20} className="text-blue-400 mt-1 flex-shrink-0" />
                <span className="text-gray-400">Ribeirão Preto, SP</span>
              </li>
              <li className="flex items-start space-x-3">
                <Building size={20} className="text-blue-400 mt-1 flex-shrink-0" />
                <span className="text-gray-400">CNPJ: 56.283.588/0001-92</span>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-bold mb-4">Redes Sociais</h3>
            <p className="text-gray-400 mb-4">
              Siga-nos nas redes sociais e fique por dentro das novidades
            </p>
            <div className="flex space-x-4">
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-blue-600 rounded-full flex items-center justify-center hover:bg-blue-700 transition-colors"
              >
                <Facebook size={20} />
              </a>
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-gradient-to-br from-purple-600 to-pink-600 rounded-full flex items-center justify-center hover:from-purple-700 hover:to-pink-700 transition-colors"
              >
                <Instagram size={20} />
              </a>
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-blue-700 rounded-full flex items-center justify-center hover:bg-blue-800 transition-colors"
              >
                <Linkedin size={20} />
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <p className="text-gray-400 text-sm">
              © {new Date().getFullYear()} Ribeirão Câmbio. Todos os direitos
              reservados.
            </p>
            <div className="flex space-x-6 text-sm">
              <a
                href="/politica-privacidade"
                className="text-gray-400 hover:text-white transition-colors"
              >
                Política de Privacidade
              </a>
              <a
                href="/termos-uso"
                className="text-gray-400 hover:text-white transition-colors"
              >
                Termos de Uso
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
