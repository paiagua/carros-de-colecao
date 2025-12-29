import { Gift, Truck, CalendarCheck, XCircle, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Dialog, DialogContent } from "@/components/ui/dialog";
import { useSubscription } from "@/contexts/SubscriptionContext";
import SubscriptionForm from "./SubscriptionForm";

const ReasonsSection = () => {
  const { isSubscriptionOpen, setIsSubscriptionOpen } = useSubscription();

  const reasons = [
    {
      icon: Gift,
      title: "OFERTAS EXCLUSIVAS",
      subtitle: "PARA ASSINANTES",
      description: "Geodo de Quartzo, Geodo de Ametista e Lupa",
    },
    {
      icon: Truck,
      title: "SEM DESPESAS",
      subtitle: "DE ENVIO",
      description: "Todos os envios são totalmente gratuitos",
    },
    {
      icon: CalendarCheck,
      title: "NÃO PERDE",
      subtitle: "NENHUM NÚMERO",
      description: "Garantia de receber todos os minerais da coleção",
    },
    {
      icon: XCircle,
      title: "PODERÁ CANCELAR",
      subtitle: "QUANDO DESEJAR",
      description: "Sem compromissos ou penalizações",
    },
  ];

  return (
    <>
      <section className="py-16 md:py-24 bg-secondary relative overflow-hidden">
        {/* Decorative elements */}
        <div className="absolute top-1/4 left-0 w-96 h-96 bg-accent/10 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 right-0 w-96 h-96 bg-cta/10 rounded-full blur-3xl" />

        <div className="container mx-auto px-4 relative z-10">
          {/* Header */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-16 items-end mb-12 md:mb-16 animate-fade-in">
            {/* Left side - Title */}
            <div className="lg:col-span-7 text-left">
              <div className="inline-flex items-center gap-2 text-accent text-sm md:text-base font-semibold mb-3">
                <span className="uppercase tracking-wider">Coleção inédita de 120 Minerais</span>
              </div>
              <h2 className="font-display text-4xl sm:text-5xl md:text-7xl font-bold text-foreground leading-[0.9]">
                4 Razões para <span className="text-accent">Subscrever</span>
              </h2>
            </div>
            
            {/* Right side - Description */}
            <div className="lg:col-span-5 lg:pb-2">
              <div className="lg:border-l-2 border-accent/30 lg:pl-8">
                <p className="text-base sm:text-lg md:text-xl text-muted-foreground leading-relaxed">
                  Descubra porque <span className="text-foreground underline decoration-accent decoration-2 underline-offset-4">milhares de colecionadores</span> já subscreveram esta <span className="text-foreground underline decoration-accent decoration-2 underline-offset-4">coleção única</span>
                </p>
              </div>
            </div>
          </div>

          {/* Reasons Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8 max-w-6xl mx-auto mb-12 md:mb-16">
            {reasons.map((reason, index) => {
              const Icon = reason.icon;
              return (
                <div
                  key={index}
                  className="group animate-fade-in"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <div className="
                    relative overflow-hidden
                    bg-card/50 backdrop-blur-sm
                    border border-border
                    rounded-xl md:rounded-2xl
                    p-6 md:p-8
                    transition-all duration-300
                    hover:shadow-xl hover:shadow-accent/10
                    hover:border-accent/30
                    h-full
                  ">
                    <div className="flex items-start gap-4 md:gap-6 mb-4">
                      <div className="flex-shrink-0">
                        <div className="w-14 h-14 md:w-16 md:h-16 rounded-xl bg-accent/10 flex items-center justify-center group-hover:bg-accent/20 transition-colors duration-300">
                          <Icon className="w-7 h-7 md:w-8 md:h-8 text-accent" strokeWidth={2.5} />
                        </div>
                      </div>

                      <div className="flex-1">
                        <h3 className="text-xl md:text-2xl font-display font-bold text-foreground leading-tight mb-1">
                          {reason.title}
                        </h3>
                        <p className="text-lg md:text-xl font-display font-bold text-accent">
                          {reason.subtitle}
                        </p>
                      </div>
                    </div>

                    <p className="text-base md:text-lg text-foreground leading-relaxed pl-0 md:pl-20">
                      {reason.description}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>

          {/* CTA Button */}
          <div className="text-center animate-fade-in" style={{ animationDelay: '0.4s' }}>
            <Button
              variant="cta"
              size="xl"
              className="text-lg md:text-xl px-8 md:px-12 py-6 md:py-8"
              onClick={() => setIsSubscriptionOpen(true)}
            >
              <span className="flex items-center justify-center gap-2">
                Subscrever Agora
                <Sparkles className="w-5 h-5 md:w-6 md:h-6" />
              </span>
            </Button>
          </div>
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

export default ReasonsSection;