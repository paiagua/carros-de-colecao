import { useState, useEffect } from "react";
import { Award, Search, Image, Car, Sparkles } from "lucide-react";
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

            <div className="grid gap-4">
              <div className="group flex items-center gap-4 bg-gradient-to-r from-orange-50 to-amber-50 rounded-2xl p-5 border border-orange-100 transition-all duration-500 hover:shadow-xl hover:shadow-orange-200/50 hover:border-orange-300 hover:scale-[1.03] hover:-translate-y-1 cursor-default">
                <div className="relative w-14 h-14 bg-gradient-to-br from-orange-500 to-orange-600 rounded-2xl flex items-center justify-center flex-shrink-0 shadow-lg shadow-orange-500/40 group-hover:scale-110 group-hover:rotate-6 transition-all duration-500">
                  <Award className="w-7 h-7 text-white" />
                  <div className="absolute -top-1 -right-1 w-4 h-4 bg-amber-400 rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <Sparkles className="w-2.5 h-2.5 text-white" />
                  </div>
                </div>
                <div className="flex-1">
                  <span className="text-gray-800 font-semibold block">Réplicas Oficiais</span>
                  <span className="text-gray-500 text-sm">Modelos emblemáticos do mundo automóvel</span>
                </div>
                <Car className="w-5 h-5 text-orange-300 opacity-0 group-hover:opacity-100 group-hover:translate-x-0 -translate-x-2 transition-all duration-300" />
              </div>
              
              <div className="group flex items-center gap-4 bg-gradient-to-r from-slate-50 to-gray-50 rounded-2xl p-5 border border-gray-200 transition-all duration-500 hover:shadow-xl hover:shadow-gray-200/50 hover:border-orange-300 hover:scale-[1.03] hover:-translate-y-1 cursor-default">
                <div className="relative w-14 h-14 bg-gradient-to-br from-gray-700 to-gray-900 rounded-2xl flex items-center justify-center flex-shrink-0 shadow-lg group-hover:scale-110 group-hover:-rotate-6 transition-all duration-500">
                  <Search className="w-7 h-7 text-white" />
                  <div className="absolute -top-1 -right-1 w-4 h-4 bg-orange-500 rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <Sparkles className="w-2.5 h-2.5 text-white" />
                  </div>
                </div>
                <div className="flex-1">
                  <span className="text-gray-800 font-semibold block">Miniaturas Detalhadas</span>
                  <span className="text-gray-500 text-sm">Atenção pormenorizada a cada detalhe</span>
                </div>
                <Car className="w-5 h-5 text-gray-300 opacity-0 group-hover:opacity-100 group-hover:translate-x-0 -translate-x-2 transition-all duration-300" />
              </div>
              
              <div className="group flex items-center gap-4 bg-gradient-to-r from-orange-50 to-amber-50 rounded-2xl p-5 border border-orange-100 transition-all duration-500 hover:shadow-xl hover:shadow-orange-200/50 hover:border-orange-300 hover:scale-[1.03] hover:-translate-y-1 cursor-default">
                <div className="relative w-14 h-14 bg-gradient-to-br from-orange-500 to-orange-600 rounded-2xl flex items-center justify-center flex-shrink-0 shadow-lg shadow-orange-500/40 group-hover:scale-110 group-hover:rotate-6 transition-all duration-500">
                  <Image className="w-7 h-7 text-white" />
                  <div className="absolute -top-1 -right-1 w-4 h-4 bg-amber-400 rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <Sparkles className="w-2.5 h-2.5 text-white" />
                  </div>
                </div>
                <div className="flex-1">
                  <span className="text-gray-800 font-semibold block">Conteúdo Visual Rico</span>
                  <span className="text-gray-500 text-sm">Fotografias e infografias da história e design</span>
                </div>
                <Car className="w-5 h-5 text-orange-300 opacity-0 group-hover:opacity-100 group-hover:translate-x-0 -translate-x-2 transition-all duration-300" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ReplicasSection;