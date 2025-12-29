import caderno from "@/assets/offers/caderno.png";
import caixaMadeira from "@/assets/offers/caixa-madeira.png";
import ferrari1 from "@/assets/offers/ferrari-1.png";
import ferrari2 from "@/assets/offers/ferrari-2.png";
import ferrari3 from "@/assets/offers/ferrari-3.png";
import ferrari4 from "@/assets/offers/ferrari-4.png";
import ferrari5 from "@/assets/offers/ferrari-5.png";
import ferrari6 from "@/assets/offers/ferrari-6.png";
import { Button } from "@/components/ui/button";
import { useSubscription } from "@/contexts/SubscriptionContext";
import { Gift, ChevronRight, Sparkles } from "lucide-react";

const SpecialOffersSection = () => {
  const { setIsSubscriptionOpen } = useSubscription();

  return (
    <section className="py-24 md:py-32 bg-gradient-to-b from-gray-900 via-gray-800 to-gray-900 relative overflow-hidden">
      {/* Elegant background elements */}
      <div className="absolute inset-0">
        {/* Subtle grid pattern */}
        <div 
          className="absolute inset-0 opacity-[0.03]"
          style={{
            backgroundImage: 'linear-gradient(to right, #fff 1px, transparent 1px), linear-gradient(to bottom, #fff 1px, transparent 1px)',
            backgroundSize: '60px 60px'
          }}
        />
        
        {/* Floating orbs */}
        <div className="absolute top-20 left-10 w-96 h-96 bg-orange-500/10 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-20 right-10 w-80 h-80 bg-amber-500/10 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }} />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-orange-600/5 rounded-full blur-3xl" />
      </div>

      {/* Top decorative line */}
      <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-orange-500 to-transparent" />

      <div className="container mx-auto px-4 relative z-10">
        {/* Header */}
        <div className="text-center mb-16 md:mb-20">
          <div className="inline-flex items-center gap-3 bg-gradient-to-r from-orange-500/20 to-amber-500/20 backdrop-blur-sm border border-orange-500/30 text-orange-400 px-6 py-3 rounded-full mb-8">
            <Gift className="w-5 h-5" />
            <span className="uppercase tracking-[0.2em] text-sm font-medium">Ofertas Exclusivas</span>
            <Sparkles className="w-4 h-4" />
          </div>
          
          <h2 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl text-white leading-tight mb-6">
            Assine Já e Receba
            <br />
            <span className="bg-gradient-to-r from-orange-400 via-amber-400 to-orange-500 bg-clip-text text-transparent">
              Ofertas Fantásticas
            </span>
          </h2>
          
          <div className="flex justify-center gap-2 mt-8">
            <div className="h-px w-20 bg-gradient-to-r from-transparent to-orange-500/50" />
            <div className="h-1 w-4 bg-orange-500 rounded-full" />
            <div className="h-px w-20 bg-gradient-to-l from-transparent to-orange-500/50" />
          </div>
        </div>

        {/* Offers Grid */}
        <div className="grid md:grid-cols-3 gap-6 lg:gap-8 max-w-6xl mx-auto mb-16">
          
          {/* Offer 1: Caderno Exclusivo */}
          <div className="group relative">
            {/* Card glow effect */}
            <div className="absolute -inset-1 bg-gradient-to-r from-orange-500/20 via-amber-500/20 to-orange-500/20 rounded-3xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
            
            <div className="relative bg-gradient-to-b from-white to-gray-50 rounded-3xl p-8 shadow-2xl hover:shadow-orange-500/10 transition-all duration-500 group-hover:-translate-y-2 overflow-hidden">
              {/* Decorative corner */}
              <div className="absolute top-0 right-0 w-24 h-24 bg-gradient-to-bl from-orange-100 to-transparent rounded-bl-[100px]" />
              
              {/* Badge */}
              <div className="relative inline-flex items-center gap-2 bg-gradient-to-r from-orange-500 to-orange-600 text-white text-xs uppercase tracking-wider px-4 py-2 rounded-full mb-8 shadow-lg shadow-orange-500/30">
                <Sparkles className="w-3 h-3" />
                Oferta com o 1º Envio
              </div>
              
              {/* Image container */}
              <div className="relative flex justify-center mb-8">
                <div className="absolute inset-0 bg-gradient-to-t from-orange-100/50 to-transparent rounded-2xl" />
                <img 
                  src={caderno} 
                  alt="Caderno Exclusivo"
                  className="relative w-48 md:w-56 object-contain group-hover:scale-110 group-hover:rotate-2 transition-all duration-500 drop-shadow-2xl"
                />
              </div>
              
              {/* Content */}
              <div className="relative">
                <h3 className="text-2xl md:text-3xl font-bold text-gray-900 uppercase mb-3 tracking-tight">
                  Caderno Exclusivo
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  Perfeito para registar cada detalhe da sua coleção de carros.
                </p>
              </div>
              
              {/* Bottom accent */}
              <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-orange-400 via-orange-500 to-orange-400 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500" />
            </div>
          </div>

          {/* Offer 2: Caixas Organizadoras */}
          <div className="group relative">
            <div className="absolute -inset-1 bg-gradient-to-r from-amber-500/20 via-orange-500/20 to-amber-500/20 rounded-3xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
            
            <div className="relative bg-gradient-to-b from-white to-gray-50 rounded-3xl p-8 shadow-2xl hover:shadow-orange-500/10 transition-all duration-500 group-hover:-translate-y-2 overflow-hidden">
              <div className="absolute top-0 right-0 w-24 h-24 bg-gradient-to-bl from-amber-100 to-transparent rounded-bl-[100px]" />
              
              <div className="relative inline-flex items-center gap-2 bg-gradient-to-r from-amber-500 to-orange-500 text-white text-xs uppercase tracking-wider px-4 py-2 rounded-full mb-8 shadow-lg shadow-amber-500/30">
                <Sparkles className="w-3 h-3" />
                6º, 14º, 21º, 29º e 36º Envio
              </div>
              
              <div className="relative flex justify-center mb-8">
                <div className="absolute inset-0 bg-gradient-to-t from-amber-100/50 to-transparent rounded-2xl" />
                <img 
                  src={caixaMadeira} 
                  alt="Caixa Organizadora de Madeira"
                  className="relative w-full max-w-[220px] object-contain group-hover:scale-110 transition-all duration-500 drop-shadow-2xl"
                />
              </div>
              
              <div className="relative">
                <h3 className="text-2xl md:text-3xl font-bold text-gray-900 uppercase mb-3 tracking-tight">
                  5 Caixas de Madeira
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  Ideais para arrumar e expor as miniaturas com estilo. <span className="text-orange-600 font-medium">(46×23×5 cm)</span>
                </p>
              </div>
              
              <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-amber-400 via-orange-500 to-amber-400 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500" />
            </div>
          </div>

          {/* Offer 3: Pack Ferrari */}
          <div className="group relative">
            <div className="absolute -inset-1 bg-gradient-to-r from-red-500/20 via-orange-500/20 to-red-500/20 rounded-3xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
            
            <div className="relative bg-gradient-to-b from-white to-gray-50 rounded-3xl p-8 shadow-2xl hover:shadow-red-500/10 transition-all duration-500 group-hover:-translate-y-2 overflow-hidden">
              <div className="absolute top-0 right-0 w-24 h-24 bg-gradient-to-bl from-red-100 to-transparent rounded-bl-[100px]" />
              
              <div className="relative inline-flex items-center gap-2 bg-gradient-to-r from-red-500 to-red-600 text-white text-xs uppercase tracking-wider px-4 py-2 rounded-full mb-8 shadow-lg shadow-red-500/30">
                <Sparkles className="w-3 h-3" />
                4º e 19º Envio
              </div>
              
              <div className="relative flex justify-center mb-8">
                <div className="absolute inset-0 bg-gradient-to-t from-red-100/30 to-transparent rounded-2xl" />
                <div className="grid grid-cols-3 gap-3">
                  <img src={ferrari1} alt="Ferrari 1" className="w-16 md:w-20 object-contain group-hover:scale-110 transition-all duration-500 drop-shadow-xl" style={{ transitionDelay: '0ms' }} />
                  <img src={ferrari2} alt="Ferrari 2" className="w-16 md:w-20 object-contain group-hover:scale-110 transition-all duration-500 drop-shadow-xl" style={{ transitionDelay: '50ms' }} />
                  <img src={ferrari3} alt="Ferrari 3" className="w-16 md:w-20 object-contain group-hover:scale-110 transition-all duration-500 drop-shadow-xl" style={{ transitionDelay: '100ms' }} />
                  <img src={ferrari4} alt="Ferrari 4" className="w-16 md:w-20 object-contain group-hover:scale-110 transition-all duration-500 drop-shadow-xl" style={{ transitionDelay: '150ms' }} />
                  <img src={ferrari5} alt="Ferrari 5" className="w-16 md:w-20 object-contain group-hover:scale-110 transition-all duration-500 drop-shadow-xl" style={{ transitionDelay: '200ms' }} />
                  <img src={ferrari6} alt="Ferrari 6" className="w-16 md:w-20 object-contain group-hover:scale-110 transition-all duration-500 drop-shadow-xl" style={{ transitionDelay: '250ms' }} />
                </div>
              </div>
              
              <div className="relative">
                <h3 className="text-2xl md:text-3xl font-bold text-gray-900 uppercase mb-3 tracking-tight">
                  2 Pack de 3 Ferrari
                </h3>
                <div className="text-gray-600 text-sm leading-relaxed space-y-1">
                  <p><span className="text-red-600 font-semibold">Pack 1:</span> Enzo, LaFerrari, F40</p>
                  <p><span className="text-red-600 font-semibold">Pack 2:</span> 599 GTO, F50, Roma</p>
                </div>
              </div>
              
              <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-red-400 via-red-500 to-red-400 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500" />
            </div>
          </div>

        </div>

        {/* CTA Button */}
        <div className="text-center">
          <Button
            onClick={() => setIsSubscriptionOpen(true)}
            className="group relative bg-gradient-to-r from-orange-500 via-orange-600 to-orange-500 hover:from-orange-600 hover:via-orange-700 hover:to-orange-600 text-white text-lg md:text-xl px-12 py-8 h-auto rounded-2xl shadow-2xl shadow-orange-500/30 hover:shadow-orange-500/50 transition-all duration-500 uppercase tracking-wider overflow-hidden"
          >
            {/* Button shine effect */}
            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000" />
            
            <span className="relative flex items-center gap-3">
              <Gift className="w-6 h-6" />
              Quero Estas Ofertas!
              <ChevronRight className="w-5 h-5 group-hover:translate-x-2 transition-transform duration-300" />
            </span>
          </Button>
          
          <p className="mt-8 text-gray-500 text-sm max-w-2xl mx-auto">
            Imagens não contratuais. Em caso de rutura de stock, as ofertas serão substituídas por outras de valor idêntico.
          </p>
        </div>
      </div>

      {/* Bottom decorative line */}
      <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-orange-500 to-transparent" />
    </section>
  );
};

export default SpecialOffersSection;