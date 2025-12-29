import geodoQuartzo from "@/assets/offers/geodo-quartzo.png";
import geodoAmetista from "@/assets/offers/geodo-ametista.png";
import lupa from "@/assets/offers/lupa.png";
import { Button } from "@/components/ui/button";
import { Dialog, DialogContent } from "@/components/ui/dialog";
import { useSubscription } from "@/contexts/SubscriptionContext";
import SubscriptionForm from "@/components/SubscriptionForm";

const SpecialOffersSection = () => {
  const { isSubscriptionOpen, setIsSubscriptionOpen } = useSubscription();

  return (
    <section className="py-20 md:py-28 bg-white relative overflow-hidden">
      {/* Decorative top line */}
      <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-amber-400 via-yellow-500 to-amber-400" />

      <div className="container mx-auto px-4 relative z-10">
        {/* Header */}
        <div className="text-center mb-12 md:mb-16 animate-fade-in">
          <h2 className="font-display text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black text-gray-900 leading-tight uppercase tracking-tight">
            Assine Já e Receba Estas
            <br />
            <span className="text-gray-900">Fantásticas Ofertas!</span>
          </h2>
        </div>

        {/* Content Layout */}
        <div className="max-w-5xl mx-auto space-y-8 md:space-y-0">
          
          {/* Row 1: Geodo de Quartzo */}
          <div className="flex flex-col md:flex-row items-center md:items-start gap-4 md:gap-0 animate-fade-in">
            {/* Image */}
            <div className="w-40 md:w-48 flex-shrink-0">
              <img 
                src={geodoQuartzo} 
                alt="Geodo de Quartzo"
                className="w-full object-contain drop-shadow-xl hover:scale-105 transition-transform duration-300"
              />
            </div>
            
            {/* Arrow + Text */}
            <div className="flex items-start gap-1 md:ml-2 md:mt-8">
              {/* Curved Arrow */}
              <svg className="hidden md:block w-16 h-12 flex-shrink-0 mt-1" viewBox="0 0 70 50">
                <path 
                  d="M 5 40 Q 20 40 35 30 T 60 15" 
                  fill="none" 
                  stroke="#374151" 
                  strokeWidth="1.5"
                  strokeLinecap="round"
                />
                <path 
                  d="M 52 12 L 62 15 L 55 22" 
                  fill="none" 
                  stroke="#374151" 
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
              
              {/* Text */}
              <div className="max-w-[280px] text-center md:text-left">
                <h3 className="font-display text-xl md:text-2xl font-black text-gray-800 uppercase mb-1">
                  Geodo de Quartzo
                </h3>
                <p className="text-sm md:text-base text-gray-600 leading-relaxed">
                  Uma das criações mágicas da natureza. Geoda autêntico de grande dimensão <span className="font-semibold">(entre 10 e 15 cm)</span>
                </p>
              </div>
            </div>
          </div>

          {/* Row 2: Lupa - aligned right */}
          <div className="flex flex-col md:flex-row-reverse items-center md:items-start gap-4 md:gap-0 animate-fade-in md:mt-[-20px]" style={{ animationDelay: '0.1s' }}>
            {/* Image */}
            <div className="w-44 md:w-56 flex-shrink-0">
              <img 
                src={lupa} 
                alt="Lupa"
                className="w-full object-contain drop-shadow-xl hover:scale-105 transition-transform duration-300"
              />
            </div>
            
            {/* Arrow + Text */}
            <div className="flex items-start gap-1 md:mr-2 md:mt-12 flex-row-reverse md:flex-row">
              {/* Text */}
              <div className="max-w-[220px] text-center md:text-right">
                <h3 className="font-display text-xl md:text-2xl font-black text-gray-800 uppercase mb-1">
                  Lupa
                </h3>
                <p className="text-sm md:text-base text-gray-600 leading-relaxed">
                  Descubra os detalhes excecionais dos seus minerais
                </p>
              </div>
              
              {/* Curved Arrow pointing right */}
              <svg className="hidden md:block w-16 h-12 flex-shrink-0 mt-6" viewBox="0 0 70 50">
                <path 
                  d="M 65 10 Q 50 10 35 20 T 10 35" 
                  fill="none" 
                  stroke="#374151" 
                  strokeWidth="1.5"
                  strokeLinecap="round"
                />
                <path 
                  d="M 18 28 L 8 35 L 15 42" 
                  fill="none" 
                  stroke="#374151" 
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </div>
          </div>

          {/* Row 3: Geodo de Ametista */}
          <div className="flex flex-col md:flex-row items-center md:items-start gap-4 md:gap-0 animate-fade-in md:ml-[10%] md:mt-[-40px]" style={{ animationDelay: '0.2s' }}>
            {/* Image */}
            <div className="w-36 md:w-44 flex-shrink-0">
              <img 
                src={geodoAmetista} 
                alt="Geodo de Ametista"
                className="w-full object-contain drop-shadow-xl hover:scale-105 transition-transform duration-300"
              />
            </div>
            
            {/* Arrow + Text */}
            <div className="flex items-start gap-1 md:ml-2 md:mt-4">
              {/* Curved Arrow */}
              <svg className="hidden md:block w-16 h-12 flex-shrink-0 mt-1" viewBox="0 0 70 50">
                <path 
                  d="M 5 35 Q 25 35 40 25 T 60 10" 
                  fill="none" 
                  stroke="#374151" 
                  strokeWidth="1.5"
                  strokeLinecap="round"
                />
                <path 
                  d="M 52 7 L 62 10 L 55 18" 
                  fill="none" 
                  stroke="#374151" 
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
              
              {/* Text */}
              <div className="max-w-[280px] text-center md:text-left">
                <h3 className="font-display text-xl md:text-2xl font-black text-gray-800 uppercase mb-1">
                  Geodo de Ametista
                </h3>
                <p className="text-sm md:text-base text-gray-600 leading-relaxed">
                  Uma peça única para a sua coleção. Geoda autêntico de grande dimensão <span className="font-semibold">(entre 10 e 15 cm)</span>
                </p>
              </div>
            </div>
          </div>

        </div>

        {/* CTA Button */}
        <div className="text-center mt-12 md:mt-16">
          <Button
            onClick={() => setIsSubscriptionOpen(true)}
            className="bg-cta hover:bg-cta/90 text-white font-bold text-lg md:text-xl px-10 py-6 rounded-lg shadow-lg hover:shadow-xl transition-all duration-300"
          >
            Iniciar Coleção
          </Button>
        </div>
      </div>

      {/* Subscription Dialog */}
      <Dialog open={isSubscriptionOpen} onOpenChange={setIsSubscriptionOpen}>
        <DialogContent className="max-w-4xl w-full h-[100dvh] md:h-auto md:max-h-[85vh] p-4 md:p-6 m-0 md:m-4 max-w-full md:max-w-4xl rounded-none md:rounded-lg bg-background border-accent/20 overflow-hidden flex flex-col">
          <SubscriptionForm onClose={() => setIsSubscriptionOpen(false)} />
        </DialogContent>
      </Dialog>
    </section>
  );
};

export default SpecialOffersSection;
