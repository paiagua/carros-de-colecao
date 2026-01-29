import { useState, useEffect } from "react";
import { Car } from "lucide-react";
import correioRecordLogo from "@/assets/correio-record-logo.png";

interface SplashScreenProps {
  onComplete: () => void;
}

const SplashScreen = ({ onComplete }: SplashScreenProps) => {
  const [countdown, setCountdown] = useState(3);
  const [phase, setPhase] = useState(0);
  const [isExiting, setIsExiting] = useState(false);

  useEffect(() => {
    // Phase transitions for content reveal
    const phaseTimers = [
      setTimeout(() => setPhase(1), 300),   // Show logo
      setTimeout(() => setPhase(2), 1000),  // Show title
      setTimeout(() => setPhase(3), 1800),  // Show tagline
      setTimeout(() => setPhase(4), 2600),  // Start countdown
    ];

    // Countdown timer
    const countdownTimer = setInterval(() => {
      setCountdown((prev) => {
        if (prev <= 1) {
          clearInterval(countdownTimer);
          return 0;
        }
        return prev - 1;
      });
    }, 1000);

    // Exit after countdown
    const exitTimer = setTimeout(() => {
      setIsExiting(true);
    }, 5800);

    const completeTimer = setTimeout(() => {
      onComplete();
    }, 6500);

    return () => {
      phaseTimers.forEach(clearTimeout);
      clearInterval(countdownTimer);
      clearTimeout(exitTimer);
      clearTimeout(completeTimer);
    };
  }, [onComplete]);

  return (
    <div
      className={`fixed inset-0 z-[9999] flex flex-col items-center justify-center bg-gray-900 transition-all duration-700 ${
        isExiting ? "opacity-0 scale-110" : "opacity-100 scale-100"
      }`}
    >
      {/* Animated background effects */}
      <div className="absolute inset-0 overflow-hidden">
        {/* Moving light beams */}
        <div className="absolute top-0 left-1/4 w-px h-full bg-gradient-to-b from-transparent via-orange-500/20 to-transparent animate-pulse" />
        <div className="absolute top-0 right-1/3 w-px h-full bg-gradient-to-b from-transparent via-orange-500/10 to-transparent animate-pulse" style={{ animationDelay: "0.5s" }} />
        
        {/* Floating particles */}
        {[...Array(30)].map((_, i) => (
          <div
            key={i}
            className="absolute w-1 h-1 bg-orange-500/40 rounded-full"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animation: `pulse ${2 + Math.random() * 3}s ease-in-out infinite`,
              animationDelay: `${Math.random() * 2}s`,
            }}
          />
        ))}
      </div>

      {/* Radial glow effect */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-orange-500/15 via-gray-900 to-gray-900" />

      {/* Content */}
      <div className="relative z-10 text-center px-4 max-w-4xl mx-auto">
        {/* Correio da Manhã | Record Logo */}
        <div
          className={`mb-8 transition-all duration-700 ${
            phase >= 1 ? "opacity-100 scale-100 translate-y-0" : "opacity-0 scale-90 translate-y-4"
          }`}
        >
          <img 
            src={correioRecordLogo} 
            alt="Correio da Manhã | Record" 
            className="h-10 md:h-14 object-contain mx-auto"
          />
          <p className="text-white/50 text-xs md:text-sm mt-3 uppercase tracking-[0.3em]">apresenta</p>
        </div>

        {/* Main title with glow effect */}
        <div
          className={`relative transition-all duration-1000 ${
            phase >= 2 ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          {/* Glow behind text */}
          <div className="absolute inset-0 blur-3xl bg-orange-500/30 scale-150" />
          
          <h1 className="relative font-display uppercase">
            <span
              className="block text-6xl sm:text-7xl md:text-8xl lg:text-9xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-orange-400 via-orange-500 to-orange-600"
              style={{
                textShadow: "0 0 60px rgba(249,115,22,0.5)",
                letterSpacing: "-0.02em",
              }}
            >
              CARROS
            </span>
            <span
              className="block text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white italic -mt-2"
              style={{
                textShadow: "2px 2px 0 rgba(249,115,22,0.5)",
              }}
            >
              de coleção
            </span>
          </h1>
        </div>

        {/* Taglines */}
        <div
          className={`mt-10 transition-all duration-700 ${
            phase >= 3 ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          <div className="flex flex-col md:flex-row items-center justify-center gap-3 md:gap-6">
            <span className="text-sm md:text-base text-white/80 font-semibold uppercase tracking-widest">
              Coleções Exclusivas
            </span>
            <span className="hidden md:block text-orange-500 text-2xl">•</span>
            <span className="text-sm md:text-base text-orange-400 font-semibold uppercase tracking-widest">
              Réplicas Oficiais
            </span>
          </div>
          
          <div className="mt-6 flex justify-center gap-2">
            <div className="h-1 w-12 bg-orange-500 rounded-full" />
            <div className="h-1 w-6 bg-orange-500/50 rounded-full" />
            <div className="h-1 w-3 bg-orange-500/30 rounded-full" />
          </div>
        </div>

        {/* Countdown */}
        <div
          className={`mt-12 transition-all duration-500 ${
            phase >= 4 ? "opacity-100 scale-100" : "opacity-0 scale-50"
          }`}
        >
          <div className="relative inline-flex items-center justify-center">
            {/* Pulsing ring */}
            <div className="absolute inset-0 w-32 h-32 md:w-40 md:h-40 rounded-full border-4 border-orange-500/30 animate-ping" style={{ animationDuration: "1s" }} />
            <div className="absolute inset-0 w-32 h-32 md:w-40 md:h-40 rounded-full border-2 border-orange-500/50" />
            
            {/* Countdown number */}
            <div className="w-32 h-32 md:w-40 md:h-40 rounded-full bg-gradient-to-br from-gray-800 to-gray-900 border-4 border-orange-500 flex items-center justify-center shadow-2xl shadow-orange-500/30">
              <span 
                className="text-6xl md:text-7xl font-bold text-orange-500 transition-all duration-300"
                style={{ textShadow: "0 0 30px rgba(249,115,22,0.6)" }}
                key={countdown}
              >
                {countdown}
              </span>
            </div>
          </div>
          
          <p className="mt-6 text-white/60 text-sm uppercase tracking-widest animate-pulse">
            A preparar a sua experiência...
          </p>
        </div>

        {/* Car icon floating */}
        <div
          className={`absolute -bottom-20 left-1/2 -translate-x-1/2 transition-all duration-1000 ${
            phase >= 2 ? "opacity-30" : "opacity-0"
          }`}
        >
          <Car className="w-48 h-48 text-orange-500/20" />
        </div>
      </div>

      {/* Bottom gradient */}
      <div className="absolute bottom-0 left-0 right-0 h-40 bg-gradient-to-t from-black/60 to-transparent" />
      
      {/* Top accent line */}
      <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-orange-500 to-transparent" />
    </div>
  );
};

export default SplashScreen;
