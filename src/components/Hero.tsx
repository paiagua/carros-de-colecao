import { Button } from "@/components/ui/button";
import { Dialog, DialogContent } from "@/components/ui/dialog";
import { useSubscription } from "@/contexts/SubscriptionContext";
import SubscriptionForm from "./SubscriptionForm";
import correioRecordLogo from "@/assets/correio-record-logo.png";
import heroCollection from "@/assets/hero-collection.png";

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

const carImages = [car1, car2, car3, car4, car5, car6, car7, car8, car9, car10];

const Hero = () => {
  const { isSubscriptionOpen, setIsSubscriptionOpen } = useSubscription();

  return (
    <>
      <section className="relative min-h-screen flex flex-col overflow-hidden bg-gradient-to-b from-gray-900 via-gray-800 to-gray-900">
        {/* Animated background gradient */}
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-orange-900/20 via-transparent to-transparent" />
        
        {/* Grid pattern overlay */}
        <div className="absolute inset-0 opacity-5" style={{
          backgroundImage: `linear-gradient(rgba(255,255,255,.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,.1) 1px, transparent 1px)`,
          backgroundSize: '50px 50px'
        }} />

        {/* Main Content */}
        <div className="flex-1 container mx-auto px-4 py-8 md:py-12 relative z-10 flex items-center">
          <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center w-full">
            {/* Left Column - Text Content */}
            <div className="space-y-6 order-2 lg:order-1">
              {/* Badge */}
              <div className="inline-flex items-center gap-2 bg-orange-500/20 border border-orange-500/50 rounded-full px-4 py-2 backdrop-blur-sm">
                <span className="w-2 h-2 bg-orange-500 rounded-full animate-pulse" />
                <span className="text-orange-400 text-sm font-bold uppercase tracking-wide">Coleção Exclusiva</span>
              </div>

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
                      textShadow: '4px 4px 0 rgba(0,0,0,0.3)',
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
                <div className="text-center p-4 bg-white/5 rounded-xl border border-white/10 backdrop-blur-sm">
                  <div className="text-3xl md:text-4xl font-bold text-orange-500">60+</div>
                  <div className="text-xs text-gray-400 uppercase tracking-wide mt-1">Modelos</div>
                </div>
                <div className="text-center p-4 bg-white/5 rounded-xl border border-white/10 backdrop-blur-sm">
                  <div className="text-3xl md:text-4xl font-bold text-orange-500">1:60</div>
                  <div className="text-xs text-gray-400 uppercase tracking-wide mt-1">Escala</div>
                </div>
                <div className="text-center p-4 bg-white/5 rounded-xl border border-white/10 backdrop-blur-sm">
                  <div className="text-3xl md:text-4xl font-bold text-orange-500">1€</div>
                  <div className="text-xs text-gray-400 uppercase tracking-wide mt-1">1º Carro</div>
                </div>
              </div>

              {/* CTA Buttons */}
              <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 pt-2">
                <Button 
                  size="lg" 
                  className="text-lg px-10 py-7 bg-orange-500 hover:bg-orange-600 text-white font-bold shadow-lg shadow-orange-500/30 hover:shadow-xl hover:shadow-orange-500/40 transition-all uppercase tracking-wide rounded-xl"
                  onClick={() => setIsSubscriptionOpen(true)}
                >
                  Assinar Agora
                </Button>
                <Button 
                  variant="outline" 
                  size="lg" 
                  className="text-lg px-10 py-7 border-2 border-white/30 text-white hover:bg-white/10 font-bold uppercase tracking-wide rounded-xl bg-transparent"
                  onClick={() => document.getElementById('colecao')?.scrollIntoView({ behavior: 'smooth' })}
                >
                  Ver Coleção
                </Button>
              </div>
            </div>

            {/* Right Column - Image */}
            <div className="relative order-1 lg:order-2">
              <div className="absolute -inset-4 bg-gradient-to-r from-orange-500/20 to-red-500/20 rounded-3xl blur-3xl" />
              <img 
                src={heroCollection} 
                alt="Carros de Coleção - Miniaturas e Fascículos" 
                className="relative w-full max-w-2xl mx-auto drop-shadow-2xl"
              />
            </div>
          </div>
        </div>

        {/* Animated Cars Marquee */}
        <div className="relative py-8 bg-gradient-to-r from-orange-500 via-orange-400 to-orange-500 overflow-hidden">
          {/* First row - moving left */}
          <div className="flex animate-marquee-left">
            {[...carImages, ...carImages, ...carImages].map((car, index) => (
              <div key={`car-1-${index}`} className="flex-shrink-0 mx-6">
                <img 
                  src={car} 
                  alt={`Carro ${index + 1}`} 
                  className="h-20 md:h-28 w-auto object-contain drop-shadow-lg hover:scale-110 transition-transform cursor-pointer"
                />
              </div>
            ))}
          </div>
        </div>

        {/* Price Badge */}
        {!isSubscriptionOpen && (
          <div 
            onClick={() => setIsSubscriptionOpen(true)}
            className="fixed top-24 right-4 md:top-28 md:right-8 lg:right-12 w-28 h-28 md:w-36 md:h-36 rounded-full font-bold flex flex-col items-center justify-center text-center z-[100] cursor-pointer transition-all duration-300 hover:scale-110 border-4 border-white shadow-2xl bg-gradient-to-br from-orange-500 to-orange-600 hover:from-orange-400 hover:to-orange-500"
            style={{ boxShadow: '0 10px 40px rgba(249,115,22,0.5)' }}
          >
            <span className="text-[10px] md:text-xs uppercase tracking-wider text-white/80 font-medium">1º Carro</span>
            <span className="text-lg md:text-2xl font-black text-white leading-tight">VW Beetle</span>
            <span className="text-sm md:text-lg font-bold text-white">por 1€</span>
          </div>
        )}
      </section>

      <Dialog open={isSubscriptionOpen} onOpenChange={setIsSubscriptionOpen}>
        <DialogContent className="max-w-4xl w-full h-[100dvh] md:h-auto md:max-h-[90vh] overflow-y-auto p-4 md:p-6 m-0 md:m-4 max-w-full md:max-w-4xl rounded-none md:rounded-lg">
          <SubscriptionForm onClose={() => setIsSubscriptionOpen(false)} />
        </DialogContent>
      </Dialog>
    </>
  );
};

export default Hero;
