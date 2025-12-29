import magazine1 from "@/assets/magazines/magazine-1.png";
import magazine2 from "@/assets/magazines/magazine-2.png";
import magazine3 from "@/assets/magazines/magazine-3.png";
import magazine4 from "@/assets/magazines/magazine-4.png";
import magazine5 from "@/assets/magazines/magazine-5.png";

const FasciculosSection = () => {
  return (
    <section className="py-20 md:py-28 bg-gradient-to-br from-amber-50 via-orange-50 to-amber-100 relative overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-orange-400 via-red-500 to-orange-400" />
      <div className="absolute top-20 right-0 w-64 h-64 bg-orange-200/30 rounded-full blur-3xl" />
      <div className="absolute bottom-20 left-0 w-64 h-64 bg-amber-200/30 rounded-full blur-3xl" />

      <div className="container mx-auto px-4 relative z-10">
        {/* Header */}
        <div className="text-center mb-16 md:mb-20 max-w-4xl mx-auto animate-fade-in">
          <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl lg:text-6xl italic text-gray-800 leading-tight">
            Cada fascículo inclui detalhes, histórias reais e curiosidades que não conhecia{" "}
            <span className="text-orange-600">e que o vão surpreender!</span>
          </h2>
        </div>

        {/* Content Grid */}
        <div className="space-y-16 md:space-y-24">
          
          {/* Row 1: História e cronologia */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
            {/* Left text */}
            <div className="lg:col-span-3 text-gray-700 text-sm md:text-base leading-relaxed">
              <p>
                Conheça os dados técnicos de cada veículo e os detalhes mecânicos que os caracterizam: velocidade, potência, peso e dimensões. Perceberá como, ao longo dos tempos, o perfil geral dos carros foi evoluindo, até chegarmos às máquinas atuais, tão sofisticadas e admiradas.
              </p>
            </div>

            {/* Center - Magazine image 1 */}
            <div className="lg:col-span-2 flex justify-center">
              <div className="relative">
                <div className="absolute -top-4 left-1/2 -translate-x-1/2 w-0.5 h-8 bg-orange-400" />
                <img 
                  src={magazine1} 
                  alt="Fascículo - História" 
                  className="w-40 md:w-48 drop-shadow-2xl hover:scale-105 transition-transform duration-300"
                />
              </div>
            </div>

            {/* Center - Title and text */}
            <div className="lg:col-span-4">
              <h3 className="font-serif text-3xl md:text-4xl italic text-gray-800 mb-4">
                <span className="text-orange-600">História</span><br />
                e cronologia
              </h3>
              <p className="text-gray-700 text-sm md:text-base leading-relaxed">
                Acompanhe a origem de cada carro e em que contexto foram projetados e produzidos. Conheça melhor os primeiros anos de vida de cada modelo, os desafios que se colocaram, as expetativas criadas, as soluções que ofereceu no passado ou os progressos que promete atualmente, para atrair futuros utilizadores.
              </p>
            </div>

            {/* Right - Magazine image 2 and text */}
            <div className="lg:col-span-3 flex flex-col items-center lg:items-start gap-4">
              <img 
                src={magazine2} 
                alt="Fascículo - Cronologia" 
                className="w-48 md:w-56 drop-shadow-2xl hover:scale-105 transition-transform duration-300"
              />
              <p className="text-gray-700 text-sm leading-relaxed text-center lg:text-left">
                Descubra, pormenorizadamente, os acontecimentos que marcaram o ciclo de vida de cada carro, quer dos clássicos, quer dos mais recentes: os momentos de glória, os períodos de decadência, bem como as diferentes gerações e versões com que se foram atualizando, ao longo dos anos, para manterem uma presença forte no mercado.
              </p>
            </div>
          </div>

          {/* Row 2: Design e caraterísticas */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
            {/* Left - Magazine images */}
            <div className="lg:col-span-4 flex justify-center gap-4">
              <img 
                src={magazine3} 
                alt="Fascículo - Design" 
                className="w-32 md:w-40 drop-shadow-2xl hover:scale-105 transition-transform duration-300"
              />
              <img 
                src={magazine4} 
                alt="Fascículo - Caraterísticas" 
                className="w-32 md:w-40 drop-shadow-2xl hover:scale-105 transition-transform duration-300 mt-8"
              />
            </div>

            {/* Center - Title and text */}
            <div className="lg:col-span-4">
              <h3 className="font-serif text-3xl md:text-4xl italic text-gray-800 mb-4">
                <span className="text-orange-600">Design e</span><br />
                caraterísticas
              </h3>
              <p className="text-gray-700 text-sm md:text-base leading-relaxed">
                Observe ao pormenor o que carateriza a sua vista frontal, lateral e traseira, bem como o seu interior. Ao longo dos tempos, a evolução estética no setor automóvel tem sido espetacular. É ao design que, hoje, mais do que nunca, devemos o seu impacto na nossa memória.
              </p>
            </div>

            {/* Right - Text and Magazine image */}
            <div className="lg:col-span-4 flex flex-col lg:flex-row items-center gap-6">
              <p className="text-gray-700 text-sm leading-relaxed text-center lg:text-left flex-1">
                Surpreenda-se com aquelas curiosidades e histórias que nunca lhe contaram. Além disso, poderá encontrar traços estilísticos ou mecânicos em destaque, que lhe poderiam passar despercebidos.
              </p>
              <img 
                src={magazine5} 
                alt="Fascículo - Curiosidades" 
                className="w-48 md:w-56 drop-shadow-2xl hover:scale-105 transition-transform duration-300"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FasciculosSection;