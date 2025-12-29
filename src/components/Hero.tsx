import { Button } from "@/components/ui/button";
import { Dialog, DialogContent } from "@/components/ui/dialog";
import { useSubscription } from "@/contexts/SubscriptionContext";
import SubscriptionForm from "./SubscriptionForm";
import correioRecordLogo from "@/assets/correio-record-logo.png";
import heroCollection from "@/assets/hero-collection.png";
import { ChevronDown } from "lucide-react";

const Hero = () => {
  const { isSubscriptionOpen, setIsSubscriptionOpen } = useSubscription();

  return (
    <>
      <section className="relative min-h-screen flex items-center overflow-hidden bg-white">
        {/* Top accent bar */}
        <div className="absolute top-0 left-0 right-0 h-1.5 bg-orange-500" />

        {/* Content */}
        <div className="container mx-auto px-4 py-8 md:py-16 relative z-10">
          <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
            {/* Left Column - Text Content */}
            <div className="space-y-5 lg:space-y-6 order-2 lg:order-1">
              {/* Logo */}
              <img 
                src={correioRecordLogo} 
                alt="Correio da Manhã | Record" 
                className="h-10 md:h-12 object-contain"
              />

              {/* Badge */}
              <div className="inline-flex items-center gap-2 bg-orange-100 border-2 border-orange-400 rounded-full px-4 py-2">
                <span className="w-2 h-2 bg-orange-500 rounded-full animate-pulse" />
                <span className="text-orange-700 text-sm font-bold uppercase tracking-wide">Coleção Exclusiva</span>
              </div>

              {/* Main Title */}
              <div>
                <h1 className="font-display uppercase leading-[0.85] tracking-tight">
                  <span className="block text-6xl sm:text-7xl lg:text-8xl xl:text-9xl font-bold text-orange-500" style={{ textShadow: '3px 3px 0 rgba(0,0,0,0.1)' }}>
                    CARROS
                  </span>
                  <span className="block text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold text-white italic mt-1" style={{ 
                    textShadow: '2px 2px 0 #f97316, -1px -1px 0 #f97316, 1px -1px 0 #f97316, -1px 1px 0 #f97316, 1px 1px 0 #f97316',
                    WebkitTextStroke: '2px #f97316'
                  }}>
                    de coleção
                  </span>
                </h1>
                <div className="mt-4 h-1.5 w-32 bg-orange-500 rounded-full" />
              </div>

              {/* Description */}
              <div className="space-y-3 max-w-md">
                <p className="text-gray-800 text-lg md:text-xl leading-relaxed font-semibold">
                  Uma coleção única que junta uma obra editorial e as réplicas oficiais dos automóveis que marcaram gerações.
                </p>
                <p className="text-gray-600 text-base leading-relaxed">
                  Modelos que fizeram parte de momentos inesquecíveis, de viagens em família, de aventuras na estrada e de sonhos sobre rodas.
                </p>
              </div>

              {/* Features */}
              <ul className="space-y-2">
                <li className="flex items-start gap-3">
                  <span className="mt-1.5 w-2.5 h-2.5 bg-orange-500 rounded-full flex-shrink-0" />
                  <span className="text-gray-700 font-medium">Réplicas oficiais dos modelos mais emblemáticos</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="mt-1.5 w-2.5 h-2.5 bg-orange-500 rounded-full flex-shrink-0" />
                  <span className="text-gray-700 font-medium">Miniaturas pormenorizadas à escala 1:60</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="mt-1.5 w-2.5 h-2.5 bg-orange-500 rounded-full flex-shrink-0" />
                  <span className="text-gray-700 font-medium">Fascículos com história, design e curiosidades</span>
                </li>
              </ul>

              {/* CTA Buttons */}
              <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 pt-2">
                <Button 
                  size="lg" 
                  className="text-lg px-8 py-6 bg-orange-500 hover:bg-orange-600 text-white font-bold shadow-lg shadow-orange-500/30 hover:shadow-xl hover:shadow-orange-500/40 transition-all uppercase tracking-wide"
                  onClick={() => setIsSubscriptionOpen(true)}
                >
                  Assinar a Coleção
                </Button>
                <Button 
                  variant="outline" 
                  size="lg" 
                  className="text-lg px-8 py-6 border-2 border-orange-400 text-orange-600 hover:bg-orange-50 font-bold uppercase tracking-wide"
                  onClick={() => document.getElementById('colecao')?.scrollIntoView({ behavior: 'smooth' })}
                >
                  Ver Coleção
                </Button>
              </div>

              {/* Disclaimer */}
              <p className="text-gray-400 text-xs">
                As imagens dos carros apresentadas não são contratuais.
              </p>
            </div>

            {/* Right Column - Image */}
            <div className="relative order-1 lg:order-2">
              <img 
                src={heroCollection} 
                alt="Carros de Coleção - Miniaturas e Fascículos" 
                className="w-full max-w-2xl mx-auto drop-shadow-2xl"
              />
            </div>
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce hidden md:flex flex-col items-center gap-2 text-orange-500">
          <span className="text-xs uppercase tracking-wider font-bold">Descobrir</span>
          <ChevronDown className="w-5 h-5" />
        </div>

        {/* Price Badge */}
        {!isSubscriptionOpen && (
          <div 
            onClick={() => setIsSubscriptionOpen(true)}
            className="fixed top-24 right-4 md:top-28 md:right-8 lg:right-12 w-28 h-28 md:w-36 md:h-36 rounded-full font-bold flex flex-col items-center justify-center text-center z-[100] cursor-pointer transition-all duration-300 hover:scale-105 border-4 border-white shadow-2xl bg-orange-500"
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
