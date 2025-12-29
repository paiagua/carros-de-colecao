import carsCollection from "@/assets/cars-collection.png";
import { Button } from "@/components/ui/button";
import { useSubscription } from "@/contexts/SubscriptionContext";
import { Check } from "lucide-react";

const DiscoverSection = () => {
  const { setIsSubscriptionOpen } = useSubscription();

  return (
    <section className="py-20 md:py-32 bg-white relative overflow-hidden">
      {/* Decorative background elements */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-gradient-to-bl from-orange-100/50 to-transparent rounded-full blur-3xl" />
      <div className="absolute bottom-0 left-0 w-80 h-80 bg-gradient-to-tr from-gray-100 to-transparent rounded-full blur-3xl" />
      
      <div className="container mx-auto px-4 relative z-10">
        {/* Main Headline */}
        <div className="text-center mb-16 md:mb-20">
          <h2 className="text-3xl md:text-5xl lg:text-6xl font-serif italic text-gray-800 max-w-5xl mx-auto leading-tight tracking-tight">
            Em cada entrega, descubra as histórias e curiosidades das réplicas oficiais dos carros que deixaram a sua marca na{" "}
            <span className="text-orange-500 font-bold not-italic">história do automóvel.</span>
          </h2>
          <div className="mt-8 flex justify-center gap-2">
            <div className="h-1 w-16 bg-orange-500 rounded-full" />
            <div className="h-1 w-8 bg-orange-300 rounded-full" />
            <div className="h-1 w-4 bg-orange-200 rounded-full" />
          </div>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left column - Text content */}
          <div className="space-y-8">
            <div className="space-y-5">
              <p className="text-gray-700 text-lg md:text-xl leading-relaxed">
                Tem curiosidade em conhecer a origem e as caraterísticas dos modelos mais populares?
              </p>
              <p className="text-gray-700 text-lg md:text-xl leading-relaxed">
                Brincava com carros quando era criança?
              </p>
            </div>

            <div className="space-y-5">
              <p className="text-gray-700 text-lg md:text-xl leading-relaxed">
                Dos utilitários aos desportivos, dos clássicos aos todo-o-terreno —{" "}
                <strong className="font-bold text-gray-900">todos têm uma história para contar.</strong>
              </p>
              <p className="text-gray-600 text-lg md:text-xl italic leading-relaxed border-l-4 border-orange-400 pl-4">
                Descubra por que razão estes ícones continuam a emocionar quem os conduziu... e quem sempre os admirou.
              </p>
            </div>

            {/* Categories */}
            <div className="pt-4">
              <ul className="space-y-3">
                <li className="flex items-center gap-3 text-gray-900 font-bold text-lg md:text-xl">
                  <span className="w-8 h-8 rounded-full bg-orange-500 flex items-center justify-center flex-shrink-0">
                    <Check className="w-5 h-5 text-white" />
                  </span>
                  Os mais clássicos
                </li>
                <li className="flex items-center gap-3 text-gray-900 font-bold text-lg md:text-xl">
                  <span className="w-8 h-8 rounded-full bg-orange-500 flex items-center justify-center flex-shrink-0">
                    <Check className="w-5 h-5 text-white" />
                  </span>
                  Os mais rápidos
                </li>
                <li className="flex items-center gap-3 text-gray-900 font-bold text-lg md:text-xl">
                  <span className="w-8 h-8 rounded-full bg-orange-500 flex items-center justify-center flex-shrink-0">
                    <Check className="w-5 h-5 text-white" />
                  </span>
                  Os mais atuais
                </li>
              </ul>
              
              <Button 
                onClick={() => setIsSubscriptionOpen(true)}
                className="mt-8 bg-orange-500 hover:bg-orange-600 text-white font-bold text-lg md:text-xl px-10 py-6 h-auto rounded-xl shadow-lg shadow-orange-500/30 hover:shadow-xl hover:shadow-orange-500/40 transition-all uppercase tracking-wide"
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
              className="w-full max-w-2xl mx-auto"
            />
            
            {/* Price badge */}
            <div className="absolute top-4 right-4 md:top-8 md:right-8 w-24 h-24 md:w-32 md:h-32 bg-orange-500 rounded-full flex flex-col items-center justify-center text-white shadow-2xl border-4 border-white">
              <span className="text-xs md:text-sm">apenas</span>
              <span className="text-2xl md:text-4xl font-black">5,95€</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default DiscoverSection;
