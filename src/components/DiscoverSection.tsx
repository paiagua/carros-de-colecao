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
        {/* Main Headline - Split layout */}
        <div className="mb-16 md:mb-20">
          <div className="grid md:grid-cols-2 gap-8 md:gap-16 items-end">
            {/* Left side */}
            <div className="text-left">
              <h2 className="text-3xl md:text-4xl lg:text-5xl italic text-gray-800 leading-tight">
                Em cada entrega, descubra as histórias e curiosidades das réplicas oficiais dos carros
              </h2>
            </div>
            {/* Right side */}
            <div className="text-left md:text-right">
              <h2 className="text-3xl md:text-4xl lg:text-5xl italic text-gray-800 leading-tight">
                que deixaram a sua marca na{" "}
                <span className="text-orange-500 not-italic">história do automóvel.</span>
              </h2>
            </div>
          </div>
          <div className="mt-8 flex justify-center gap-2">
            <div className="h-1 w-16 bg-orange-500 rounded-full" />
            <div className="h-1 w-8 bg-orange-300 rounded-full" />
            <div className="h-1 w-4 bg-orange-200 rounded-full" />
          </div>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left column - Text content */}
          <div className="space-y-6">
            <div className="space-y-4">
              <p className="text-gray-600 text-base leading-relaxed">
                Tem curiosidade em conhecer a origem e as caraterísticas dos modelos mais populares? Brincava com carros quando era criança?
              </p>
            </div>

            <div className="bg-gray-50 rounded-xl p-5 border-l-4 border-orange-500">
              <p className="text-gray-700 text-base leading-relaxed">
                Dos utilitários aos desportivos, dos clássicos aos todo-o-terreno —{" "}
                <strong className="text-gray-900">todos têm uma história para contar.</strong>
              </p>
            </div>
            
            <p className="text-gray-500 text-sm italic leading-relaxed">
              Descubra por que razão estes ícones continuam a emocionar quem os conduziu... e quem sempre os admirou.
            </p>

            {/* Categories */}
            <div className="pt-4">
              <ul className="space-y-3">
                <li className="flex items-center gap-3 text-gray-900 text-base">
                  <span className="w-6 h-6 rounded-full bg-orange-500 flex items-center justify-center flex-shrink-0">
                    <Check className="w-4 h-4 text-white" />
                  </span>
                  Os mais clássicos
                </li>
                <li className="flex items-center gap-3 text-gray-900 text-base">
                  <span className="w-6 h-6 rounded-full bg-orange-500 flex items-center justify-center flex-shrink-0">
                    <Check className="w-4 h-4 text-white" />
                  </span>
                  Os mais rápidos
                </li>
                <li className="flex items-center gap-3 text-gray-900 text-base">
                  <span className="w-6 h-6 rounded-full bg-orange-500 flex items-center justify-center flex-shrink-0">
                    <Check className="w-4 h-4 text-white" />
                  </span>
                  Os mais atuais
                </li>
              </ul>
              
              <Button 
                onClick={() => setIsSubscriptionOpen(true)}
                className="mt-6 bg-orange-500 hover:bg-orange-600 text-white text-base px-8 py-5 h-auto rounded-xl shadow-lg shadow-orange-500/30 hover:shadow-xl hover:shadow-orange-500/40 transition-all uppercase tracking-wide"
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
            
            {/* Scale badge */}
            <div className="absolute top-4 right-4 md:top-8 md:right-8 w-24 h-24 md:w-32 md:h-32 bg-orange-500 rounded-full flex flex-col items-center justify-center text-white shadow-2xl border-4 border-white">
              <span className="text-xs md:text-sm">escala</span>
              <span className="text-2xl md:text-4xl font-black">1:60</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default DiscoverSection;
