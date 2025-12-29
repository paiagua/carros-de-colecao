import { Button } from "@/components/ui/button";
import { Dialog, DialogContent } from "@/components/ui/dialog";
import { useSubscription } from "@/contexts/SubscriptionContext";
import SubscriptionForm from "./SubscriptionForm";
import correioLogo from "@/assets/correio-manha-logo.png";
import tvguiaLogo from "@/assets/tvguia-logo.png";
import { Car } from "lucide-react";

const Hero = () => {
  const { isSubscriptionOpen, setIsSubscriptionOpen } = useSubscription();

  return (
    <>
      <section className="relative min-h-screen flex items-center overflow-hidden bg-background">
        {/* Decorative background elements */}
        <div className="absolute inset-0 overflow-hidden">
          {/* Subtle geometric pattern */}
          <div className="absolute inset-0 opacity-[0.03]" style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23FFFFFF' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
          }} />
          
          {/* Elegant gradient orbs */}
          <div className="absolute -top-32 -left-32 w-[350px] h-[350px] bg-gradient-to-br from-primary/20 to-primary/5 rounded-full blur-3xl" />
          <div className="absolute top-1/2 -right-16 w-[280px] h-[280px] bg-gradient-to-br from-primary/15 to-transparent rounded-full blur-3xl" />
          
          {/* Refined accent line */}
          <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-primary/60 via-primary to-primary/60" />
        </div>

        {/* Content */}
        <div className="container mx-auto px-4 py-12 md:py-20 relative z-10">
          <div className="max-w-2xl space-y-8 animate-fade-in">
            {/* Logos */}
            <div className="flex items-center gap-4">
              <img 
                src={correioLogo} 
                alt="Correio da Manhã" 
                className="h-10 md:h-14 object-contain brightness-0 invert opacity-80"
              />
              <img 
                src={tvguiaLogo} 
                alt="TV Guia" 
                className="h-10 md:h-14 object-contain brightness-0 invert opacity-80"
              />
            </div>

            {/* Subtitle */}
            <p className="text-primary text-sm md:text-base lg:text-lg uppercase tracking-[0.3em] font-bold border-l-4 border-primary pl-4">
              Coleção Exclusiva
            </p>

            {/* Main Title */}
            <div className="flex flex-col">
              <div className="flex items-center gap-4 mb-4">
                <Car className="w-12 h-12 md:w-16 md:h-16 text-primary" />
                <div className="h-px flex-1 bg-gradient-to-r from-primary/50 to-transparent" />
              </div>
              <h1 className="font-display text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-bold leading-none tracking-tight">
                <span className="text-foreground">Carros</span>
                <br />
                <span className="text-gradient">Clássicos</span>
              </h1>
              {/* Decorative chrome line */}
              <div className="mt-6 flex items-center gap-2">
                <div className="h-[3px] w-20 bg-gradient-to-r from-gray-400 via-gray-200 to-gray-400" />
                <div className="h-2 w-2 rounded-full bg-primary" />
                <div className="h-[3px] w-10 bg-gradient-to-r from-gray-400 to-transparent" />
              </div>
            </div>

            {/* Description */}
            <p className="text-muted-foreground text-lg md:text-xl max-w-lg leading-relaxed">
              Uma coleção <span className="text-primary font-bold">exclusiva</span> de <strong className="text-foreground font-bold">miniaturas de carros clássicos</strong> que marcaram a história do automobilismo.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row items-start gap-4 pt-4">
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
                className="text-base px-8 w-full sm:w-auto border-border text-foreground hover:bg-secondary"
                onClick={() => document.getElementById('colecao')?.scrollIntoView({ behavior: 'smooth' })}
              >
                Ver Coleção
              </Button>
            </div>
          </div>
        </div>

        {/* Price Badge - fixed on screen */}
        {!isSubscriptionOpen && (
          <div 
            onClick={() => setIsSubscriptionOpen(true)}
            className="group flex fixed top-20 right-4 md:top-32 md:right-8 xl:right-16 2xl:right-24 w-24 h-24 md:w-40 md:h-40 rounded-full font-bold flex-col items-center justify-center text-center leading-tight z-[100] cursor-pointer transition-all duration-500 ease-out overflow-hidden hover:scale-110 border-4 border-gray-300"
            style={{
              background: 'linear-gradient(135deg, #DC2626 0%, #991B1B 50%, #7F1D1D 100%)',
              boxShadow: '0 8px 32px rgba(220, 38, 38, 0.4), inset 0 1px 0 rgba(255,255,255,0.2)',
            }}
          >
            {/* Shine overlay */}
            <div 
              className="absolute inset-0 opacity-30"
              style={{
                background: 'linear-gradient(110deg, transparent 30%, rgba(255,255,255,0.3) 50%, transparent 70%)',
              }}
            />
            <span className="text-[10px] md:text-sm uppercase tracking-wider text-white/80 font-semibold relative z-10">1º Carro</span>
            <span className="text-lg md:text-3xl font-black text-white drop-shadow-sm relative z-10">VW Beetle</span>
            <span className="text-xs md:text-lg font-bold text-white/90 relative z-10">por 1€</span>
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