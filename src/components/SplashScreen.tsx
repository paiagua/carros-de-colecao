import { useState, useEffect } from "react";
import { Car } from "lucide-react";

interface SplashScreenProps {
  onComplete: () => void;
}

const SplashScreen = ({ onComplete }: SplashScreenProps) => {
  const [phase, setPhase] = useState(0);
  const [isExiting, setIsExiting] = useState(false);

  useEffect(() => {
    // Phase transitions
    const timers = [
      setTimeout(() => setPhase(1), 500),   // Show first line
      setTimeout(() => setPhase(2), 1500),  // Show second line
      setTimeout(() => setPhase(3), 2500),  // Show tagline
      setTimeout(() => setPhase(4), 3500),  // Pulse effect
      setTimeout(() => {
        setIsExiting(true);
      }, 4500),
      setTimeout(() => {
        onComplete();
      }, 5200),
    ];

    return () => timers.forEach(clearTimeout);
  }, [onComplete]);

  return (
    <div
      className={`fixed inset-0 z-[9999] flex flex-col items-center justify-center bg-gray-900 transition-all duration-700 ${
        isExiting ? "opacity-0 scale-110" : "opacity-100 scale-100"
      }`}
    >
      {/* Animated background particles */}
      <div className="absolute inset-0 overflow-hidden">
        {[...Array(20)].map((_, i) => (
          <div
            key={i}
            className="absolute w-1 h-1 bg-orange-500/30 rounded-full animate-pulse"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 2}s`,
              animationDuration: `${2 + Math.random() * 3}s`,
            }}
          />
        ))}
      </div>

      {/* Radial glow */}
      <div className="absolute inset-0 bg-gradient-radial from-orange-500/10 via-transparent to-transparent" />

      {/* Content */}
      <div className="relative z-10 text-center px-4">
        {/* Logo/Icon */}
        <div
          className={`mb-8 transition-all duration-700 ${
            phase >= 0 ? "opacity-100 scale-100" : "opacity-0 scale-50"
          }`}
        >
          <div className="relative inline-flex items-center justify-center">
            <div className="absolute inset-0 bg-orange-500/20 rounded-full blur-2xl scale-150 animate-pulse" />
            <div className="relative w-20 h-20 md:w-28 md:h-28 bg-gradient-to-br from-orange-500 to-orange-600 rounded-full flex items-center justify-center border-4 border-white/20 shadow-2xl">
              <Car className="w-10 h-10 md:w-14 md:h-14 text-white" />
            </div>
          </div>
        </div>

        {/* Main title - CARROS */}
        <h1
          className={`font-display uppercase transition-all duration-700 ${
            phase >= 1 ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          <span
            className="block text-6xl sm:text-7xl md:text-8xl lg:text-9xl font-bold text-orange-500"
            style={{
              textShadow: "3px 3px 0 rgba(0,0,0,0.3)",
              letterSpacing: "-0.02em",
            }}
          >
            CARROS
          </span>
        </h1>

        {/* Subtitle - de coleção */}
        <h2
          className={`font-display transition-all duration-700 delay-100 ${
            phase >= 2 ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          <span
            className="block text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white italic -mt-2"
            style={{
              textShadow: "2px 2px 0 rgba(249,115,22,0.5)",
            }}
          >
            de coleção
          </span>
        </h2>

        {/* Divider */}
        <div
          className={`mt-8 flex justify-center gap-2 transition-all duration-500 ${
            phase >= 2 ? "opacity-100 scale-100" : "opacity-0 scale-0"
          }`}
        >
          <div className="h-1.5 w-16 bg-orange-500 rounded-full" />
          <div className="h-1.5 w-8 bg-orange-500/50 rounded-full" />
          <div className="h-1.5 w-4 bg-orange-500/30 rounded-full" />
        </div>

        {/* Taglines */}
        <div
          className={`mt-10 space-y-3 transition-all duration-700 ${
            phase >= 3 ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          <p className="text-lg md:text-xl text-white/90 font-semibold uppercase tracking-widest">
            Coleções Exclusivas
          </p>
          <p className="text-base md:text-lg text-orange-400 font-medium uppercase tracking-wider">
            Réplicas Oficiais
          </p>
        </div>

        {/* Pulsing indicator */}
        <div
          className={`mt-12 transition-all duration-500 ${
            phase >= 4 ? "opacity-100" : "opacity-0"
          }`}
        >
          <div className="flex items-center justify-center gap-2">
            <div className="w-2 h-2 bg-orange-500 rounded-full animate-bounce" style={{ animationDelay: "0s" }} />
            <div className="w-2 h-2 bg-orange-500 rounded-full animate-bounce" style={{ animationDelay: "0.15s" }} />
            <div className="w-2 h-2 bg-orange-500 rounded-full animate-bounce" style={{ animationDelay: "0.3s" }} />
          </div>
        </div>
      </div>

      {/* Bottom gradient */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-black/50 to-transparent" />
    </div>
  );
};

export default SplashScreen;
