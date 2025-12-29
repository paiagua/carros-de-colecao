import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Dialog, DialogContent } from "@/components/ui/dialog";
import { useSubscription } from "@/contexts/SubscriptionContext";
import { ChevronRight, X } from "lucide-react";
import fasciculoHistoria from "@/assets/fasciculos/fasciculo-historia.png";
import fasciculoDesign from "@/assets/fasciculos/fasciculo-design.png";
import fasciculoCuriosidades from "@/assets/fasciculos/fasciculo-curiosidades.png";

const FasciculosSection = () => {
  const { setIsSubscriptionOpen } = useSubscription();
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  const features = [
    {
      title: "História",
      subtitle: "e cronologia",
      description: "Acompanhe a origem de cada carro e em que contexto foram projetados e produzidos. Conheça os primeiros anos de vida de cada modelo.",
      images: [fasciculoHistoria],
    },
    {
      title: "Design",
      subtitle: "e caraterísticas",
      description: "Observe ao pormenor o que carateriza a vista frontal, lateral e traseira, bem como o interior. Descubra os dados técnicos.",
      images: [fasciculoDesign],
    },
    {
      title: "Curiosidades",
      subtitle: "e histórias",
      description: "Surpreenda-se com curiosidades e histórias que nunca lhe contaram. Descubra traços estilísticos ou mecânicos em destaque.",
      images: [fasciculoCuriosidades],
    },
  ];

  return (
    <section id="fasciculos" className="py-24 md:py-32 bg-white relative overflow-hidden">
      <div className="container mx-auto px-4 relative z-10">
        {/* Header */}
        <div className="text-center mb-16 md:mb-24">
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl text-gray-900 leading-tight max-w-4xl mx-auto">
            Cada fascículo inclui detalhes, histórias reais e curiosidades{" "}
            <span className="text-orange-500">que o vão surpreender!</span>
          </h2>
          <div className="mt-8 flex justify-center gap-2">
            <div className="h-1 w-16 bg-orange-500 rounded-full" />
            <div className="h-1 w-8 bg-orange-300 rounded-full" />
            <div className="h-1 w-4 bg-orange-200 rounded-full" />
          </div>
        </div>

        {/* Features with connecting lines */}
        <div className="max-w-6xl mx-auto relative">
          {/* Horizontal connecting line - improved */}
          <div className="hidden lg:block absolute top-8 left-[16%] right-[16%]">
            <div className="h-[2px] bg-gradient-to-r from-transparent via-orange-400 to-transparent" />
          </div>

          <div className="grid md:grid-cols-3 gap-8 lg:gap-12">
            {features.map((feature, index) => (
              <div 
                key={index}
                className="group relative text-center"
              >
                {/* Number circle with connecting line */}
                <div className="relative">
                  {/* Vertical line from horizontal to circle */}
                  <div className="hidden lg:block absolute top-0 left-1/2 w-[2px] h-8 bg-gradient-to-b from-orange-400 to-orange-500 -translate-x-1/2 -translate-y-full" />
                  
                  {/* Small dot at intersection */}
                  <div className="hidden lg:block absolute -top-8 left-1/2 w-2 h-2 bg-orange-500 rounded-full -translate-x-1/2 shadow-lg shadow-orange-500/50" />
                  
                  {/* Number circle */}
                  <div className="w-16 h-16 mx-auto mb-6 rounded-full bg-white border-3 border-orange-500 flex items-center justify-center text-2xl text-orange-500 group-hover:bg-orange-500 group-hover:text-white transition-all duration-300 shadow-lg relative z-10" style={{ borderWidth: '3px' }}>
                    {index + 1}
                  </div>
                </div>

                {/* Title */}
                <h3 className="text-2xl md:text-3xl text-gray-900 mb-4">
                  <span className="text-orange-500">{feature.title}</span> {feature.subtitle}
                </h3>

                {/* Description */}
                <p className="text-gray-600 leading-relaxed mb-8 max-w-sm mx-auto">
                  {feature.description}
                </p>

                {/* Magazine Images */}
                <div className="flex gap-4 justify-center">
                  {feature.images.map((img, imgIndex) => (
                    <div 
                      key={imgIndex} 
                      className="relative cursor-pointer"
                      onClick={() => setSelectedImage(img)}
                    >
                      <div className="absolute inset-0 bg-orange-500/10 rounded-lg blur-xl scale-90 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                      <img 
                        src={img} 
                        alt={`Fascículo ${index + 1}`}
                        className="relative w-28 md:w-32 lg:w-36 rounded-lg shadow-xl group-hover:scale-105 hover:scale-110 transition-transform duration-500"
                        style={{ 
                          transform: `rotate(${imgIndex % 2 === 0 ? -3 : 3}deg)`,
                        }}
                      />
                      {/* Click hint */}
                      <div className="absolute inset-0 flex items-center justify-center opacity-0 hover:opacity-100 transition-opacity duration-300">
                        <div className="bg-black/50 text-white text-xs px-2 py-1 rounded">
                          Clique para ampliar
                        </div>
                      </div>
                    </div>
                  ))}
                </div>

                {/* Decorative corner lines */}
                <div className="absolute top-0 left-0 w-8 h-8 border-l-2 border-t-2 border-orange-200 rounded-tl-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                <div className="absolute bottom-0 right-0 w-8 h-8 border-r-2 border-b-2 border-orange-200 rounded-br-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </div>
            ))}
          </div>
        </div>

        {/* CTA Section */}
        <div className="text-center mt-16 md:mt-24">
          <div className="flex justify-center gap-2 mb-8">
            <div className="h-0.5 w-12 bg-orange-200 rounded-full self-center" />
            <p className="text-gray-600 text-lg md:text-xl">
              Cada entrega traz um fascículo completo com informações exclusivas
            </p>
            <div className="h-0.5 w-12 bg-orange-200 rounded-full self-center" />
          </div>
          <Button 
            onClick={() => setIsSubscriptionOpen(true)}
            className="bg-orange-500 hover:bg-orange-600 text-white text-lg px-10 py-7 h-auto rounded-xl shadow-lg shadow-orange-500/30 hover:shadow-xl hover:shadow-orange-500/40 transition-all uppercase tracking-wide group"
          >
            Começar a Colecionar
            <ChevronRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </Button>
        </div>
      </div>

      {/* Lightbox Modal */}
      <Dialog open={!!selectedImage} onOpenChange={() => setSelectedImage(null)}>
        <DialogContent className="max-w-4xl w-full p-0 bg-transparent border-none shadow-none">
          <button
            onClick={() => setSelectedImage(null)}
            className="absolute top-4 right-4 z-50 w-10 h-10 bg-white/90 hover:bg-white rounded-full flex items-center justify-center shadow-lg transition-all"
          >
            <X className="w-6 h-6 text-gray-800" />
          </button>
          {selectedImage && (
            <div className="flex items-center justify-center p-4">
              <img 
                src={selectedImage} 
                alt="Fascículo ampliado"
                className="max-w-full max-h-[85vh] object-contain rounded-xl shadow-2xl"
              />
            </div>
          )}
        </DialogContent>
      </Dialog>
    </section>
  );
};

export default FasciculosSection;