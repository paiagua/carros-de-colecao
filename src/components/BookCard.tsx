import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

interface BookCardProps {
  number: number;
  title: string;
  image?: string;
  onSubscribeClick?: () => void;
}

const BookCard = ({ number, title, image, onSubscribeClick }: BookCardProps) => {
  return (
    <Card className="group overflow-hidden bg-gradient-to-br from-card to-card/80 shadow-card hover:shadow-card-hover transition-all duration-500 hover:-translate-y-2 border border-border/50 hover:border-accent/30 flex flex-col">
      <div className="aspect-[3/4] bg-gradient-to-br from-primary to-secondary flex items-center justify-center relative overflow-hidden">
        {image ? (
          <>
            <img 
              src={image} 
              alt={title}
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
          </>
        ) : (
          <>
            <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
            <div className="relative z-10 text-center p-4">
              <div className="text-accent font-display text-6xl font-bold mb-2 group-hover:scale-110 transition-transform duration-500">
                {number.toString().padStart(2, '0')}
              </div>
            </div>
          </>
        )}
      </div>
      <div className="p-4 bg-gradient-to-b from-card to-card/95 flex flex-col gap-3 flex-1">
        <h3 className="font-semibold text-sm text-center text-foreground group-hover:text-primary transition-colors duration-300">
          {title}
        </h3>
        <Button 
          onClick={onSubscribeClick}
          size="sm"
          className="w-full bg-accent hover:bg-accent/90 text-accent-foreground font-semibold text-xs mt-auto"
        >
          Iniciar Coleção
        </Button>
      </div>
    </Card>
  );
};

export default BookCard;
