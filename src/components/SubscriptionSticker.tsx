import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Dialog, DialogContent } from "@/components/ui/dialog";
import { X } from "lucide-react";
import { useSubscription } from "@/contexts/SubscriptionContext";
import SubscriptionForm from "./SubscriptionForm";

const SubscriptionSticker = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [isDismissed, setIsDismissed] = useState(false);
  const { isSubscriptionOpen, setIsSubscriptionOpen } = useSubscription();

  useEffect(() => {
    const handleScroll = () => {
      if (isDismissed) return;
      
      const scrollHeight = document.documentElement.scrollHeight - window.innerHeight;
      const scrollPercent = (window.scrollY / scrollHeight) * 100;
      
      setIsVisible(scrollPercent > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [isDismissed]);

  if (!isVisible || isDismissed) return null;

  return (
    <>
      <div className="fixed bottom-6 right-6 z-50 animate-scale-in">
        <div className="relative bg-gradient-to-br from-accent via-accent to-accent/90 text-accent-foreground rounded-2xl shadow-2xl border-2 border-accent/30 overflow-hidden max-w-sm">
          {/* Decorative glow */}
          <div className="absolute inset-0 bg-gradient-to-br from-white/10 to-transparent pointer-events-none" />
          
          {/* Close button */}
          <button
            onClick={() => setIsDismissed(true)}
            className="absolute top-3 right-3 w-6 h-6 rounded-full bg-black/20 hover:bg-black/30 flex items-center justify-center transition-colors z-10"
          >
            <X className="w-4 h-4" />
          </button>

          <div className="p-6 relative">
            <div className="mb-4 pr-6">
              <h3 className="font-display text-xl font-bold mb-1">
                Subscreva Agora
              </h3>
              <p className="text-sm text-accent-foreground/90">
                Receba minerais autênticos + fascículos semanais
              </p>
            </div>

            <Button
              onClick={() => setIsSubscriptionOpen(true)}
              className="w-full bg-white text-accent hover:bg-white/90 font-semibold shadow-lg"
            >
              Começar Coleção
            </Button>
          </div>
        </div>
      </div>

      <Dialog open={isSubscriptionOpen} onOpenChange={setIsSubscriptionOpen}>
        <DialogContent className="max-w-4xl w-full h-[100dvh] md:h-auto md:max-h-[85vh] p-4 md:p-6 m-0 md:m-4 max-w-full md:max-w-4xl rounded-none md:rounded-lg overflow-hidden flex flex-col">
          <SubscriptionForm onClose={() => setIsSubscriptionOpen(false)} />
        </DialogContent>
      </Dialog>
    </>
  );
};

export default SubscriptionSticker;
