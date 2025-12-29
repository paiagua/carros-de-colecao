import { useEffect, useRef, useState } from "react";
import floatingMineral1 from "@/assets/floating-minerals/mineral-1.png";
import floatingMineral2 from "@/assets/floating-minerals/mineral-2.png";
import floatingMineral3 from "@/assets/floating-minerals/mineral-3.png";
import floatingMineral4 from "@/assets/floating-minerals/mineral-4.png";
import floatingMineral5 from "@/assets/floating-minerals/mineral-5.png";
import floatingMineral6 from "@/assets/floating-minerals/mineral-6.png";
import floatingMineral7 from "@/assets/floating-minerals/mineral-7.png";

const minerals = [
  { image: floatingMineral1, name: "Pirite" },
  { image: floatingMineral2, name: "Fluorite" },
  { image: floatingMineral3, name: "Cobre" },
  { image: floatingMineral4, name: "Geodo" },
  { image: floatingMineral5, name: "Galena" },
  { image: floatingMineral6, name: "Quartzo" },
  { image: floatingMineral7, name: "Lazurite" },
];

const MineralsShowcase = () => {
  const [visibleItems, setVisibleItems] = useState<number[]>([]);
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          // Start staggered animation
          minerals.forEach((_, index) => {
            setTimeout(() => {
              setVisibleItems((prev) => [...prev, index]);
            }, index * 150); // 150ms delay between each
          });
          observer.disconnect();
        }
      },
      { threshold: 0.2 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section ref={sectionRef} className="py-8 md:py-12 bg-background">
      <div className="container mx-auto px-4">

        {/* Minerals Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-7 gap-6 md:gap-8">
          {minerals.map((mineral, index) => (
            <div
              key={index}
              className={`flex flex-col items-center transition-all duration-500 ${
                visibleItems.includes(index)
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-8"
              }`}
            >
              <div className="w-full aspect-square flex items-center justify-center">
                <img
                  src={mineral.image}
                  alt={mineral.name}
                  className="w-full h-full object-contain"
                />
              </div>
              
              {/* Name */}
              <p className="mt-4 text-sm md:text-base font-display font-semibold text-foreground uppercase tracking-wide">
                {mineral.name}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default MineralsShowcase;
