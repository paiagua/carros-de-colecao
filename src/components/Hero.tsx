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
        {/* Top red accent bar */}
        <div className="absolute top-0 left-0 right-0 h-1 bg-red-600" />

        {/* Content */}
        <div className="container mx-auto px-4 py-8 md:py-16 relative z-10">
          <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
            {/* Left Column - Text Content */}
            <div className="space-y-6 lg:space-y-8 order-2 lg:order-1">
              {/* Logo */}
              <img 
                src={correioRecordLogo} 
                alt="Correio da Manhã | Record" 
                className="h-12 md:h-16 object-contain"
              />

              {/* Badge */}
              <div className="inline-flex items-center gap-2 bg-red-50 border border-red-200 rounded-full px-4 py-2">
                <span className="w-2 h-2 bg-red-600 rounded-full animate-pulse" />
                <span className="text-red-700 text-sm font-semibold uppercase tracking-wide">Coleção Exclusiva</span>
              </div>

              {/* Main Title */}
              <div>
                <h1 className="text-5xl sm:text-6xl lg:text-7xl xl:text-8xl font-black leading-[0.9] tracking-tight">
                  <span className="text-gray-900">Carros</span>
                  <br />
                  <span className="text-red-600">de Coleção</span>
                </h1>
                <div className="mt-4 h-1 w-24 bg-red-600 rounded-full" />
              </div>

              {/* Description */}
              <div className="space-y-4 max-w-md">
                <p className="text-gray-800 text-lg md:text-xl leading-relaxed font-medium">
                  Uma coleção única que junta uma obra editorial e as réplicas oficiais dos automóveis que marcaram gerações.
                </p>
                <p className="text-gray-600 text-base md:text-lg leading-relaxed">
                  Modelos que fizeram parte de momentos inesquecíveis, de viagens em família, de aventuras na estrada e de sonhos sobre rodas.
                </p>
              </div>

              {/* Features */}
              <ul className="space-y-3">
                <li className="flex items-start gap-3">
                  <span className="mt-1.5 w-2 h-2 bg-red-600 rounded-full flex-shrink-0" />
                  <span className="text-gray-700">Réplicas oficiais dos modelos mais emblemáticos</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="mt-1.5 w-2 h-2 bg-red-600 rounded-full flex-shrink-0" />
                  <span className="text-gray-700">Miniaturas pormenorizadas à escala 1:60</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="mt-1.5 w-2 h-2 bg-red-600 rounded-full flex-shrink-0" />
                  <span className="text-gray-700">Fascículos com história, design e curiosidades</span>
                </li>
              </ul>

              {/* CTA Buttons */}
              <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 pt-4">
                <Button 
                  size="lg" 
                  className="text-lg px-8 py-6 bg-red-600 hover:bg-red-700 text-white font-bold shadow-lg shadow-red-600/30 hover:shadow-xl hover:shadow-red-600/40 transition-all"
                  onClick={() => setIsSubscriptionOpen(true)}
                >
                  Assinar a Coleção
                </Button>
                <Button 
                  variant="outline" 
                  size="lg" 
                  className="text-lg px-8 py-6 border-2 border-gray-300 text-gray-700 hover:bg-gray-50 hover:border-gray-400 font-semibold"
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
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce hidden md:flex flex-col items-center gap-2 text-gray-400">
          <span className="text-xs uppercase tracking-wider">Descobrir</span>
          <ChevronDown className="w-5 h-5" />
        </div>

        {/* Price Badge */}
        {!isSubscriptionOpen && (
          <div 
            onClick={() => setIsSubscriptionOpen(true)}
            className="fixed top-24 right-4 md:top-28 md:right-8 lg:right-12 w-28 h-28 md:w-36 md:h-36 rounded-full font-bold flex flex-col items-center justify-center text-center z-[100] cursor-pointer transition-all duration-300 hover:scale-105 border-4 border-white shadow-2xl bg-red-600"
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
