

import oficinaImage from '../assets/oficina.jpg';
import qualidadeImage from '../assets/qualidade.jpg';
import cambiosCompletos from '../assets/cambios-completos.jpg';
import pecasIndividuias from '../assets/pecas.webp';
import kitEmbreagem from '../assets/kit-emgreagem.png';
import history from '../assets/history.png';
import Footer from '../components/Footer';
import Header from '../components/Header';
import WhatsAppButton from '../components/WathasAppButton';

export default function HomePage() {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen bg-white">
      <Header onNavigate={scrollToSection} />

      <section
        id="inicio"
        className="pt-32 pb-20 bg-white"
      >
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6 leading-tight">
                Especialistas em{' '}
                <span className="text-gray-900">Câmbio Automotivo</span>
              </h1>
              <p className="text-xl text-gray-600 mb-8 leading-relaxed">
                Peças de câmbio de alta qualidade para todos os tipos de veículos.
                Experiência, confiança e as melhores soluções para o seu carro.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <button
                  onClick={() => scrollToSection('pecas')}
                  className="bg-zinc-900 text-white px-8 py-4 rounded-lg hover:bg-zinc-700 transition-all transform font-semibold text-lg shadow-lg"
                >
                  Ver Peças
                </button>
                <button
                  onClick={() => scrollToSection('contato')}
                  className="bg-white text-zinc-900 border-2 border-zinc-900 px-8 py-4 rounded-lg hover:bg-blue-50 transition-all font-semibold text-lg"
                >
                  Fale Conosco
                </button>
              </div>
            </div>
            <div className="relative">
              <img
                src={oficinaImage}
                alt="Câmbio automotivo"
                className="rounded-2xl shadow-2xl w-full h-auto object-cover"
              />
              <div className="absolute -bottom-6 -left-6 bg-white p-6 rounded-xl shadow-xl">
                <p className="text-3xl font-bold text-zinc-900">+2</p>
                <p className="text-gray-600 font-medium">Anos de Experiência</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="sobre" className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="order-2 md:order-1">
              <img
                src={qualidadeImage}
                alt="Oficina mecânica"
                className="rounded-2xl shadow-xl w-full h-auto object-cover"
              />
            </div>
            <div className="order-1 md:order-2">
              <h2 className="text-4xl font-bold text-gray-900 mb-6">
                Qualidade e Confiança em Cada Peça
              </h2>
              <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                Na Ribeirão Câmbio, oferecemos as melhores peças de câmbio do mercado.
                Nossa equipe especializada garante que você encontre exatamente o que
                precisa para seu veículo.
              </p>
              <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                Trabalhamos com marcas nacionais e importadas, sempre priorizando a
                qualidade e durabilidade. Nosso compromisso é com a satisfação total
                dos nossos clientes.
              </p>
              <ul className="space-y-4">
                <li className="flex items-start space-x-3">
                  <div className="w-6 h-6 bg-zinc-900 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <span className="text-white text-sm">✓</span>
                  </div>
                  <span className="text-gray-700">
                    Peças originais e de alta qualidade
                  </span>
                </li>
                <li className="flex items-start space-x-3">
                  <div className="w-6 h-6 bg-zinc-900 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <span className="text-white text-sm">✓</span>
                  </div>
                  <span className="text-gray-700">
                    Atendimento especializado e personalizado
                  </span>
                </li>
                <li className="flex items-start space-x-3">
                  <div className="w-6 h-6 bg-zinc-900 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <span className="text-white text-sm">✓</span>
                  </div>
                  <span className="text-gray-700">Garantia em todos os produtos</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section id="pecas" className="py-20 bg-gradient-to-b from-gray-50 to-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Nossas Peças
            </h2>
            <p className="text-xl text-gray-600">
              Amplo catálogo de peças de câmbio para seu veículo
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-2xl">
              <img
                src={cambiosCompletos}
                alt="Câmbio completo"
                className="w-full h-64 object-cover"
              />
              <div className="p-6">
                <h3 className="text-2xl font-bold text-gray-900 mb-3">
                  Câmbios Completos
                </h3>
                <p className="text-gray-600 mb-4">
                  Câmbios novos e recondicionados para diversos modelos de veículos,
                  com garantia e qualidade assegurada.
                </p>
                <a
                  href="https://wa.me/5516981115555"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-600 hover:text-blue-700 font-semibold inline-flex items-center"
                >
                  Consultar disponibilidade →
                </a>
              </div>
            </div>

            <div className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-2xl">
              <img
                src={pecasIndividuias}
                alt="Peças de câmbio"
                className="w-full h-64 object-contain"
              />
              <div className="p-6">
                <h3 className="text-2xl font-bold text-gray-900 mb-3">
                  Componentes de Câmbio
                </h3>
                <p className="text-gray-600 mb-4">
                  Engrenagens, rolamentos, sincronizadores e todos os componentes essenciais 
                  para manutenção e reparo de câmbios automotivos
                </p>
                <a
                  href="https://wa.me/5516981115555"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-600 hover:text-blue-700 font-semibold inline-flex items-center"
                >
                  Consultar disponibilidade →
                </a>
              </div>
            </div>

            <div className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-2xl">
              <img
                src={kitEmbreagem}
                alt="Kits de embreagem"
                className="w-full h-64 object-cover"
              />
              <div className="p-6">
                <h3 className="text-2xl font-bold text-gray-900 mb-3">
                  Kits de Embreagem
                </h3>
                <p className="text-gray-600 mb-4">
                  Kits completos de embreagem das melhores marcas, garantindo
                  performance e durabilidade para seu veículo.
                </p>
                <a
                  href="https://wa.me/5516981115555"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-600 hover:text-blue-700 font-semibold inline-flex items-center"
                >
                  Consultar disponibilidade →
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="historia" className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl font-bold text-gray-900 mb-6">Nossa História</h2>
              <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                A Ribeirão Câmbio nasceu da paixão por automóveis e do compromisso com
                a excelência. Há mais de 2 anos no mercado, nos consolidamos como
                referência em peças de câmbio na região.
              </p>
              <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                Nossa trajetória é marcada pela confiança conquistada junto aos nossos
                clientes, sempre oferecendo produtos de qualidade superior e
                atendimento personalizado.
              </p>
              <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                Hoje, atendemos desde pequenos reparos até grandes projetos, sempre com
                o mesmo cuidado e dedicação que nos trouxe até aqui. Somos mais que uma
                loja de peças, somos parceiros na manutenção do seu veículo.
              </p>
              <div className="grid grid-cols-2 gap-6">
                <div className="text-center p-6 bg-blue-50 rounded-xl">
                  <p className="text-4xl font-bold text-zinc-900 mb-2">2+</p>
                  <p className="text-gray-700 font-medium">Anos no Mercado</p>
                </div>
                <div className="text-center p-6 bg-blue-50 rounded-xl">
                  <p className="text-4xl font-bold text-zinc-900 mb-2">1000+</p>
                  <p className="text-gray-700 font-medium">Clientes Satisfeitos</p>
                </div>
              </div>
            </div>
            <div>
              <img
                src={history}
                alt="Equipe Ribeirão Câmbio"
                className="rounded-2xl shadow-xl w-full h-auto object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      <section
        id="contato"
        className="py-20 bg-white text-zinc-900"
      >
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Pronto para Começar?
          </h2>
          <p className="text-xl mb-10 opacity-90">
            Entre em contato conosco e encontre as melhores peças para seu veículo
          </p>
          <a
            href="https://wa.me/5516981115555?text=Olá!%20Gostaria%20de%20saber%20mais%20sobre%20as%20peças%20de%20câmbio."
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block bg-green-500 text-white px-10 py-4 rounded-lg hover:bg-green-600 transition-all transform hover:scale-105 font-semibold text-lg shadow-xl"
          >
            Falar no WhatsApp
          </a>
        </div>
      </section>

      <Footer onNavigate={scrollToSection} />
      <WhatsAppButton />
    </div>
  );
}
