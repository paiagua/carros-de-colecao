import magazine1 from "@/assets/magazines/magazine-1.png";
import magazine2 from "@/assets/magazines/magazine-2.png";
import magazine3 from "@/assets/magazines/magazine-3.png";
import magazine4 from "@/assets/magazines/magazine-4.png";
import magazine5 from "@/assets/magazines/magazine-5.png";

const FasciculosSection = () => {
  return (
    <section id="fasciculos" className="py-20 md:py-28 bg-gradient-to-br from-amber-50 to-orange-50">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-12 md:mb-16 max-w-3xl mx-auto">
          <h2 className="font-serif text-2xl sm:text-3xl md:text-4xl italic text-foreground leading-snug">
            Cada fascículo inclui detalhes, histórias reais e curiosidades{" "}
            <span className="text-primary">que o vão surpreender!</span>
          </h2>
        </div>

        {/* Content Grid */}
        <div className="grid md:grid-cols-2 gap-12 md:gap-16 max-w-5xl mx-auto">
          
          {/* História e cronologia */}
          <div className="flex flex-col md:flex-row gap-6 items-start">
            <div className="flex gap-3 flex-shrink-0">
              <img 
                src={magazine1} 
                alt="Fascículo - História" 
                className="w-28 md:w-32 drop-shadow-lg hover:scale-105 transition-transform"
              />
              <img 
                src={magazine2} 
                alt="Fascículo - Cronologia" 
                className="w-32 md:w-36 drop-shadow-lg hover:scale-105 transition-transform mt-4"
              />
            </div>
            <div>
              <h3 className="font-serif text-xl md:text-2xl italic text-foreground mb-3">
                <span className="text-primary">História</span> e cronologia
              </h3>
              <p className="text-muted-foreground text-sm leading-relaxed">
                Acompanhe a origem de cada carro e em que contexto foram projetados e produzidos. Conheça os primeiros anos de vida de cada modelo, os desafios, as expetativas e as soluções que ofereceu.
              </p>
            </div>
          </div>

          {/* Design e caraterísticas */}
          <div className="flex flex-col md:flex-row gap-6 items-start">
            <div className="flex gap-3 flex-shrink-0">
              <img 
                src={magazine3} 
                alt="Fascículo - Design" 
                className="w-24 md:w-28 drop-shadow-lg hover:scale-105 transition-transform"
              />
              <img 
                src={magazine4} 
                alt="Fascículo - Caraterísticas" 
                className="w-24 md:w-28 drop-shadow-lg hover:scale-105 transition-transform mt-6"
              />
            </div>
            <div>
              <h3 className="font-serif text-xl md:text-2xl italic text-foreground mb-3">
                <span className="text-primary">Design</span> e caraterísticas
              </h3>
              <p className="text-muted-foreground text-sm leading-relaxed">
                Observe ao pormenor o que carateriza a vista frontal, lateral e traseira, bem como o interior. Descubra os dados técnicos: velocidade, potência, peso e dimensões.
              </p>
            </div>
          </div>

          {/* Curiosidades */}
          <div className="flex flex-col md:flex-row gap-6 items-start md:col-span-2 justify-center">
            <img 
              src={magazine5} 
              alt="Fascículo - Curiosidades" 
              className="w-40 md:w-48 drop-shadow-lg hover:scale-105 transition-transform"
            />
            <div className="max-w-md">
              <h3 className="font-serif text-xl md:text-2xl italic text-foreground mb-3">
                <span className="text-primary">Curiosidades</span> e histórias
              </h3>
              <p className="text-muted-foreground text-sm leading-relaxed">
                Surpreenda-se com curiosidades e histórias que nunca lhe contaram. Descubra traços estilísticos ou mecânicos em destaque, que lhe poderiam passar despercebidos.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FasciculosSection;