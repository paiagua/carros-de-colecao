import { Button } from "@/components/ui/button";
import { Dialog, DialogContent } from "@/components/ui/dialog";
import { Mail, Phone, Clock, ArrowUp, Gem } from "lucide-react";
import { useSubscription } from "@/contexts/SubscriptionContext";
import SubscriptionForm from "./SubscriptionForm";
import correioLogo from "@/assets/correio-manha-logo.png";
import tvguiaLogo from "@/assets/tvguia-logo.png";

const Footer = () => {
  const { isSubscriptionOpen, setIsSubscriptionOpen } = useSubscription();

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <>
      <footer className="bg-card border-t border-border relative overflow-hidden">
        {/* Decorative elements */}
        <div className="absolute top-20 right-20 w-64 h-64 bg-accent/5 rounded-full blur-3xl" />
        
        <div className="container mx-auto px-4 py-16 relative z-10">
          <div className="text-center space-y-8 max-w-4xl mx-auto">
            <div className="space-y-6 animate-fade-in">
              <div className="flex items-center justify-center gap-4">
                <img 
                  src={correioLogo} 
                  alt="Correio da Manhã" 
                  className="h-10 md:h-12 object-contain opacity-80 hover:opacity-100 transition-opacity duration-300"
                />
                <img 
                  src={tvguiaLogo} 
                  alt="TV Guia" 
                  className="h-10 md:h-12 object-contain opacity-80 hover:opacity-100 transition-opacity duration-300"
                />
              </div>
              
              <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground">
                <span className="text-accent">Minerais</span> da Terra
              </h2>
              
              <p className="text-lg text-muted-foreground leading-relaxed">
                Uma coleção de 120 minerais autênticos para descobrir os segredos da mineralogia.
              </p>

              <Button 
                variant="cta" 
                size="lg" 
                onClick={() => setIsSubscriptionOpen(true)}
              >
                Subscrever Coleção Agora
              </Button>
            </div>

            <div className="border-t border-border pt-10 mt-10">
              <div className="grid md:grid-cols-2 gap-8 text-left mb-10">
                <div className="bg-secondary/50 p-6 rounded-xl border border-border">
                  <h3 className="font-semibold text-lg text-foreground mb-4 flex items-center gap-2">
                    <Phone className="w-5 h-5 text-accent" />
                    Contactos
                  </h3>
                  <div className="space-y-3 text-muted-foreground text-sm">
                    <div className="flex items-center gap-3">
                      <Mail className="w-4 h-4 text-accent" />
                      <a href="mailto:assinaturas@vasp.pt" className="hover:text-accent transition-colors">
                        assinaturas@vasp.pt
                      </a>
                    </div>
                    <div className="flex items-center gap-3">
                      <Phone className="w-4 h-4 text-accent" />
                      <a href="tel:214337036" className="hover:text-accent transition-colors">
                        21 433 70 36
                      </a>
                    </div>
                    <div className="flex items-center gap-3">
                      <Clock className="w-4 h-4 text-accent" />
                      <span>Dias úteis: 9h-13h e 14h-18h</span>
                    </div>
                  </div>
                </div>
                
                <div className="bg-secondary/50 p-6 rounded-xl border border-border">
                  <h3 className="font-semibold text-lg text-foreground mb-4 flex items-center gap-2">
                    <Gem className="w-5 h-5 text-accent" />
                    Informação da Coleção
                  </h3>
                  <div className="space-y-2 text-muted-foreground text-sm">
                    <div className="flex items-center gap-2">
                      <div className="w-2 h-2 bg-accent rounded-full" />
                      <p>120 minerais autênticos</p>
                    </div>
                    <div className="flex items-center gap-2">
                      <div className="w-2 h-2 bg-accent rounded-full" />
                      <p>Fascículos com curiosidades e experiências</p>
                    </div>
                    <div className="flex items-center gap-2">
                      <div className="w-2 h-2 bg-accent rounded-full" />
                      <p>Distribuição semanal aos sábados</p>
                    </div>
                    <div className="flex items-center gap-2">
                      <div className="w-2 h-2 bg-accent rounded-full" />
                      <p>Envio gratuito para assinantes</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="pt-6 border-t border-border">
                <Button
                  onClick={scrollToTop}
                  variant="outline"
                  size="sm"
                  className="mb-6 group"
                >
                  <ArrowUp className="w-4 h-4 mr-2 group-hover:animate-bounce" />
                  Voltar ao Topo
                </Button>
                
                <p className="text-sm text-muted-foreground mb-2">
                  © 2025 Minerais da Terra | Correio da Manhã. Todos os direitos reservados.
                </p>
                <p className="text-xs text-muted-foreground/60">
                  Preços válidos para Portugal Continental. IVA incluído à taxa legal em vigor.
                </p>
              </div>
            </div>
          </div>
        </div>
      </footer>

      <Dialog open={isSubscriptionOpen} onOpenChange={setIsSubscriptionOpen}>
        <DialogContent className="max-w-4xl w-full h-[100dvh] md:h-auto md:max-h-[85vh] p-4 md:p-6 m-0 md:m-4 max-w-full md:max-w-4xl rounded-none md:rounded-lg overflow-hidden flex flex-col">
          <SubscriptionForm onClose={() => setIsSubscriptionOpen(false)} />
        </DialogContent>
      </Dialog>
    </>
  );
};

export default Footer;