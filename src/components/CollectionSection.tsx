import { useState, useRef } from "react";
import { ChevronDown, ChevronUp, Car } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Dialog, DialogContent } from "@/components/ui/dialog";
import { useSubscription } from "@/contexts/SubscriptionContext";
import SubscriptionForm from "./SubscriptionForm";
import { minerals } from "@/data/minerals";
import { getCarImage } from "@/data/carImages";

const CollectionSection = () => {
  const [showFullList, setShowFullList] = useState(false);
  const { isSubscriptionOpen, setIsSubscriptionOpen } = useSubscription();
  const listRef = useRef<HTMLDivElement>(null);

  const handleToggleList = () => {
    setShowFullList(!showFullList);
    if (!showFullList) {
      setTimeout(() => {
        if (listRef.current) {
          listRef.current.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
      }, 100);
    }
  };

  return (
    <>
      <section id="colecao" className="py-20 md:py-28 bg-gradient-to-b from-orange-200 via-orange-100 to-amber-50 relative overflow-hidden">
        {/* Subtle dot pattern texture */}
        <div 
          className="absolute inset-0 opacity-[0.03]"
          style={{
            backgroundImage: `radial-gradient(circle, #000 1px, transparent 1px)`,
            backgroundSize: '24px 24px'
          }}
        />
        
        {/* Grid lines texture */}
        <div 
          className="absolute inset-0 opacity-[0.02]"
          style={{
            backgroundImage: `linear-gradient(to right, #000 1px, transparent 1px), linear-gradient(to bottom, #000 1px, transparent 1px)`,
            backgroundSize: '60px 60px'
          }}
        />
        
        {/* Background decorative elements */}
        <div className="absolute top-0 right-0 w-96 h-96 bg-gradient-to-bl from-orange-500/10 via-orange-400/5 to-transparent rounded-full blur-3xl" />
        <div className="absolute top-20 right-20 w-64 h-64 bg-gradient-to-bl from-orange-400/15 to-transparent rounded-full blur-2xl" />
        <div className="absolute bottom-0 left-0 w-80 h-80 bg-gradient-to-tr from-gray-200/50 to-transparent rounded-full blur-3xl" />
        
        <div className="container mx-auto px-4 relative z-10">
        {/* Header */}
        <div className="relative flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-12 md:mb-16 pb-8 border-b border-gray-200">
          {/* Decorative line accent */}
          <div className="absolute bottom-0 left-0 w-32 h-1 bg-gradient-to-r from-orange-500 to-orange-400 rounded-full" />
          
          <div className="max-w-2xl">
            <div className="inline-flex items-center gap-2 text-primary text-sm font-semibold mb-4">
              <Car className="w-4 h-4" />
              <span className="uppercase tracking-wider">Miniaturas Exclusivas</span>
            </div>
            <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-bold text-foreground">
              A Coleção
            </h2>
          </div>
          <div className="md:text-right max-w-md">
            <p className="text-muted-foreground text-base md:text-lg">
              Uma seleção única de carros clássicos em miniatura, reproduções fiéis dos modelos icónicos.
            </p>
          </div>
        </div>

          {/* Cars Grid */}
          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-5 md:gap-6 mb-12">
            {minerals.slice(0, 10).map((car, index) => {
              const isFirst = index === 0;
              const carImage = getCarImage(car.number);
              
              return (
                <div 
                  key={car.number}
                  onClick={() => setIsSubscriptionOpen(true)}
                  className={`group relative bg-white rounded-2xl p-5 pt-6 text-center transition-all duration-500 hover:-translate-y-3 cursor-pointer ${
                    isFirst 
                      ? "shadow-xl shadow-orange-500/25 ring-2 ring-orange-500" 
                      : "shadow-lg shadow-gray-200/50 hover:shadow-2xl hover:shadow-orange-300/30"
                  }`}
                >
                  {/* Animated background gradient */}
                  <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-orange-100/0 via-orange-50/0 to-amber-100/0 group-hover:from-orange-100/80 group-hover:via-orange-50/50 group-hover:to-amber-100/80 transition-all duration-700" />
                  
                  {/* Decorative corner elements */}
                  <div className="absolute top-0 left-0 w-12 h-12 border-l-2 border-t-2 border-orange-200/0 group-hover:border-orange-400 rounded-tl-2xl transition-all duration-500" />
                  <div className="absolute bottom-0 right-0 w-12 h-12 border-r-2 border-b-2 border-orange-200/0 group-hover:border-orange-400 rounded-br-2xl transition-all duration-500" />
                  
                  {/* Floating particles effect */}
                  <div className="absolute top-4 right-8 w-2 h-2 bg-orange-300 rounded-full opacity-0 group-hover:opacity-60 group-hover:animate-pulse transition-opacity duration-500" />
                  <div className="absolute bottom-8 left-6 w-1.5 h-1.5 bg-orange-400 rounded-full opacity-0 group-hover:opacity-50 group-hover:animate-pulse transition-opacity duration-700" style={{ animationDelay: '0.3s' }} />
                  <div className="absolute top-1/2 right-4 w-1 h-1 bg-amber-400 rounded-full opacity-0 group-hover:opacity-70 group-hover:animate-pulse transition-opacity duration-500" style={{ animationDelay: '0.5s' }} />
                  
                  {/* Price badge */}
                  <div className={`absolute top-2 right-2 text-xs font-bold px-3 py-1.5 rounded-full z-20 shadow-lg transform group-hover:scale-110 transition-transform duration-300 ${
                    isFirst 
                      ? "bg-gradient-to-r from-orange-500 to-orange-600 text-white" 
                      : "bg-white text-gray-700 border border-gray-200 group-hover:border-orange-300 group-hover:text-orange-600"
                  }`}>
                    {car.price}
                  </div>
                  
                  {isFirst && (
                    <div className="absolute top-2 left-2 bg-gradient-to-r from-orange-500 to-orange-600 text-white text-[10px] font-bold px-3 py-1.5 rounded-full z-20 shadow-lg animate-pulse">
                      1ª Entrega
                    </div>
                  )}
                  
                  {/* Car image container */}
                  <div className="relative w-full aspect-[4/3] mb-4 overflow-hidden rounded-xl bg-gradient-to-br from-gray-50 via-white to-gray-100 flex items-center justify-center">
                    {/* Radial glow effect */}
                    <div className="absolute inset-0 bg-radial-gradient opacity-0 group-hover:opacity-100 transition-opacity duration-500" 
                         style={{ background: 'radial-gradient(circle at center, rgba(251, 146, 60, 0.15) 0%, transparent 70%)' }} />
                    
                    {/* Subtle grid pattern */}
                    <div className="absolute inset-0 opacity-[0.03]" style={{
                      backgroundImage: 'linear-gradient(to right, #000 1px, transparent 1px), linear-gradient(to bottom, #000 1px, transparent 1px)',
                      backgroundSize: '20px 20px'
                    }} />
                    
                    {/* Shine effect */}
                    <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-white/40 to-transparent opacity-0 group-hover:opacity-100 transform -translate-x-full group-hover:translate-x-full transition-all duration-1000" />
                    
                    {carImage ? (
                      <img 
                        src={carImage} 
                        alt={car.title}
                        className="relative w-full h-full object-contain p-3 group-hover:scale-115 transition-transform duration-700 drop-shadow-lg group-hover:drop-shadow-2xl"
                        style={{ filter: 'drop-shadow(0 4px 6px rgba(0,0,0,0.1))' }}
                      />
                    ) : (
                      <Car className="w-12 h-12 text-muted-foreground/30" />
                    )}
                  </div>
                  
                  {/* Car info */}
                  <div className="relative z-10">
                    <span className="inline-block text-xs font-bold text-orange-600 bg-gradient-to-r from-orange-50 to-amber-50 px-3 py-1 rounded-full mb-2 border border-orange-100 group-hover:border-orange-300 transition-colors duration-300">
                      Nº {car.number}
                    </span>
                    <h3 className="font-bold text-sm text-gray-800 line-clamp-2 group-hover:text-orange-600 transition-colors duration-300">
                      {car.title}
                    </h3>
                  </div>
                  
                  {/* Bottom accent line */}
                  <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-orange-500 to-transparent scale-x-0 group-hover:scale-x-100 transition-transform duration-500" />
                  
                  {/* Side glow lines */}
                  <div className="absolute top-1/4 -left-px w-px h-1/2 bg-gradient-to-b from-transparent via-orange-400 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                  <div className="absolute top-1/4 -right-px w-px h-1/2 bg-gradient-to-b from-transparent via-orange-400 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                </div>
              );
            })}
          </div>

          {/* Toggle List Button */}
          <div id="entregas" className="text-center mb-8">
            <Button 
              variant="outline" 
              size="lg"
              onClick={handleToggleList}
              className="gap-2"
            >
              <span className="font-medium">Ver Lista Completa</span>
              {showFullList ? (
                <ChevronUp className="w-4 h-4" />
              ) : (
                <ChevronDown className="w-4 h-4" />
              )}
            </Button>
          </div>

          {/* Full List */}
          {showFullList && (
            <div ref={listRef} className="max-w-4xl mx-auto animate-fade-in scroll-mt-24">
              <div className="bg-card rounded-xl border border-border overflow-hidden">
                <div className="overflow-x-auto">
                  <table className="w-full text-sm">
                    <thead className="bg-muted">
                      <tr>
                        <th className="text-left py-3 px-4 font-semibold text-foreground">Nº</th>
                        <th className="text-left py-3 px-4 font-semibold text-foreground">Modelo</th>
                        <th className="text-left py-3 px-4 font-semibold text-foreground">Data</th>
                        <th className="text-right py-3 px-4 font-semibold text-foreground">Preço</th>
                      </tr>
                    </thead>
                    <tbody>
                      {minerals.map((car, index) => (
                        <tr 
                          key={car.number}
                          className={`border-t border-border hover:bg-muted/50 transition-colors ${index === 0 ? 'bg-primary/5' : ''}`}
                        >
                          <td className="py-3 px-4 font-semibold text-primary">{car.number}</td>
                          <td className="py-3 px-4 text-foreground">{car.title}</td>
                          <td className="py-3 px-4 text-muted-foreground">{car.date}</td>
                          <td className="py-3 px-4 text-right font-semibold text-foreground">{car.price}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          )}

          {/* CTA */}
          <div className="text-center mt-12">
            <Button 
              className="bg-orange-500 hover:bg-orange-600 text-white font-bold text-lg px-8 py-6 h-auto"
              onClick={() => setIsSubscriptionOpen(true)}
            >
              Iniciar a Minha Coleção
            </Button>
          </div>
        </div>
      </section>

      <Dialog open={isSubscriptionOpen} onOpenChange={setIsSubscriptionOpen}>
        <DialogContent className="max-w-4xl w-full h-[100dvh] md:h-auto md:max-h-[85vh] p-4 md:p-6 m-0 md:m-4 max-w-full md:max-w-4xl rounded-none md:rounded-xl overflow-hidden flex flex-col">
          <SubscriptionForm onClose={() => setIsSubscriptionOpen(false)} />
        </DialogContent>
      </Dialog>
    </>
  );
};

export default CollectionSection;