import { BookOpen, Gauge, Sparkles, ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useSubscription } from "@/contexts/SubscriptionContext";
import magazine1 from "@/assets/magazines/magazine-1.png";
import magazine2 from "@/assets/magazines/magazine-2.png";
import magazine3 from "@/assets/magazines/magazine-3.png";
import magazine4 from "@/assets/magazines/magazine-4.png";
import magazine5 from "@/assets/magazines/magazine-5.png";

const FasciculosSection = () => {
  const { setIsSubscriptionOpen } = useSubscription();

  const features = [
    {
      icon: BookOpen,
      title: "História",
      subtitle: "e cronologia",
      description: "Acompanhe a origem de cada carro e em que contexto foram projetados e produzidos. Conheça os primeiros anos de vida de cada modelo.",
      images: [magazine1, magazine2],
      color: "from-orange-500 to-red-500",
    },
    {
      icon: Gauge,
      title: "Design",
      subtitle: "e caraterísticas",
      description: "Observe ao pormenor o que carateriza a vista frontal, lateral e traseira, bem como o interior. Descubra os dados técnicos.",
      images: [magazine3, magazine4],
      color: "from-blue-500 to-purple-500",
    },
    {
      icon: Sparkles,
      title: "Curiosidades",
      subtitle: "e histórias",
      description: "Surpreenda-se com curiosidades e histórias que nunca lhe contaram. Descubra traços estilísticos ou mecânicos em destaque.",
      images: [magazine5],
      color: "from-green-500 to-teal-500",
    },
  ];

  return (
    <section id="fasciculos" className="py-24 md:py-32 bg-gradient-to-b from-gray-900 via-gray-800 to-gray-900 relative overflow-hidden">
      {/* Background decorations */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-orange-500/10 rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-1/4 w-80 h-80 bg-orange-600/10 rounded-full blur-3xl" />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        {/* Header */}
        <div className="text-center mb-16 md:mb-24">
          <span className="inline-block px-4 py-2 bg-orange-500/20 text-orange-400 text-sm uppercase tracking-widest rounded-full mb-6">
            Fascículos Exclusivos
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl text-white leading-tight max-w-4xl mx-auto">
            Cada fascículo inclui detalhes, histórias reais e curiosidades{" "}
            <span className="text-orange-500">que o vão surpreender!</span>
          </h2>
          <div className="mt-8 flex justify-center gap-2">
            <div className="h-1 w-16 bg-orange-500 rounded-full" />
            <div className="h-1 w-8 bg-orange-500/50 rounded-full" />
            <div className="h-1 w-4 bg-orange-500/30 rounded-full" />
          </div>
        </div>

        {/* Features Grid */}
        <div className="grid md:grid-cols-3 gap-8 lg:gap-12 max-w-6xl mx-auto">
          {features.map((feature, index) => (
            <div 
              key={index}
              className="group relative bg-white/5 backdrop-blur-sm rounded-3xl p-8 border border-white/10 hover:border-orange-500/50 transition-all duration-500 hover:bg-white/10 hover:-translate-y-2"
            >
              {/* Icon */}
              <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${feature.color} flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
                <feature.icon className="w-8 h-8 text-white" />
              </div>

              {/* Title */}
              <h3 className="text-2xl md:text-3xl text-white mb-2">
                <span className="text-orange-500">{feature.title}</span> {feature.subtitle}
              </h3>

              {/* Description */}
              <p className="text-gray-400 leading-relaxed mb-8">
                {feature.description}
              </p>

              {/* Magazine Images */}
              <div className="flex gap-4 justify-center">
                {feature.images.map((img, imgIndex) => (
                  <img 
                    key={imgIndex}
                    src={img} 
                    alt={`Fascículo ${index + 1}`}
                    className="w-24 md:w-28 lg:w-32 rounded-lg shadow-2xl group-hover:scale-105 transition-transform duration-500"
                    style={{ 
                      transform: `rotate(${imgIndex % 2 === 0 ? -3 : 3}deg)`,
                    }}
                  />
                ))}
              </div>

              {/* Hover glow effect */}
              <div className="absolute inset-0 rounded-3xl bg-gradient-to-br from-orange-500/0 to-orange-600/0 group-hover:from-orange-500/5 group-hover:to-orange-600/5 transition-all duration-500 pointer-events-none" />
            </div>
          ))}
        </div>

        {/* CTA Section */}
        <div className="text-center mt-16 md:mt-24">
          <p className="text-gray-400 text-lg md:text-xl mb-8 max-w-2xl mx-auto">
            Cada entrega traz um fascículo completo com informações exclusivas sobre cada modelo
          </p>
          <Button 
            onClick={() => setIsSubscriptionOpen(true)}
            className="bg-orange-500 hover:bg-orange-600 text-white text-lg px-10 py-7 h-auto rounded-xl shadow-lg shadow-orange-500/30 hover:shadow-xl hover:shadow-orange-500/40 transition-all uppercase tracking-wide group"
          >
            Começar a Colecionar
            <ChevronRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </Button>
        </div>
      </div>
    </section>
  );
};

export default FasciculosSection;