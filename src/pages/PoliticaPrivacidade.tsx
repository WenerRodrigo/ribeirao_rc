import Header from '../components/Header';
import Footer from '../components/Footer';
import WhatsAppButton from '../components/WathasAppButton';


export default function PoliticaPrivacidade() {
  return (
    <div className="min-h-screen bg-white">
      <Header />

      <main className="pt-32 pb-20">
        <div className="container mx-auto px-4 max-w-4xl">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Política de Privacidade
          </h1>
          <p className="text-gray-600 mb-12">
            Última atualização: {new Date().toLocaleDateString('pt-BR')}
          </p>

          <div className="prose prose-lg max-w-none space-y-8">
            <section>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">
                1. Introdução
              </h2>
              <p className="text-gray-600 leading-relaxed">
                A Ribeirão Câmbio respeita a privacidade de seus clientes e está
                comprometida em proteger suas informações pessoais. Esta Política de
                Privacidade descreve como coletamos, usamos, armazenamos e protegemos
                seus dados pessoais quando você utiliza nossos serviços.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">
                2. Informações que Coletamos
              </h2>
              <p className="text-gray-600 leading-relaxed mb-4">
                Podemos coletar as seguintes informações:
              </p>
              <ul className="space-y-2 text-gray-600">
                <li className="flex items-start space-x-3">
                  <span className="text-blue-600 font-bold mt-1">•</span>
                  <span>
                    Nome completo, CPF ou CNPJ, endereço e informações de contato
                  </span>
                </li>
                <li className="flex items-start space-x-3">
                  <span className="text-blue-600 font-bold mt-1">•</span>
                  <span>
                    Informações sobre seu veículo (marca, modelo, ano)
                  </span>
                </li>
                <li className="flex items-start space-x-3">
                  <span className="text-blue-600 font-bold mt-1">•</span>
                  <span>
                    Histórico de compras e preferências de produtos
                  </span>
                </li>
                <li className="flex items-start space-x-3">
                  <span className="text-blue-600 font-bold mt-1">•</span>
                  <span>
                    Informações de comunicação (emails, mensagens, chamadas)
                  </span>
                </li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">
                3. Como Usamos Suas Informações
              </h2>
              <p className="text-gray-600 leading-relaxed mb-4">
                Utilizamos suas informações pessoais para:
              </p>
              <ul className="space-y-2 text-gray-600">
                <li className="flex items-start space-x-3">
                  <span className="text-blue-600 font-bold mt-1">•</span>
                  <span>
                    Processar seus pedidos e fornecer os produtos solicitados
                  </span>
                </li>
                <li className="flex items-start space-x-3">
                  <span className="text-blue-600 font-bold mt-1">•</span>
                  <span>
                    Melhorar nossos serviços e experiência do cliente
                  </span>
                </li>
                <li className="flex items-start space-x-3">
                  <span className="text-blue-600 font-bold mt-1">•</span>
                  <span>
                    Enviar comunicações sobre produtos, ofertas e promoções
                  </span>
                </li>
                <li className="flex items-start space-x-3">
                  <span className="text-blue-600 font-bold mt-1">•</span>
                  <span>
                    Cumprir obrigações legais e regulatórias
                  </span>
                </li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">
                4. Compartilhamento de Informações
              </h2>
              <p className="text-gray-600 leading-relaxed">
                Não vendemos, alugamos ou compartilhamos suas informações pessoais com
                terceiros para fins de marketing. Podemos compartilhar suas informações
                apenas com fornecedores e prestadores de serviços que nos auxiliam nas
                operações comerciais, sempre sob acordos de confidencialidade.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">
                5. Segurança dos Dados
              </h2>
              <p className="text-gray-600 leading-relaxed">
                Implementamos medidas de segurança técnicas e organizacionais
                apropriadas para proteger suas informações pessoais contra acesso não
                autorizado, alteração, divulgação ou destruição. Utilizamos
                criptografia, controles de acesso e outras tecnologias para garantir a
                segurança de seus dados.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">
                6. Seus Direitos
              </h2>
              <p className="text-gray-600 leading-relaxed mb-4">
                De acordo com a Lei Geral de Proteção de Dados (LGPD), você tem os
                seguintes direitos:
              </p>
              <ul className="space-y-2 text-gray-600">
                <li className="flex items-start space-x-3">
                  <span className="text-blue-600 font-bold mt-1">•</span>
                  <span>Acessar seus dados pessoais</span>
                </li>
                <li className="flex items-start space-x-3">
                  <span className="text-blue-600 font-bold mt-1">•</span>
                  <span>Corrigir dados incompletos ou desatualizados</span>
                </li>
                <li className="flex items-start space-x-3">
                  <span className="text-blue-600 font-bold mt-1">•</span>
                  <span>Solicitar a exclusão de seus dados</span>
                </li>
                <li className="flex items-start space-x-3">
                  <span className="text-blue-600 font-bold mt-1">•</span>
                  <span>Revogar seu consentimento a qualquer momento</span>
                </li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">
                7. Cookies e Tecnologias Similares
              </h2>
              <p className="text-gray-600 leading-relaxed">
                Nosso site pode utilizar cookies e tecnologias similares para melhorar
                sua experiência de navegação, analisar o uso do site e personalizar
                conteúdo. Você pode gerenciar suas preferências de cookies através das
                configurações do seu navegador.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">
                8. Alterações nesta Política
              </h2>
              <p className="text-gray-600 leading-relaxed">
                Reservamo-nos o direito de atualizar esta Política de Privacidade
                periodicamente. Quaisquer alterações serão publicadas nesta página com
                a data de atualização revisada. Recomendamos que você revise esta
                política regularmente.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">9. Contato</h2>
              <p className="text-gray-600 leading-relaxed mb-4">
                Se você tiver dúvidas sobre esta Política de Privacidade ou desejar
                exercer seus direitos, entre em contato conosco:
              </p>
              <div className="bg-blue-50 p-6 rounded-lg">
                <p className="text-gray-700 mb-2">
                  <strong>Email:</strong> contato@ribeiraocambio.com.br
                </p>
                <p className="text-gray-700 mb-2">
                  <strong>Telefone:</strong> (16) 98111-5555
                </p>
                <p className="text-gray-700">
                  <strong>Endereço:</strong> Ribeirão Preto, SP
                </p>
              </div>
            </section>
          </div>
        </div>
      </main>

      <Footer />
      <WhatsAppButton />
    </div>
  );
}
