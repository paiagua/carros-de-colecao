import { Gift, Truck, CalendarCheck, XCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useSubscription } from "@/contexts/SubscriptionContext";

const ReasonsSection = () => {
  const { isSubscriptionOpen, setIsSubscriptionOpen } = useSubscription();

  const reasons = [
    {
      icon: Gift,
      title: "Ofertas Exclusivas",
      description: "Brindes e edições especiais para assinantes",
    },
    {
      icon: Truck,
      title: "Envio Gratuito",
      description: "Todos os envios sem custos adicionais",
    },
    {
      icon: CalendarCheck,
      title: "Nunca Perde Nenhum",
      description: "Garantia de receber toda a coleção",
    },
    {
      icon: XCircle,
      title: "Cancele Quando Quiser",
      description: "Sem compromissos ou penalizações",
    },
  ];

  return (
    <>
      <section className="py-20 md:py-28 bg-background">
        <div className="container mx-auto px-4">
          {/* Header */}
          <div className="text-center mb-12 md:mb-16 max-w-3xl mx-auto">
            <span className="text-primary text-sm font-semibold uppercase tracking-wider">Porquê Assinar?</span>
            <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-bold text-foreground mt-2 mb-4">
              4 Razões para Assinar
            </h2>
            <p className="text-muted-foreground text-lg">
              Milhares de colecionadores já subscreveram esta coleção única.
            </p>
          </div>

          {/* Grid */}
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-5xl mx-auto mb-12">
            {reasons.map((reason, index) => {
              const Icon = reason.icon;
              return (
                <div
                  key={index}
                  className="text-center p-6"
                >
                  <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Icon className="w-8 h-8 text-primary" />
                  </div>
                  <h3 className="font-semibold text-foreground mb-2">{reason.title}</h3>
                  <p className="text-muted-foreground text-sm">{reason.description}</p>
                </div>
              );
            })}
          </div>

          {/* CTA */}
          <div className="text-center">
            <Button
              className="bg-orange-500 hover:bg-orange-600 text-white font-bold text-lg px-8 py-6 h-auto"
              onClick={() => setIsSubscriptionOpen(true)}
            >
              Assinar Agora
            </Button>
          </div>
        </div>
      </section>
    </>
  );
};

export default ReasonsSection;