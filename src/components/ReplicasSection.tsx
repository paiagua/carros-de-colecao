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
    <section className="py-16 md:py-24 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left - Image Slider */}
          <div className="relative h-[500px] md:h-[600px] lg:h-[700px] w-full flex items-center justify-center">
            {magazines.map((img, index) => (
              <div
                key={index}
                className={`absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 transition-all duration-700 ease-in-out ${
                  index === currentSlide
                    ? "opacity-100 scale-100 z-10"
                    : index === (currentSlide - 1 + magazines.length) % magazines.length
                    ? "opacity-30 scale-60 -translate-x-[120%] z-0"
                    : index === (currentSlide + 1) % magazines.length
                    ? "opacity-30 scale-60 translate-x-[20%] z-0"
                    : "opacity-0 scale-50 z-0"
                }`}
              >
                <img
                  src={img}
                  alt={`Fascículo ${index + 1}`}
                  className="w-80 md:w-[400px] lg:w-[500px] max-h-[450px] md:max-h-[550px] lg:max-h-[650px] object-contain rounded-lg shadow-2xl"
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

            <ul className="space-y-4 text-gray-700 text-base md:text-lg">
              <li className="flex items-start gap-3">
                <span className="w-2 h-2 bg-orange-500 rounded-full mt-2 flex-shrink-0" />
                <span>Réplicas oficiais dos modelos mais emblemáticos do mundo automóvel, do passado e do presente</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="w-2 h-2 bg-orange-500 rounded-full mt-2 flex-shrink-0" />
                <span>Miniaturas pormenorizadas</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="w-2 h-2 bg-orange-500 rounded-full mt-2 flex-shrink-0" />
                <span>As melhores imagens, fotografias e infografias de cada modelo, ilustrando a sua história e design</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ReplicasSection;