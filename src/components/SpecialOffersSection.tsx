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
import { Gift, ChevronRight } from "lucide-react";

const SpecialOffersSection = () => {
  const { setIsSubscriptionOpen } = useSubscription();

  return (
    <section className="py-20 md:py-28 bg-gradient-to-b from-yellow-400 via-yellow-300 to-yellow-400 relative overflow-hidden">
      {/* Background pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0" style={{ backgroundImage: 'radial-gradient(circle, #000 1px, transparent 1px)', backgroundSize: '20px 20px' }} />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        {/* Header */}
        <div className="text-center mb-12 md:mb-16">
          <div className="inline-flex items-center gap-2 bg-red-600 text-white px-4 py-2 rounded-full mb-6">
            <Gift className="w-5 h-5" />
            <span className="uppercase tracking-widest text-sm">Ofertas Exclusivas</span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl text-gray-900 leading-tight uppercase tracking-tight">
            Assine Já e Receba Estas
            <br />
            <span className="text-red-600">Fantásticas Ofertas!</span>
          </h2>
        </div>

        {/* Offers Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          
          {/* Offer 1: Caderno Exclusivo */}
          <div className="bg-white rounded-3xl p-6 shadow-2xl hover:shadow-3xl transition-all duration-300 hover:-translate-y-2 group">
            <div className="bg-red-600 text-white text-xs uppercase tracking-wider px-3 py-1 rounded-full inline-block mb-4">
              Oferta com o 1º Envio
            </div>
            <div className="flex justify-center mb-6">
              <img 
                src={caderno} 
                alt="Caderno Exclusivo"
                className="w-40 md:w-48 object-contain group-hover:scale-105 transition-transform duration-300"
              />
            </div>
            <h3 className="text-xl md:text-2xl text-gray-900 uppercase mb-2">
              Caderno Exclusivo
            </h3>
            <p className="text-gray-600 text-sm leading-relaxed">
              Perfeito para registar cada detalhe da sua coleção de carros.
            </p>
          </div>

          {/* Offer 2: Caixas Organizadoras */}
          <div className="bg-white rounded-3xl p-6 shadow-2xl hover:shadow-3xl transition-all duration-300 hover:-translate-y-2 group">
            <div className="bg-red-600 text-white text-xs uppercase tracking-wider px-3 py-1 rounded-full inline-block mb-4">
              Oferta com o 6º, 14º, 21º, 29º e 36º Envio
            </div>
            <div className="flex justify-center mb-6">
              <img 
                src={caixaMadeira} 
                alt="Caixa Organizadora de Madeira"
                className="w-full max-w-[200px] object-contain group-hover:scale-105 transition-transform duration-300"
              />
            </div>
            <h3 className="text-xl md:text-2xl text-gray-900 uppercase mb-2">
              5 Caixas Organizadoras de Madeira
            </h3>
            <p className="text-gray-600 text-sm leading-relaxed">
              Ideais para arrumar e expor as miniaturas com estilo. (46x23x5 cm)
            </p>
          </div>

          {/* Offer 3: Pack Ferrari */}
          <div className="bg-white rounded-3xl p-6 shadow-2xl hover:shadow-3xl transition-all duration-300 hover:-translate-y-2 group md:col-span-2 lg:col-span-1">
            <div className="bg-red-600 text-white text-xs uppercase tracking-wider px-3 py-1 rounded-full inline-block mb-4">
              Oferta com o 4º e 19º Envio
            </div>
            <div className="flex justify-center mb-6">
              <div className="grid grid-cols-3 gap-2">
                <img src={ferrari1} alt="Ferrari 1" className="w-16 md:w-20 object-contain group-hover:scale-105 transition-transform duration-300" />
                <img src={ferrari2} alt="Ferrari 2" className="w-16 md:w-20 object-contain group-hover:scale-105 transition-transform duration-300" />
                <img src={ferrari3} alt="Ferrari 3" className="w-16 md:w-20 object-contain group-hover:scale-105 transition-transform duration-300" />
                <img src={ferrari4} alt="Ferrari 4" className="w-16 md:w-20 object-contain group-hover:scale-105 transition-transform duration-300" />
                <img src={ferrari5} alt="Ferrari 5" className="w-16 md:w-20 object-contain group-hover:scale-105 transition-transform duration-300" />
                <img src={ferrari6} alt="Ferrari 6" className="w-16 md:w-20 object-contain group-hover:scale-105 transition-transform duration-300" />
              </div>
            </div>
            <h3 className="text-xl md:text-2xl text-gray-900 uppercase mb-2">
              2 Pack Exclusivos de 3 Ferrari
            </h3>
            <p className="text-gray-600 text-sm leading-relaxed">
              <strong>Pack 1:</strong> Enzo Ferrari, LaFerrari, F40 Competizione<br />
              <strong>Pack 2:</strong> Ferrari 599 GTO, Ferrari F50, Ferrari Roma
            </p>
          </div>

        </div>

        {/* CTA Button */}
        <div className="text-center mt-12 md:mt-16">
          <Button
            onClick={() => setIsSubscriptionOpen(true)}
            className="bg-red-600 hover:bg-red-700 text-white text-lg md:text-xl px-10 py-7 h-auto rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 uppercase tracking-wide group"
          >
            Quero Estas Ofertas!
            <ChevronRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </Button>
        </div>
      </div>
    </section>
  );
};

export default SpecialOffersSection;