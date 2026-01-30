import Header from '../components/Header';
import Footer from '../components/Footer';
import WhatsAppButton from '../components/WathasAppButton';


export default function TermosUso() {
  return (
    <div className="min-h-screen bg-white">
      <Header />

      <main className="pt-32 pb-20">
        <div className="container mx-auto px-4 max-w-4xl">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Termos de Uso
          </h1>
          <p className="text-gray-600 mb-12">
            Última atualização: {new Date().toLocaleDateString('pt-BR')}
          </p>

          <div className="prose prose-lg max-w-none space-y-8">
            <section>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">
                1. Aceitação dos Termos
              </h2>
              <p className="text-gray-600 leading-relaxed">
                Ao acessar e utilizar os serviços da Ribeirão Câmbio, você concorda em
                cumprir e estar vinculado a estes Termos de Uso. Se você não concordar
                com qualquer parte destes termos, não deverá utilizar nossos serviços.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">
                2. Serviços Oferecidos
              </h2>
              <p className="text-gray-600 leading-relaxed mb-4">
                A Ribeirão Câmbio oferece venda de peças de câmbio automotivo,
                incluindo mas não limitado a:
              </p>
              <ul className="space-y-2 text-gray-600">
                <li className="flex items-start space-x-3">
                  <span className="text-blue-600 font-bold mt-1">•</span>
                  <span>Câmbios completos novos e recondicionados</span>
                </li>
                <li className="flex items-start space-x-3">
                  <span className="text-blue-600 font-bold mt-1">•</span>
                  <span>Peças individuais de câmbio</span>
                </li>
                <li className="flex items-start space-x-3">
                  <span className="text-blue-600 font-bold mt-1">•</span>
                  <span>Kits de embreagem</span>
                </li>
                <li className="flex items-start space-x-3">
                  <span className="text-blue-600 font-bold mt-1">•</span>
                  <span>Consultoria técnica especializada</span>
                </li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">
                3. Cadastro e Conta
              </h2>
              <p className="text-gray-600 leading-relaxed">
                Para realizar compras, você pode precisar criar uma conta fornecendo
                informações precisas e atualizadas. Você é responsável por manter a
                confidencialidade de sua senha e por todas as atividades que ocorram em
                sua conta. Notifique-nos imediatamente sobre qualquer uso não
                autorizado.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">
                4. Pedidos e Pagamentos
              </h2>
              <p className="text-gray-600 leading-relaxed mb-4">
                Ao fazer um pedido, você concorda em fornecer informações corretas de
                pagamento e entrega. Os preços estão sujeitos a alterações sem aviso
                prévio. Reservamo-nos o direito de recusar ou cancelar qualquer pedido
                por qualquer motivo, incluindo:
              </p>
              <ul className="space-y-2 text-gray-600">
                <li className="flex items-start space-x-3">
                  <span className="text-blue-600 font-bold mt-1">•</span>
                  <span>Disponibilidade limitada de produtos</span>
                </li>
                <li className="flex items-start space-x-3">
                  <span className="text-blue-600 font-bold mt-1">•</span>
                  <span>Erros no preço ou descrição do produto</span>
                </li>
                <li className="flex items-start space-x-3">
                  <span className="text-blue-600 font-bold mt-1">•</span>
                  <span>Problemas identificados no processo de pagamento</span>
                </li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">
                5. Garantias e Devoluções
              </h2>
              <p className="text-gray-600 leading-relaxed mb-4">
                Todos os nossos produtos possuem garantia conforme especificado no
                momento da compra. As políticas de devolução incluem:
              </p>
              <ul className="space-y-2 text-gray-600">
                <li className="flex items-start space-x-3">
                  <span className="text-blue-600 font-bold mt-1">•</span>
                  <span>
                    Prazo de 7 dias para devolução de produtos com defeito de fabricação
                  </span>
                </li>
                <li className="flex items-start space-x-3">
                  <span className="text-blue-600 font-bold mt-1">•</span>
                  <span>
                    Produtos devem estar em sua embalagem original e sem sinais de uso
                  </span>
                </li>
                <li className="flex items-start space-x-3">
                  <span className="text-blue-600 font-bold mt-1">•</span>
                  <span>
                    Nota fiscal e comprovante de compra são obrigatórios
                  </span>
                </li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">
                6. Limitação de Responsabilidade
              </h2>
              <p className="text-gray-600 leading-relaxed">
                A Ribeirão Câmbio não se responsabiliza por danos indiretos,
                incidentais ou consequenciais resultantes do uso de nossos produtos.
                Nossa responsabilidade está limitada ao valor pago pelo produto. A
                instalação adequada das peças é de responsabilidade do cliente ou de
                profissional qualificado contratado pelo cliente.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">
                7. Propriedade Intelectual
              </h2>
              <p className="text-gray-600 leading-relaxed">
                Todo o conteúdo deste site, incluindo textos, gráficos, logos, imagens
                e software, é propriedade da Ribeirão Câmbio ou de seus fornecedores de
                conteúdo e está protegido por leis de propriedade intelectual. Você não
                pode reproduzir, distribuir ou criar trabalhos derivados sem
                autorização expressa.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">
                8. Conduta do Usuário
              </h2>
              <p className="text-gray-600 leading-relaxed mb-4">
                Ao utilizar nossos serviços, você concorda em não:
              </p>
              <ul className="space-y-2 text-gray-600">
                <li className="flex items-start space-x-3">
                  <span className="text-blue-600 font-bold mt-1">•</span>
                  <span>
                    Violar qualquer lei ou regulamento aplicável
                  </span>
                </li>
                <li className="flex items-start space-x-3">
                  <span className="text-blue-600 font-bold mt-1">•</span>
                  <span>
                    Transmitir conteúdo ofensivo, difamatório ou ilegal
                  </span>
                </li>
                <li className="flex items-start space-x-3">
                  <span className="text-blue-600 font-bold mt-1">•</span>
                  <span>
                    Interferir no funcionamento adequado do site
                  </span>
                </li>
                <li className="flex items-start space-x-3">
                  <span className="text-blue-600 font-bold mt-1">•</span>
                  <span>
                    Tentar obter acesso não autorizado a sistemas ou dados
                  </span>
                </li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">
                9. Modificações dos Termos
              </h2>
              <p className="text-gray-600 leading-relaxed">
                Reservamo-nos o direito de modificar estes Termos de Uso a qualquer
                momento. As alterações entrarão em vigor imediatamente após a
                publicação no site. O uso continuado de nossos serviços após as
                alterações constitui aceitação dos novos termos.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">
                10. Lei Aplicável
              </h2>
              <p className="text-gray-600 leading-relaxed">
                Estes Termos de Uso são regidos pelas leis da República Federativa do
                Brasil. Qualquer disputa relacionada a estes termos será submetida à
                jurisdição exclusiva dos tribunais da comarca de Ribeirão Preto, SP.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">11. Contato</h2>
              <p className="text-gray-600 leading-relaxed mb-4">
                Para questões sobre estes Termos de Uso, entre em contato conosco:
              </p>
              <div className="bg-blue-50 p-6 rounded-lg">
                <p className="text-gray-700 mb-2">
                  <strong>Email:</strong> contato@ribeiraocambio.com.br
                </p>
                <p className="text-gray-700 mb-2">
                  <strong>Telefone:</strong> (16) 99999-9999
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
