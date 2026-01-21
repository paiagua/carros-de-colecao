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
        onClick={() => setIsDismissed(true)}
        className="absolute -top-2 -right-2 w-7 h-7 rounded-full bg-white shadow-lg hover:bg-gray-100 flex items-center justify-center transition-colors z-10 border border-gray-200"
      >
        <X className="w-4 h-4 text-gray-600" />
      </button>

      {/* Circular badge */}
      <button
        onClick={() => {
          trackSubscriptionClick('floating_sticker');
          setIsSubscriptionOpen(true);
        }}
        className="group relative w-32 h-32 rounded-full cursor-pointer transition-transform hover:scale-110"
      >
        {/* Outer white ring */}
        <div className="absolute inset-0 rounded-full bg-white shadow-2xl" />
        
        {/* Orange inner circle with gradient */}
        <div className="absolute inset-2 rounded-full bg-gradient-to-br from-accent via-accent to-orange-600 shadow-inner" />
        
        {/* Inner white ring */}
        <div className="absolute inset-4 rounded-full border-2 border-white/40" />
        
        {/* Content */}
        <div className="absolute inset-0 flex flex-col items-center justify-center text-white">
          <span className="text-[10px] font-medium tracking-wider uppercase opacity-90">
            Cada Carro
          </span>
          <span className="text-sm font-bold mt-0.5 text-center px-2 leading-tight">
            {firstCar.title}
          </span>
          <span className="text-lg font-bold mt-1">
            {firstCar.price}
          </span>
        </div>
      </button>
    </div>
  );
};

export default SubscriptionSticker;
