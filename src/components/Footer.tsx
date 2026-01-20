import { Button } from "@/components/ui/button";
import { Dialog, DialogContent } from "@/components/ui/dialog";
import { Mail, Phone, Clock, Car } from "lucide-react";
import { useSubscription } from "@/contexts/SubscriptionContext";
import SubscriptionForm from "./SubscriptionForm";
import correioRecordLogo from "@/assets/correio-record-logo.png";
import { trackSubscriptionClick, trackPhoneClick, trackEmailClick, trackScrollToTop } from "@/lib/analytics";

const Footer = () => {
  const { isSubscriptionOpen, setIsSubscriptionOpen } = useSubscription();

  const scrollToTop = () => {
    trackScrollToTop();
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <>
      <footer className="bg-gray-900 text-white">
        <div className="container mx-auto px-4 py-12 md:py-16">
          <div className="grid md:grid-cols-3 gap-8 md:gap-12">
            {/* Brand */}
            <div>
              <div className="flex items-center gap-2 mb-4">
                <Car className="w-6 h-6 text-orange-500" />
                <span className="font-display text-xl uppercase">
                  <span className="font-bold text-orange-500">CARROS</span>
                  <span className="font-bold text-white italic lowercase ml-1">de Coleção</span>
                </span>
              </div>
              <p className="text-gray-400 text-sm mb-6">
                Uma coleção única de miniaturas de carros clássicos à escala 1:60 para descobrir os ícones do automobilismo.
              </p>
              <img src={correioRecordLogo} alt="Correio da Manhã | Record" className="h-10 opacity-80" />
            </div>

            {/* Contact */}
            <div>
              <h3 className="font-semibold mb-4 text-orange-500">Contactos</h3>
              <div className="space-y-3 text-sm text-gray-400">
                <div className="flex items-center gap-3">
                  <Mail className="w-4 h-4" />
                  <a href="mailto:assinaturas@vasp.pt" onClick={() => trackEmailClick()} className="hover:text-white transition-colors">
                    assinaturas@vasp.pt
                  </a>
                </div>
                <div className="flex items-center gap-3">
                  <Phone className="w-4 h-4" />
                  <a href="tel:214337036" onClick={() => trackPhoneClick()} className="hover:text-white transition-colors">
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
              <h3 className="font-semibold mb-4 text-orange-500">Assine Já</h3>
              <p className="text-sm text-gray-400 mb-4">
                Não perca esta oportunidade única de colecionar os carros mais icónicos da história.
              </p>
              <Button 
                className="bg-orange-500 hover:bg-orange-600 text-white font-bold"
                onClick={() => {
                  trackSubscriptionClick('footer');
                  setIsSubscriptionOpen(true);
                }}
              >
                Assinar Agora
              </Button>
            </div>
          </div>

          <div className="border-t border-gray-800 mt-8 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-gray-500">
            <p>© 2025 Carros de Coleção. Todos os direitos reservados.</p>
            <button onClick={scrollToTop} className="hover:text-white transition-colors">
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
