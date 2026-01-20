import { Card } from "@/components/ui/card";
import { Bookmark, Coffee, NotebookPen, Sparkles } from "lucide-react";
import { useSubscription } from "@/contexts/SubscriptionContext";
import markersImg from "@/assets/presents/markers.png";
import mugImg from "@/assets/presents/mug.png";
import notebookImg from "@/assets/presents/notebook.png";

const offers = [
  { number: 1, image: markersImg, icon: Bookmark, title: "Marcadores Personalizados", description: "Não perca nenhum capítulo.", delivery: "3º envio" },
  { number: 2, image: mugImg, icon: Coffee, title: "Caneca", description: "Relaxe e aproveite o prazer da leitura.", delivery: "5º envio" },
  { number: 3, image: notebookImg, icon: NotebookPen, title: "Bloco de Notas", description: "Anote todos os detalhes dos eventos históricos.", delivery: "8º envio" }
];

const OffersSection = () => {
  const { isSubscriptionOpen, setIsSubscriptionOpen } = useSubscription();

  return (
    <>
      <section id="ofertas" className="py-24 bg-secondary/50 relative overflow-hidden">
        {/* Decorative elements */}
        <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-accent/50 to-transparent" />
        <div className="absolute top-20 right-20 w-64 h-64 bg-accent/5 rounded-full blur-3xl animate-float" />
        <div className="absolute bottom-20 left-20 w-64 h-64 bg-cta/5 rounded-full blur-3xl animate-float" style={{ animationDelay: '1.5s' }} />

        <div className="container mx-auto px-4 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-16 items-end mb-16 animate-fade-in">
            {/* Left side - Title */}
            <div className="lg:col-span-7 text-left">
              <div className="inline-flex items-center gap-2 text-cta text-sm md:text-base font-semibold mb-3">
                <Sparkles className="w-4 h-4 md:w-5 md:h-5" />
                <span className="uppercase tracking-wider">Exclusivo para Assinantes</span>
              </div>
              <h2 className="font-display text-4xl sm:text-5xl md:text-7xl font-bold text-foreground leading-[0.9]">
                Garanta <span className="text-accent">Agora</span>
              </h2>
            </div>
            
            {/* Right side - Description */}
            <div className="lg:col-span-5 lg:pb-2">
              <div className="lg:border-l-2 border-accent/30 lg:pl-8">
                <p className="text-base sm:text-lg md:text-xl text-muted-foreground leading-relaxed">
                  Três <span className="font-semibold text-accent">Ofertas Exclusivas</span> para quem subscrever a coleção
                </p>
              </div>
            </div>
          </div>

          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto mb-12">
            {offers.map((offer, index) => (
              <Card 
                key={index}
                onClick={() => setIsSubscriptionOpen(true)}
                className="group p-8 text-center bg-card border-border hover:border-accent/30 transition-all duration-300 hover:-translate-y-2 animate-scale-in cursor-pointer"
                style={{ animationDelay: `${index * 0.15}s` }}
              >
                <div className="relative z-10">
                  <div className="inline-flex items-center gap-2 bg-cta text-cta-foreground rounded-full px-5 py-2 text-sm font-bold mb-6">
                    <Sparkles className="w-4 h-4" />
                    OFERTA {offer.number}
                  </div>
                  
                  <div className="w-40 h-40 mx-auto mb-8 relative">
                    <div className="absolute inset-0 bg-accent/10 rounded-2xl group-hover:bg-accent/20 transition-colors duration-300" />
                    <img 
                      src={offer.image} 
                      alt={offer.title}
                      className="relative w-full h-full object-contain"
                    />
                    <div className="absolute -top-2 -right-2">
                      <div className="w-10 h-10 bg-accent rounded-full flex items-center justify-center">
                        <offer.icon className="w-5 h-5 text-accent-foreground" />
                      </div>
                    </div>
                  </div>

                  <h3 className="font-display text-2xl font-bold mb-4 text-foreground group-hover:text-accent transition-colors duration-300">
                    {offer.title}
                  </h3>
                  
                  <p className="text-muted-foreground mb-6">
                    {offer.description}
                  </p>

                  <div className="inline-block bg-secondary border border-border rounded-full py-2 px-6 text-sm font-semibold text-accent">
                    Receberá no {offer.delivery}
                  </div>
                </div>
              </Card>
            ))}
          </div>

          <p className="text-center text-muted-foreground text-sm max-w-3xl mx-auto">
            Imagens não contratuais. Em caso de rutura de stock, as ofertas serão substituídas por outras de valor idêntico.
          </p>
        </div>
      </section>
    </>
  );
};

export default OffersSection;