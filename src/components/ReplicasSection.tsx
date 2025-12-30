import { useState, useEffect } from "react";
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
              <div className="group flex items-center gap-4 bg-gradient-to-r from-orange-50 to-amber-50 rounded-xl p-4 border border-orange-100 transition-all duration-300 hover:shadow-lg hover:border-orange-200 hover:scale-[1.02]">
                <div className="w-12 h-12 bg-orange-500 rounded-xl flex items-center justify-center flex-shrink-0 shadow-lg shadow-orange-500/30 group-hover:scale-110 transition-transform duration-300">
                  <svg className="w-6 h-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" />
                  </svg>
                </div>
                <span className="text-gray-700 font-medium">Réplicas oficiais dos modelos mais emblemáticos do mundo automóvel</span>
              </div>
              
              <div className="group flex items-center gap-4 bg-gradient-to-r from-gray-50 to-slate-50 rounded-xl p-4 border border-gray-100 transition-all duration-300 hover:shadow-lg hover:border-orange-200 hover:scale-[1.02]">
                <div className="w-12 h-12 bg-gray-800 rounded-xl flex items-center justify-center flex-shrink-0 shadow-lg group-hover:scale-110 transition-transform duration-300">
                  <svg className="w-6 h-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0zM10 7v3m0 0v3m0-3h3m-3 0H7" />
                  </svg>
                </div>
                <span className="text-gray-700 font-medium">Miniaturas pormenorizadas com atenção a cada detalhe</span>
              </div>
              
              <div className="group flex items-center gap-4 bg-gradient-to-r from-orange-50 to-amber-50 rounded-xl p-4 border border-orange-100 transition-all duration-300 hover:shadow-lg hover:border-orange-200 hover:scale-[1.02]">
                <div className="w-12 h-12 bg-orange-500 rounded-xl flex items-center justify-center flex-shrink-0 shadow-lg shadow-orange-500/30 group-hover:scale-110 transition-transform duration-300">
                  <svg className="w-6 h-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                  </svg>
                </div>
                <span className="text-gray-700 font-medium">Imagens, fotografias e infografias ilustrando história e design</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ReplicasSection;