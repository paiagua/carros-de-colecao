import { useState, useEffect } from "react";
import { X } from "lucide-react";
import { useSubscription } from "@/contexts/SubscriptionContext";
import { trackSubscriptionClick } from "@/lib/analytics";
import { cars } from "@/data/minerals";

const SubscriptionSticker = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [isDismissed, setIsDismissed] = useState(false);
  const { setIsSubscriptionOpen } = useSubscription();

  // Get first car for display
  const firstCar = cars[0];

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
      {/* Close button */}
      <button
        onClick={(e) => {
          e.stopPropagation();
          setIsDismissed(true);
        }}
        className="absolute -top-2 -right-2 w-7 h-7 rounded-full bg-white shadow-lg hover:bg-gray-100 flex items-center justify-center transition-colors z-10 border border-gray-200"
      >
        <X className="w-4 h-4 text-gray-600" />
      </button>

      {/* Dark badge - "Por apenas" style */}
      <button
        onClick={() => {
          trackSubscriptionClick('floating_sticker');
          setIsSubscriptionOpen(true);
        }}
        className="group relative cursor-pointer transition-transform hover:scale-105"
      >
        <div className="bg-gradient-to-br from-gray-800 via-gray-900 to-black rounded-xl px-6 py-4 shadow-2xl border border-gray-700">
          <div className="flex flex-col items-center text-center">
            <span className="text-accent text-3xl font-bold">
              5,95€
            </span>
            <span className="text-white/80 text-xs font-medium tracking-wider uppercase mt-1">
              Por Carro
            </span>
          </div>
        </div>
      </button>
    </div>
  );
};

export default SubscriptionSticker;
