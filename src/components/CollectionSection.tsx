import { useState, useRef } from "react";
import { ChevronDown, ChevronUp, Car } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Dialog, DialogContent } from "@/components/ui/dialog";
import { useSubscription } from "@/contexts/SubscriptionContext";
import SubscriptionForm from "./SubscriptionForm";
import { minerals } from "@/data/minerals";

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
      <section id="colecao" className="py-24 bg-secondary/30 relative overflow-hidden">
        {/* Decorative elements */}
        <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-primary/50 to-transparent" />
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-16 items-end mb-16 md:mb-24 animate-fade-in">
            {/* Left side - Title */}
            <div className="lg:col-span-7 text-left">
              <div className="inline-flex items-center gap-2 text-primary text-sm md:text-base font-semibold mb-3">
                <Car className="w-4 h-4 md:w-5 md:h-5" />
                <span className="uppercase tracking-wider">Miniaturas Exclusivas</span>
              </div>
              <h2 className="font-display text-4xl sm:text-5xl md:text-7xl lg:text-8xl font-bold text-foreground leading-[0.9]">
                A <span className="text-primary">Coleção</span>
              </h2>
            </div>
            
            {/* Right side - Description */}
            <div className="lg:col-span-5 lg:pb-2">
              <div className="lg:border-l-2 border-primary/30 lg:pl-8">
                <p className="text-base sm:text-lg md:text-xl text-muted-foreground leading-relaxed">
                  Uma seleção única de <span className="text-foreground underline decoration-primary decoration-2 underline-offset-4">carros clássicos</span> em miniatura, reproduções fiéis dos <span className="text-foreground underline decoration-primary decoration-2 underline-offset-4">modelos icónicos</span>.
                </p>
              </div>
            </div>
          </div>

          {/* First 8 cars preview */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 gap-y-10 md:gap-8 md:gap-y-12 mb-12 max-w-5xl mx-auto">
            {minerals.slice(0, 8).map((car, index) => {
              const isFirst = index === 0;
              return (
                <div 
                  key={car.number}
                  className={`relative rounded-xl p-4 md:p-6 text-center hover:shadow-lg transition-all duration-300 animate-scale-in group flex flex-col ${
                    isFirst 
                      ? "bg-gradient-to-br from-primary/20 via-primary/15 to-primary/10 border-2 border-primary/60 shadow-2xl shadow-primary/40 ring-4 ring-primary/30 scale-105 md:scale-110" 
                      : "bg-card border border-border hover:border-primary/50"
                  }`}
                  style={{ animationDelay: `${index * 0.05}s` }}
                >
                  {/* Badge de preço */}
                  <div className={`absolute -top-3 -right-3 text-sm font-bold px-3 py-1.5 rounded-full shadow-xl z-10 ${
                    isFirst 
                      ? "bg-gradient-to-r from-primary to-red-700 text-white animate-pulse" 
                      : "bg-primary text-primary-foreground"
                  }`}>
                    {car.price}
                  </div>
                  
                  {/* Etiqueta destaque */}
                  {isFirst && (
                    <div className="absolute -top-3 -left-3 bg-gradient-to-r from-gray-200 to-gray-400 text-gray-900 text-[10px] font-black px-2 py-1 rounded-full shadow-lg z-10 uppercase tracking-wider">
                      1ª Entrega
                    </div>
                  )}
                  
                  {/* Car icon placeholder */}
                  <div className={`w-full aspect-[4/3] mb-3 overflow-hidden rounded-lg relative flex items-center justify-center bg-secondary ${isFirst ? "ring-2 ring-primary/50" : ""}`}>
                    <Car className={`w-16 h-16 ${isFirst ? "text-primary" : "text-muted-foreground"}`} />
                  </div>
                  
                  <span className={`font-bold text-sm ${isFirst ? "text-primary" : "text-primary"}`}>Nº {car.number}</span>
                  <h3 className={`font-semibold text-sm md:text-base mt-1 ${isFirst ? "text-primary font-bold" : "text-foreground"}`}>{car.title}</h3>
                  <Button 
                    variant={isFirst ? "default" : "cta"}
                    size="sm"
                    onClick={() => setIsSubscriptionOpen(true)}
                    className={`mt-4 w-full text-xs md:text-sm ${isFirst ? "bg-gradient-to-r from-primary to-red-700 hover:from-red-600 hover:to-red-800 text-white font-bold border-0" : ""}`}
                  >
                    Iniciar Coleção
                  </Button>
                </div>
              );
            })}
          </div>

          {/* Botão Lista de Entregas */}
          <div id="entregas" className="text-center mb-12">
            <Button 
              variant="outline" 
              size="lg"
              onClick={handleToggleList}
              className="gap-2 group"
            >
              <span className="font-semibold">VER TODOS OS CARROS</span>
              {showFullList ? (
                <ChevronUp className="w-5 h-5 group-hover:-translate-y-1 transition-transform duration-300" />
              ) : (
                <ChevronDown className="w-5 h-5 group-hover:translate-y-1 transition-transform duration-300" />
              )}
            </Button>
          </div>

          {/* Lista completa expandível */}
          {showFullList && (
            <div ref={listRef} className="max-w-5xl mx-auto animate-slide-up scroll-mt-24">
              <div className="bg-card shadow-xl rounded-2xl p-8 md:p-10 border border-border">
                <div className="overflow-x-auto">
                  <table className="w-full text-sm">
                    <thead>
                      <tr className="border-b border-border">
                        <th className="text-left py-3 px-2 text-primary font-semibold">Nº</th>
                        <th className="text-left py-3 px-2 text-primary font-semibold">Modelo</th>
                        <th className="text-left py-3 px-2 text-primary font-semibold">Data em Banca</th>
                        <th className="text-right py-3 px-2 text-primary font-semibold">PVP</th>
                        <th className="text-right py-3 px-2"></th>
                      </tr>
                    </thead>
                    <tbody>
                      {minerals.map((car) => (
                        <tr 
                          key={car.number}
                          className="border-b border-border/50 hover:bg-secondary/50 transition-colors"
                        >
                          <td className="py-2 px-2 font-bold text-primary">{car.number}</td>
                          <td className="py-2 px-2 text-foreground">{car.title}</td>
                          <td className="py-2 px-2 text-muted-foreground">{car.date}</td>
                          <td className="py-2 px-2 text-right text-primary font-semibold">{car.price}</td>
                          <td className="py-2 px-2 text-right">
                            <Button 
                              variant="cta" 
                              size="sm"
                              onClick={() => setIsSubscriptionOpen(true)}
                              className="text-xs"
                            >
                              Iniciar Coleção
                            </Button>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          )}
        </div>
      </section>

      <Dialog open={isSubscriptionOpen} onOpenChange={setIsSubscriptionOpen}>
        <DialogContent className="max-w-4xl w-full h-[100dvh] md:h-auto md:max-h-[85vh] p-4 md:p-6 m-0 md:m-4 max-w-full md:max-w-4xl rounded-none md:rounded-lg overflow-hidden flex flex-col">
          <SubscriptionForm onClose={() => setIsSubscriptionOpen(false)} />
        </DialogContent>
      </Dialog>
    </>
  );
};

export default CollectionSection;