import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { X } from "lucide-react";
import { useSubscription } from "@/contexts/SubscriptionContext";
import { trackSubscriptionClick } from "@/lib/analytics";

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
              Assine Agora
            </h3>
            <p className="text-sm text-accent-foreground/90">
              Receba carros de coleção + fascículos semanais
            </p>
          </div>

          <Button
            onClick={() => {
              trackSubscriptionClick('floating_sticker');
              setIsSubscriptionOpen(true);
            }}
            className="w-full bg-white text-accent hover:bg-white/90 font-semibold shadow-lg"
          >
            Começar Coleção
          </Button>
        </div>
      </div>
    </div>
  );
};

export default SubscriptionSticker;
