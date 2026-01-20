import { Button } from "@/components/ui/button";
import { Dialog, DialogContent } from "@/components/ui/dialog";
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip";
import { useSubscription } from "@/contexts/SubscriptionContext";
import SubscriptionForm from "./SubscriptionForm";
import correioRecordLogo from "@/assets/correio-record-logo.png";
import heroCollection from "@/assets/hero-collection.png";
import { trackSubscriptionClick, trackNavClick } from "@/lib/analytics";

// Import car images
import car1 from "@/assets/cars/car-1.png";
import car2 from "@/assets/cars/car-2.png";
import car3 from "@/assets/cars/car-3.png";
import car4 from "@/assets/cars/car-4.png";
import car5 from "@/assets/cars/car-5.png";
import car6 from "@/assets/cars/car-6.png";
import car7 from "@/assets/cars/car-7.png";
import car8 from "@/assets/cars/car-8.png";
import car9 from "@/assets/cars/car-9.png";
import car10 from "@/assets/cars/car-10.png";

// Import real car images
import { getRealCarImage } from "@/data/realCarImages";
import { cars } from "@/data/minerals";

const carImages = [car1, car2, car3, car4, car5, car6, car7, car8, car9, car10];

const Hero = () => {
  const { isSubscriptionOpen, setIsSubscriptionOpen } = useSubscription();

  return (
    <TooltipProvider delayDuration={100}>
      <>
      <section className="relative min-h-screen flex flex-col overflow-hidden pt-20 md:pt-24">
        {/* Split background - Left dark, Right white */}
        <div className="absolute inset-0 flex z-0">
          <div className="w-full lg:w-1/2 bg-gray-900" />
          <div className="hidden lg:block w-1/2 bg-white" />
        </div>

        {/* Right Column - Image (clipped to right half only) */}
        <div 
          className="hidden lg:flex absolute inset-0 z-[1] items-center justify-end"
          style={{ clipPath: 'inset(0 0 0 50%)' }}
        >
          <div className="w-[60%] h-full flex items-center justify-center">
            <img 
              src={heroCollection} 
              alt="Carros de Coleção - Miniaturas e Fascículos" 
              className="w-full h-auto object-contain scale-90"
            />
          </div>
        </div>
        
        {/* Top accent bar */}
        <div className="absolute top-0 left-0 right-0 h-1 bg-orange-500 z-10" />

        {/* Main Content */}
        <div className="flex-1 container mx-auto px-4 py-8 md:py-12 relative z-[2] flex items-center">
          <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center w-full">
            {/* Left Column - Text Content (on dark background) */}
            <div className="space-y-6 order-2 lg:order-1 relative">
              {/* Logo + Main Title */}
              <div>
                {/* Logo */}
                <img 
                  src={correioRecordLogo} 
                  alt="Correio da Manhã | Record" 
                  className="h-8 md:h-10 object-contain mb-4"
                />
                
                <h1 className="font-display uppercase leading-[0.85]">
                  <span 
                    className="block text-7xl sm:text-8xl lg:text-9xl font-bold text-orange-500"
                    style={{ 
                      textShadow: '3px 3px 0 rgba(0,0,0,0.3)',
                      letterSpacing: '-0.02em'
                    }}
                  >
                    CARROS
                  </span>
                  <span 
                    className="block text-4xl sm:text-5xl lg:text-6xl font-bold text-white italic -mt-2"
                    style={{ 
                      textShadow: '2px 2px 0 rgba(249,115,22,0.5)'
                    }}
                  >
                    de coleção
                  </span>
                </h1>
                <div className="mt-6 flex items-center gap-3">
                  <div className="h-1.5 w-20 bg-orange-500 rounded-full" />
                  <div className="h-1.5 w-8 bg-orange-500/50 rounded-full" />
                  <div className="h-1.5 w-4 bg-orange-500/30 rounded-full" />
                </div>
              </div>

              {/* Description */}
              <p className="text-gray-300 text-lg md:text-xl leading-relaxed max-w-md">
                Uma coleção única que junta uma obra editorial e as <span className="text-orange-400 font-semibold">réplicas oficiais</span> dos automóveis que marcaram gerações.
              </p>

              {/* Features */}
              <div className="grid grid-cols-3 gap-4">
                <div className="text-center p-4 bg-white/10 rounded-xl border border-white/20">
                  <div className="text-3xl md:text-4xl font-bold text-orange-500">150</div>
                  <div className="text-xs text-gray-400 uppercase tracking-wide mt-1">Modelos</div>
                </div>
                <div className="text-center p-4 bg-white/10 rounded-xl border border-white/20">
                  <div className="text-3xl md:text-4xl font-bold text-orange-500">1:60</div>
                  <div className="text-xs text-gray-400 uppercase tracking-wide mt-1">Escala</div>
                </div>
                <div className="text-center p-4 bg-white/10 rounded-xl border border-white/20">
                  <div className="text-3xl md:text-4xl font-bold text-orange-500">5,95€</div>
                  <div className="text-xs text-gray-400 uppercase tracking-wide mt-1">Por Carro</div>
                </div>
              </div>

              {/* CTA Buttons */}
              <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 pt-2">
                <Button 
                  size="lg" 
                  className="text-lg px-10 py-7 bg-orange-500 hover:bg-orange-600 text-white font-bold shadow-lg shadow-orange-500/30 hover:shadow-xl hover:shadow-orange-500/40 transition-all uppercase tracking-wide rounded-xl"
                  onClick={() => {
                    trackSubscriptionClick('hero_main_button');
                    setIsSubscriptionOpen(true);
                  }}
                >
                  Assinar Agora
                </Button>
                <Button 
                  variant="outline" 
                  size="lg" 
                  className="text-lg px-10 py-7 border-2 border-white/30 text-white hover:bg-white/10 font-bold uppercase tracking-wide rounded-xl bg-transparent"
                  onClick={() => {
                    trackNavClick('hero_ver_colecao');
                    document.getElementById('colecao')?.scrollIntoView({ behavior: 'smooth' });
                  }}
                >
                  Ver Coleção
                </Button>
              </div>
            </div>

            {/* Right Column - Image (mobile only) */}
            <div className="order-1 lg:order-2 lg:hidden flex items-center justify-center">
              <img 
                src={heroCollection} 
                alt="Carros de Coleção - Miniaturas e Fascículos" 
                className="w-full h-auto object-contain"
              />
            </div>
          </div>
        </div>

        {/* Animated Cars Marquee */}
        <div className="relative overflow-x-clip overflow-y-visible z-50">
          {/* Top accent bar */}
          <div className="h-2 bg-gradient-to-r from-orange-600 via-orange-500 to-orange-600 shadow-lg" />
          
          {/* Main marquee container */}
          <div className="relative py-6 md:py-10 bg-gradient-to-b from-orange-500 via-orange-400 to-orange-500 overflow-visible z-50 group/marquee">
            {/* Decorative top shadow */}
            <div className="absolute top-0 left-0 right-0 h-4 bg-gradient-to-b from-black/10 to-transparent" />
            
            {/* Shine effect */}
            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent animate-shimmer" />
            
            {/* Cars row */}
            <div className="flex animate-marquee-left group-hover/marquee:[animation-play-state:paused]">
              {[...carImages, ...carImages, ...carImages].map((car, index) => {
                const carNumber = (index % 10) + 1;
                const realCarImage = getRealCarImage(carNumber);
                
                return (
                  <Tooltip key={`car-1-${index}`}>
                    <TooltipTrigger asChild>
                      <div className="flex-shrink-0 mx-4 md:mx-8 group cursor-pointer">
                        <div className="relative">
                          {/* Shadow under car */}
                          <div className="absolute -bottom-2 left-1/2 -translate-x-1/2 w-3/4 h-3 bg-black/20 rounded-full blur-md group-hover:bg-orange-600/40 transition-all duration-300" />
                          <img 
                            src={car} 
                            alt={`Carro ${index + 1}`} 
                            className="relative h-16 md:h-24 lg:h-28 w-auto object-contain drop-shadow-2xl group-hover:scale-110 group-hover:-translate-y-2 transition-all duration-300"
                            style={{ filter: 'drop-shadow(0 8px 16px rgba(0,0,0,0.3))' }}
                          />
                        </div>
                      </div>
                    </TooltipTrigger>
                    <TooltipContent 
                      side="bottom" 
                      sideOffset={30}
                      className="w-auto p-4 bg-white/95 backdrop-blur-sm border-2 border-orange-300 shadow-2xl rounded-xl z-[9999]"
                    >
                      <div className="flex flex-col items-center gap-3">
                        <img 
                          src={realCarImage || car} 
                          alt={`Carro Real ${carNumber}`} 
                          className="w-72 md:w-96 h-auto object-contain drop-shadow-xl"
                        />
                        <div className="text-center">
                          <span className="inline-block bg-orange-500 text-white text-sm font-bold px-4 py-1.5 rounded-full">
                            {cars[carNumber - 1]?.title || `Carro ${carNumber}`}
                          </span>
                        </div>
                      </div>
                    </TooltipContent>
                  </Tooltip>
                );
              })}
            </div>
            
            {/* Decorative bottom shadow */}
            <div className="absolute bottom-0 left-0 right-0 h-4 bg-gradient-to-t from-black/10 to-transparent" />
          </div>
          
          {/* Bottom accent bar */}
          <div className="h-1.5 bg-gradient-to-r from-orange-700 via-orange-600 to-orange-700" />
        </div>

        {/* Price Badge */}
        {!isSubscriptionOpen && (
          <div 
            onClick={() => {
              trackSubscriptionClick('hero_price_badge');
              setIsSubscriptionOpen(true);
            }}
            className="fixed top-24 right-4 md:top-28 md:right-8 lg:right-12 w-28 h-28 md:w-36 md:h-36 rounded-full font-bold flex flex-col items-center justify-center text-center z-[100] cursor-pointer transition-all duration-300 hover:scale-110 border-4 border-white shadow-2xl bg-gradient-to-br from-orange-500 to-orange-600 hover:from-orange-400 hover:to-orange-500"
            style={{ boxShadow: '0 10px 40px rgba(249,115,22,0.5)' }}
          >
            <span className="text-[10px] md:text-xs uppercase tracking-wider text-white/80 font-medium">Cada Carro</span>
            <span className="text-lg md:text-2xl font-black text-white leading-tight">VW Beetle</span>
            <span className="text-sm md:text-lg font-bold text-white">1,95€</span>
          </div>
        )}
      </section>

      <Dialog open={isSubscriptionOpen} onOpenChange={setIsSubscriptionOpen}>
        <DialogContent className="max-w-4xl w-full h-[100dvh] md:h-auto md:max-h-[90vh] overflow-y-auto p-4 md:p-6 m-0 md:m-4 max-w-full md:max-w-4xl rounded-none md:rounded-lg">
          <SubscriptionForm onClose={() => setIsSubscriptionOpen(false)} />
        </DialogContent>
      </Dialog>
      </>
    </TooltipProvider>
  );
};

export default Hero;
