import { useState, useEffect } from "react";
import { Trophy, Gem, BookOpen, ChevronRight } from "lucide-react";
import magazine1 from "@/assets/magazines/magazine-1.png";
import magazine2 from "@/assets/magazines/magazine-2.png";
import magazine3 from "@/assets/magazines/magazine-3.png";
import magazine4 from "@/assets/magazines/magazine-4.png";
import magazine5 from "@/assets/magazines/magazine-5.png";

const magazines = [magazine1, magazine2, magazine3, magazine4, magazine5];

const ReplicasSection = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  // Auto-advance slides
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % magazines.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="py-16 md:py-24 bg-gray-50 relative overflow-hidden">
      {/* Background image - very large, behind everything */}
      <div className="absolute inset-0 pointer-events-none">
        {magazines.map((img, index) => (
          <div
            key={index}
            className={`absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 transition-all duration-1000 ease-in-out ${
              index === currentSlide
                ? "opacity-100 scale-100"
                : "opacity-0 scale-90"
            }`}
          >
            <img
              src={img}
              alt=""
              className="w-[800px] md:w-[1200px] lg:w-[1600px] xl:w-[2000px] max-w-none object-contain opacity-10"
            />
          </div>
        ))}
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left - Image Slider */}
          <div className="relative h-[550px] md:h-[650px] lg:h-[750px] w-full flex items-center justify-center">
            {magazines.map((img, index) => (
              <div
                key={index}
                className={`absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 transition-all duration-700 ease-in-out ${
                  index === currentSlide
                    ? "opacity-100 scale-100 z-10"
                    : index === (currentSlide - 1 + magazines.length) % magazines.length
                    ? "opacity-20 scale-50 -translate-x-[130%] z-0"
                    : index === (currentSlide + 1) % magazines.length
                    ? "opacity-20 scale-50 translate-x-[30%] z-0"
                    : "opacity-0 scale-40 z-0"
                }`}
              >
                <img
                  src={img}
                  alt={`Fascículo ${index + 1}`}
                  className="w-[350px] md:w-[500px] lg:w-[600px] max-h-[500px] md:max-h-[600px] lg:max-h-[700px] object-contain rounded-xl shadow-2xl"
                />
              </div>
            ))}
            
            {/* Slide indicators */}
            <div className="absolute bottom-0 left-1/2 -translate-x-1/2 flex gap-2">
              {magazines.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentSlide(index)}
                  className={`w-3 h-3 rounded-full transition-all duration-300 ${
                    index === currentSlide
                      ? "bg-orange-500 w-8"
                      : "bg-gray-300 hover:bg-gray-400"
                  }`}
                />
              ))}
            </div>
          </div>

          {/* Right - Content */}
          <div className="space-y-6">
            <h2 className="text-2xl md:text-3xl lg:text-4xl text-gray-900 leading-tight">
              Descubra as histórias e curiosidades das réplicas oficiais dos carros que deixaram a sua marca na{" "}
              <span className="text-orange-500">história do automóvel.</span>
            </h2>

            <p className="text-gray-700 text-base md:text-lg leading-relaxed">
              Modelos que fizeram parte de momentos inesquecíveis, de viagens em família, de aventuras na estrada e de sonhos sobre rodas.
            </p>

            <div className="grid gap-3">
              <div className="group flex items-center gap-5 bg-white rounded-xl p-5 border border-gray-100 transition-all duration-300 hover:shadow-lg hover:border-orange-200 cursor-default">
                <div className="w-11 h-11 bg-orange-50 rounded-full flex items-center justify-center flex-shrink-0 group-hover:bg-orange-100 transition-colors duration-300">
                  <Trophy className="w-5 h-5 text-orange-500" strokeWidth={1.5} />
                </div>
                <div className="flex-1">
                  <span className="text-gray-800 font-medium">Réplicas oficiais dos modelos mais emblemáticos</span>
                </div>
                <ChevronRight className="w-4 h-4 text-gray-300 group-hover:text-orange-400 group-hover:translate-x-1 transition-all duration-300" />
              </div>
              
              <div className="group flex items-center gap-5 bg-white rounded-xl p-5 border border-gray-100 transition-all duration-300 hover:shadow-lg hover:border-orange-200 cursor-default">
                <div className="w-11 h-11 bg-gray-50 rounded-full flex items-center justify-center flex-shrink-0 group-hover:bg-orange-50 transition-colors duration-300">
                  <Gem className="w-5 h-5 text-gray-600 group-hover:text-orange-500 transition-colors duration-300" strokeWidth={1.5} />
                </div>
                <div className="flex-1">
                  <span className="text-gray-800 font-medium">Miniaturas pormenorizadas com atenção ao detalhe</span>
                </div>
                <ChevronRight className="w-4 h-4 text-gray-300 group-hover:text-orange-400 group-hover:translate-x-1 transition-all duration-300" />
              </div>
              
              <div className="group flex items-center gap-5 bg-white rounded-xl p-5 border border-gray-100 transition-all duration-300 hover:shadow-lg hover:border-orange-200 cursor-default">
                <div className="w-11 h-11 bg-orange-50 rounded-full flex items-center justify-center flex-shrink-0 group-hover:bg-orange-100 transition-colors duration-300">
                  <BookOpen className="w-5 h-5 text-orange-500" strokeWidth={1.5} />
                </div>
                <div className="flex-1">
                  <span className="text-gray-800 font-medium">Fotografias e infografias da história e design</span>
                </div>
                <ChevronRight className="w-4 h-4 text-gray-300 group-hover:text-orange-400 group-hover:translate-x-1 transition-all duration-300" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ReplicasSection;