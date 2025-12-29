import { useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Dialog, DialogContent } from "@/components/ui/dialog";
import { useSubscription } from "@/contexts/SubscriptionContext";
import SubscriptionForm from "./SubscriptionForm";
import packshot from "@/assets/hero-packshot.png";
import correioLogo from "@/assets/correio-manha-logo.png";
import tvguiaLogo from "@/assets/tvguia-logo.png";
import floatingMineral1 from "@/assets/floating-minerals/mineral-1.png";
import floatingMineral2 from "@/assets/floating-minerals/mineral-2.png";
import floatingMineral3 from "@/assets/floating-minerals/mineral-3.png";
import floatingMineral4 from "@/assets/floating-minerals/mineral-4.png";
import floatingMineral5 from "@/assets/floating-minerals/mineral-5.png";
import floatingMineral6 from "@/assets/floating-minerals/mineral-6.png";
import floatingMineral7 from "@/assets/floating-minerals/mineral-7.png";
import { useState } from "react";

const minerals = [
  floatingMineral1,
  floatingMineral2,
  floatingMineral3,
  floatingMineral4,
  floatingMineral5,
  floatingMineral6,
  floatingMineral7,
];

const Hero = () => {
  const { isSubscriptionOpen, setIsSubscriptionOpen } = useSubscription();
  const [currentMineral, setCurrentMineral] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentMineral((prev) => (prev + 1) % minerals.length);
    }, 2000); // Change every 2 seconds

    return () => clearInterval(interval);
  }, []);

  return (
    <>
      <section className="relative min-h-screen flex items-center overflow-hidden bg-gradient-to-r from-gray-50 via-white to-white">
        {/* Decorative background elements */}
        <div className="absolute inset-0 overflow-hidden">
          {/* Very subtle geometric pattern */}
          <div className="absolute inset-0 opacity-[0.025]" style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23D4AF37' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
            maskImage: 'linear-gradient(to right, black 0%, black 30%, transparent 50%)',
            WebkitMaskImage: 'linear-gradient(to right, black 0%, black 30%, transparent 50%)',
          }} />
          
          {/* Elegant soft gradient orbs */}
          <div className="absolute -top-32 -left-32 w-[350px] h-[350px] bg-gradient-to-br from-amber-50/30 to-yellow-50/15 rounded-full blur-3xl" />
          <div className="absolute top-1/2 -left-16 w-[280px] h-[280px] bg-gradient-to-br from-orange-50/20 to-amber-50/10 rounded-full blur-3xl" />
          
          {/* Refined golden accent line */}
          <div className="absolute top-0 left-0 right-0 h-0.5 bg-gradient-to-r from-amber-400/40 via-amber-300/20 to-transparent" />
        </div>
        
        {/* Background with packshot - desktop only */}
        <div className="absolute inset-0 hidden lg:block">
          <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/95 to-white" />
          <div 
            className="absolute right-0 top-0 bottom-0 w-2/3 bg-contain bg-right bg-no-repeat"
            style={{ backgroundImage: `url(${packshot})` }}
          />
        </div>

        {/* Content */}
        <div className="container mx-auto px-4 py-12 md:py-20 relative z-10">
          <div className="max-w-xl space-y-6 animate-fade-in">
            {/* Logos */}
            <div className="flex items-center gap-4">
              <img 
                src={correioLogo} 
                alt="Correio da Manhã" 
                className="h-10 md:h-14 object-contain"
              />
              <img 
                src={tvguiaLogo} 
                alt="TV Guia" 
                className="h-10 md:h-14 object-contain"
              />
            </div>

            {/* Subtitle */}
            <p className="text-accent text-sm md:text-base lg:text-lg uppercase tracking-[0.3em] font-bold border-l-4 border-accent pl-4">
              Descubra e Colecione
            </p>

            {/* Main Title with rotating mineral - MINERAL LEFT, TITLE RIGHT */}
            <div className="flex items-center gap-6">
              {/* Rotating Mineral - NOW ON LEFT */}
              <div className="relative w-28 h-28 md:w-36 md:h-36 lg:w-44 lg:h-44">
                {minerals.map((mineral, index) => (
                  <img
                    key={index}
                    src={mineral}
                    alt="Mineral"
                    className={`absolute inset-0 w-full h-full object-contain transition-all duration-700 ${
                      index === currentMineral
                        ? "opacity-100 scale-100"
                        : "opacity-0 scale-75"
                    }`}
                  />
                ))}
              </div>

              <div className="flex flex-col">
                <h1 className="font-display text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold leading-none tracking-tight">
                  <span className="text-gray-900">Minerais</span>
                  <br />
                  <span className="bg-gradient-to-r from-amber-600 via-amber-500 to-yellow-500 bg-clip-text text-transparent">da Terra</span>
                </h1>
                {/* Decorative golden line */}
                <div className="mt-4 flex items-center gap-2">
                  <div className="h-[2px] w-16 bg-gradient-to-r from-amber-500 to-amber-400" />
                  <div className="h-1.5 w-1.5 rounded-full bg-amber-500" />
                  <div className="h-[2px] w-8 bg-gradient-to-r from-amber-400 to-transparent" />
                </div>
              </div>
            </div>

            {/* Mobile Packshot Image - before buttons */}
            <div className="lg:hidden">
              <img 
                src={packshot} 
                alt="Minerais da Terra - Coleção" 
                className="w-full max-w-sm mx-auto"
              />
            </div>

            {/* Description */}
            <p className="text-gray-700 text-lg md:text-xl max-w-md leading-relaxed font-bold">
              Uma coleção <span className="text-accent font-extrabold underline decoration-accent decoration-2 underline-offset-4">exclusiva</span> de <strong className="text-gray-900 font-extrabold underline decoration-gray-400 decoration-2 underline-offset-4">120 minerais autênticos</strong> selecionados<br />
              <span className="text-gray-600">por especialistas em geologia.</span>
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row items-start gap-4 pt-2">
              <Button 
                variant="cta" 
                size="xl" 
                className="text-base px-8 w-full sm:w-auto"
                onClick={() => setIsSubscriptionOpen(true)}
              >
                Assinar a Coleção
              </Button>
              <Button 
                variant="outline" 
                size="xl" 
                className="text-base px-8 w-full sm:w-auto border-gray-300 text-gray-700 hover:bg-gray-100"
                onClick={() => document.getElementById('colecao')?.scrollIntoView({ behavior: 'smooth' })}
              >
                Ver Coleção
              </Button>
            </div>
          </div>

        </div>
      </section>

      {/* Price Badge - always fixed on screen during scroll, hidden when form is open */}
      {!isSubscriptionOpen && (
        <div 
          onClick={() => setIsSubscriptionOpen(true)}
          className="group flex fixed top-20 right-4 md:top-32 md:right-8 xl:right-16 2xl:right-24 w-24 h-24 md:w-40 md:h-40 rounded-full font-bold flex-col items-center justify-center text-center leading-tight animate-elegant-float z-[100] cursor-pointer transition-all duration-500 ease-out overflow-hidden hover:scale-110 hover:shadow-[0_12px_48px_rgba(248,178,1,0.6),0_0_80px_rgba(248,178,1,0.3)]"
          style={{
            background: 'linear-gradient(135deg, #FFD700 0%, #F8B201 30%, #FF9500 70%, #E68A00 100%)',
          }}
        >
          {/* Shine overlay - smooth gold shine */}
          <div 
            className="absolute inset-0 animate-elegant-shine"
            style={{
              background: 'linear-gradient(110deg, transparent 20%, rgba(255,255,255,0.15) 40%, rgba(255,250,230,0.25) 50%, rgba(255,255,255,0.15) 60%, transparent 80%)',
              backgroundSize: '250% 100%',
            }}
          />
          {/* Hover glow overlay */}
          <div 
            className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
            style={{
              background: 'radial-gradient(circle at center, rgba(255,255,255,0.3) 0%, transparent 70%)',
            }}
          />
          <span className="text-[10px] md:text-sm uppercase tracking-wider text-black/70 font-semibold relative z-10">1º Mineral</span>
          <span className="text-xl md:text-4xl font-black text-black drop-shadow-sm relative z-10">OURO</span>
          <span className="text-xs md:text-lg font-bold text-black/80 relative z-10">por 1€</span>
        </div>
      )}

      <Dialog open={isSubscriptionOpen} onOpenChange={setIsSubscriptionOpen}>
        <DialogContent className="max-w-4xl w-full h-[100dvh] md:h-auto md:max-h-[90vh] overflow-y-auto p-4 md:p-6 m-0 md:m-4 max-w-full md:max-w-4xl rounded-none md:rounded-lg">
          <SubscriptionForm onClose={() => setIsSubscriptionOpen(false)} />
        </DialogContent>
      </Dialog>
    </>
  );
};

export default Hero;