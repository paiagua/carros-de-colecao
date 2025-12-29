import { Gift, Truck, Calendar, Gem, Award, Shield, Clock, XCircle, Sparkles, BookOpen } from "lucide-react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Dialog, DialogContent } from "@/components/ui/dialog";
import { useSubscription } from "@/contexts/SubscriptionContext";
import SubscriptionForm from "./SubscriptionForm";

const advantages = [
  { icon: Gem, title: "120 Minerais Autênticos", description: "Exemplares genuínos selecionados por especialistas", highlight: true },
  { icon: Truck, title: "Envio Gratuito", description: "Todos os custos de envio são suportados pelo editor" },
  { icon: Calendar, title: "Entrega Mensal", description: "Receba as entregas na sua morada" },
  { icon: BookOpen, title: "Fascículos Completos", description: "Com curiosidades, experiências e imagens magníficas" },
  { icon: Gift, title: "Arquivadores Incluídos", description: "Caixas para guardar e preservar os minerais" },
  { icon: Shield, title: "Garantia de Qualidade", description: "Seleção por especialistas em geologia" },
  { icon: Clock, title: "Não Perde Nenhum", description: "Todos os minerais chegam à sua morada" },
  { icon: XCircle, title: "Cancelamento Flexível", description: "Cancele quando desejar, sem penalizações" }
];

const AdvantagesSection = () => {
  const { isSubscriptionOpen, setIsSubscriptionOpen } = useSubscription();

  return (
    <>
      <section id="vantagens" className="py-24 bg-background relative overflow-hidden">
        {/* Decorative elements */}
        <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-accent/50 to-transparent" />
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-accent/5 rounded-full blur-3xl animate-float" />
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-16 items-end mb-16 animate-fade-in">
            {/* Left side - Title */}
            <div className="lg:col-span-7 text-left">
              <div className="inline-flex items-center text-accent text-sm md:text-base font-semibold mb-3">
                <span className="uppercase tracking-wider">Benefícios Exclusivos</span>
              </div>
              <h2 className="font-display text-4xl sm:text-5xl md:text-7xl font-bold text-foreground leading-[0.9]">
                Vantagens da <span className="text-accent">Assinatura</span>
              </h2>
            </div>
            
            {/* Right side - Description */}
            <div className="lg:col-span-5 lg:pb-2">
              <div className="lg:border-l-2 border-accent/30 lg:pl-8">
                <p className="text-base sm:text-lg md:text-xl text-muted-foreground leading-relaxed">
                  Descubra todos os <span className="text-foreground underline decoration-accent decoration-2 underline-offset-4">benefícios exclusivos</span> para assinantes da coleção <span className="text-foreground underline decoration-accent decoration-2 underline-offset-4">Minerais da Terra</span>
                </p>
              </div>
            </div>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {advantages.map((advantage, index) => (
              <Card 
                key={index}
                className="group p-6 bg-card border-border hover:border-accent/30 transition-all duration-300 hover:-translate-y-1 animate-scale-in relative overflow-hidden"
                style={{ animationDelay: `${index * 0.05}s` }}
              >
                {advantage.highlight && (
                  <div className="absolute -top-3 -right-3 bg-cta text-cta-foreground text-xs font-bold px-3 py-1 rounded-full shadow-lg">
                    TOP
                  </div>
                )}

                <div className="relative z-10 flex gap-4">
                  <div className="w-14 h-14 flex-shrink-0 bg-accent/10 rounded-xl flex items-center justify-center group-hover:bg-accent/20 transition-colors duration-300">
                    <advantage.icon className="w-7 h-7 text-accent" />
                  </div>
                  
                  <div className="flex-1 text-left">
                    <h3 className="font-bold text-base mb-1 text-foreground">
                      {advantage.title}
                    </h3>
                    <p className="text-muted-foreground text-sm leading-relaxed">
                      {advantage.description}
                    </p>
                  </div>
                </div>
              </Card>
            ))}
          </div>

          {/* Bottom CTA */}
          <div className="mt-16 text-center animate-fade-in">
            <div className="inline-block bg-card border border-border rounded-xl px-10 py-8">
              <p className="text-lg font-semibold text-foreground mb-2">
                Comece já a sua coleção de minerais!
              </p>
              <p className="text-sm text-muted-foreground mb-5">
                Primeiro mineral <span className="text-accent font-bold">OURO</span> por apenas <span className="text-accent font-bold text-xl">1,00€</span>
              </p>
              <Button 
                variant="cta"
                onClick={() => setIsSubscriptionOpen(true)}
                className="px-8"
              >
                Subscrever Agora
              </Button>
            </div>
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

export default AdvantagesSection;