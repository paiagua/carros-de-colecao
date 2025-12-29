import carsCollection from "@/assets/cars-collection.png";
import { Button } from "@/components/ui/button";
import { useSubscription } from "@/contexts/SubscriptionContext";

const DiscoverSection = () => {
  const { setIsSubscriptionOpen } = useSubscription();

  return (
    <section className="py-16 md:py-24 bg-amber-400 relative overflow-hidden">
      {/* Decorative corner */}
      <div className="absolute top-0 left-0 w-32 h-32 md:w-48 md:h-48">
        <div className="absolute top-0 left-0 w-full h-full border-t-4 border-l-4 border-white/60" 
          style={{ clipPath: 'polygon(0 0, 100% 0, 0 100%)' }} 
        />
      </div>

      <div className="container mx-auto px-4">
        {/* Main Headline */}
        <h2 className="text-2xl md:text-4xl lg:text-5xl font-bold text-center text-gray-900 italic mb-12 max-w-5xl mx-auto leading-tight">
          Em cada entrega, descubra as histórias e curiosidades das réplicas oficiais dos carros que deixaram a sua marca na história do automóvel.
        </h2>

        <div className="grid lg:grid-cols-2 gap-8 items-start mb-8">
          {/* Left column - Text content */}
          <div className="space-y-6">
            <div className="space-y-4">
              <p className="text-gray-800 text-base md:text-lg">
                Tem curiosidade em conhecer a origem e as caraterísticas dos modelos mais populares?
              </p>
              <p className="text-gray-800 text-base md:text-lg">
                Brincava com carros quando era criança?
              </p>
            </div>

            <div className="space-y-4">
              <p className="text-gray-800 text-base md:text-lg">
                Dos utilitários aos desportivos, dos clássicos aos todo-o-terreno — <strong className="font-bold">todos têm uma história para contar.</strong>
              </p>
              <p className="text-gray-800 text-base md:text-lg italic">
                Descubra por que razão estes ícones continuam a emocionar quem os conduziu... e quem sempre os admirou.
              </p>
            </div>

            {/* Categories */}
            <div className="pt-6">
              <ul className="space-y-1 text-gray-900 font-bold text-lg md:text-xl">
                <li>Os mais clássicos</li>
                <li>Os mais rápidos</li>
                <li>Os mais atuais</li>
              </ul>
              
              <Button 
                onClick={() => setIsSubscriptionOpen(true)}
                className="mt-6 bg-red-600 hover:bg-red-700 text-white font-bold text-lg md:text-xl px-8 py-3 h-auto"
              >
                CONHEÇA-OS A TODOS!
              </Button>
            </div>
          </div>

          {/* Right column - Cars image with scale badge */}
          <div className="relative">
            <img 
              src={carsCollection} 
              alt="Coleção de carros em miniatura" 
              className="w-full max-w-xl mx-auto"
            />
            
            {/* Scale badge */}
            <div className="absolute top-4 right-4 md:top-8 md:right-8 w-20 h-20 md:w-28 md:h-28 bg-gray-900 rounded-full flex flex-col items-center justify-center text-white">
              <span className="text-xs md:text-sm">escala</span>
              <span className="text-xl md:text-3xl font-bold">1:60</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default DiscoverSection;
