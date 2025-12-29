import { Button } from "@/components/ui/button";
import { Dialog, DialogContent } from "@/components/ui/dialog";
import { Mail, Phone, Clock, Car } from "lucide-react";
import { useSubscription } from "@/contexts/SubscriptionContext";
import SubscriptionForm from "./SubscriptionForm";
import correioLogo from "@/assets/correio-manha-logo.png";
import recordLogo from "@/assets/record-logo.png";

const Footer = () => {
  const { isSubscriptionOpen, setIsSubscriptionOpen } = useSubscription();

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <>
      <footer className="bg-foreground text-background">
        <div className="container mx-auto px-4 py-12 md:py-16">
          <div className="grid md:grid-cols-3 gap-8 md:gap-12">
            {/* Brand */}
            <div>
              <div className="flex items-center gap-2 mb-4">
                <Car className="w-6 h-6" />
                <span className="font-display text-xl font-bold">Carros de Coleção</span>
              </div>
              <p className="text-background/70 text-sm mb-6">
                Uma coleção de miniaturas de carros clássicos para descobrir os ícones do automobilismo.
              </p>
              <div className="flex items-center gap-4">
                <img src={correioLogo} alt="Correio da Manhã" className="h-8 brightness-0 invert opacity-70" />
                <img src={recordLogo} alt="Record" className="h-8 opacity-70" />
              </div>
            </div>

            {/* Contact */}
            <div>
              <h3 className="font-semibold mb-4">Contactos</h3>
              <div className="space-y-3 text-sm text-background/70">
                <div className="flex items-center gap-3">
                  <Mail className="w-4 h-4" />
                  <a href="mailto:assinaturas@vasp.pt" className="hover:text-background transition-colors">
                    assinaturas@vasp.pt
                  </a>
                </div>
                <div className="flex items-center gap-3">
                  <Phone className="w-4 h-4" />
                  <a href="tel:214337036" className="hover:text-background transition-colors">
                    21 433 70 36
                  </a>
                </div>
                <div className="flex items-center gap-3">
                  <Clock className="w-4 h-4" />
                  <span>Dias úteis: 9h-13h e 14h-18h</span>
                </div>
              </div>
            </div>

            {/* CTA */}
            <div>
              <h3 className="font-semibold mb-4">Assine Já</h3>
              <p className="text-sm text-background/70 mb-4">
                Não perca esta oportunidade única de colecionar os carros mais icónicos da história.
              </p>
              <Button 
                variant="outline"
                className="border-background/30 text-background hover:bg-background hover:text-foreground"
                onClick={() => setIsSubscriptionOpen(true)}
              >
                Subscrever Agora
              </Button>
            </div>
          </div>

          <div className="border-t border-background/20 mt-8 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-background/60">
            <p>© 2025 Carros de Coleção. Todos os direitos reservados.</p>
            <button onClick={scrollToTop} className="hover:text-background transition-colors">
              Voltar ao topo ↑
            </button>
          </div>
        </div>
      </footer>

      <Dialog open={isSubscriptionOpen} onOpenChange={setIsSubscriptionOpen}>
        <DialogContent className="max-w-4xl w-full h-[100dvh] md:h-auto md:max-h-[85vh] p-4 md:p-6 m-0 md:m-4 max-w-full md:max-w-4xl rounded-none md:rounded-xl overflow-hidden flex flex-col">
          <SubscriptionForm onClose={() => setIsSubscriptionOpen(false)} />
        </DialogContent>
      </Dialog>
    </>
  );
};

export default Footer;