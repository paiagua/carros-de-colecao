import { Gift, Truck, Calendar, Car, Shield, Clock, XCircle, BookOpen } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Dialog, DialogContent } from "@/components/ui/dialog";
import { useSubscription } from "@/contexts/SubscriptionContext";
import SubscriptionForm from "./SubscriptionForm";

const advantages = [
  { icon: Car, title: "Miniaturas de Qualidade", description: "Reproduções fiéis dos modelos originais" },
  { icon: Truck, title: "Envio Gratuito", description: "Sem custos de envio para assinantes" },
  { icon: Calendar, title: "Entrega Regular", description: "Receba em casa sem preocupações" },
  { icon: BookOpen, title: "Fascículos Completos", description: "História e curiosidades de cada modelo" },
  { icon: Gift, title: "Caixa Expositora", description: "Para guardar a sua coleção" },
  { icon: Shield, title: "Qualidade Premium", description: "Materiais e acabamentos de excelência" },
  { icon: Clock, title: "Nunca Perde Nenhum", description: "Garantia de entrega completa" },
  { icon: XCircle, title: "Cancelamento Livre", description: "Cancele quando quiser" }
];

const AdvantagesSection = () => {
  const { isSubscriptionOpen, setIsSubscriptionOpen } = useSubscription();

  return (
    <>
      <section id="vantagens" className="py-20 md:py-28 bg-muted/30">
        <div className="container mx-auto px-4">
          {/* Header */}
          <div className="text-center mb-12 md:mb-16 max-w-3xl mx-auto">
            <span className="text-primary text-sm font-semibold uppercase tracking-wider">Benefícios</span>
            <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-bold text-foreground mt-2 mb-4">
              Vantagens da Assinatura
            </h2>
            <p className="text-muted-foreground text-lg">
              Descubra os benefícios exclusivos para assinantes da coleção Carros de Coleção.
            </p>
          </div>

          {/* Grid */}
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6 max-w-6xl mx-auto">
            {advantages.map((advantage, index) => (
              <div 
                key={index}
                className="group bg-card rounded-xl p-6 border border-border hover:border-primary/30 hover:shadow-md transition-all duration-300"
              >
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
                  <advantage.icon className="w-6 h-6 text-primary" />
                </div>
                <h3 className="font-semibold text-foreground mb-1">{advantage.title}</h3>
                <p className="text-muted-foreground text-sm">{advantage.description}</p>
              </div>
            ))}
          </div>

          {/* CTA */}
          <div className="mt-12 md:mt-16 text-center">
            <div className="inline-block bg-card border border-border rounded-xl px-8 py-6">
              <p className="text-foreground font-medium mb-1">
                Comece já a sua coleção!
              </p>
              <p className="text-muted-foreground text-sm mb-4">
                Primeiro carro por apenas <span className="text-primary font-bold">1,00€</span>
              </p>
              <Button 
                className="bg-orange-500 hover:bg-orange-600 text-white font-bold"
                onClick={() => setIsSubscriptionOpen(true)}
              >
                Subscrever Agora
              </Button>
            </div>
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

export default AdvantagesSection;