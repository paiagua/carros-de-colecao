import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Dialog, DialogContent } from "@/components/ui/dialog";
import { Menu, X, Car } from "lucide-react";
import { useSubscription } from "@/contexts/SubscriptionContext";
import SubscriptionForm from "./SubscriptionForm";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const { isSubscriptionOpen, setIsSubscriptionOpen } = useSubscription();
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
      setIsOpen(false);
    }
  };

  return (
    <>
      <nav className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        scrolled 
          ? "bg-background/95 backdrop-blur-md shadow-md border-b border-border" 
          : "bg-background/80 backdrop-blur-sm"
      }`}>
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between h-16">
            <div className="flex items-center gap-2">
              <Car className="w-6 h-6 text-orange-500" />
              <span className="font-display text-xl uppercase tracking-tight">
                <span className="font-bold text-orange-500">Carros</span>
                <span className="font-bold text-gray-700 italic lowercase ml-1">de Coleção</span>
              </span>
            </div>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center space-x-8">
              <button
                onClick={() => scrollToSection("colecao")}
                className="text-muted-foreground hover:text-primary transition-colors font-medium"
              >
                A Coleção
              </button>
              <button
                onClick={() => scrollToSection("fasciculos")}
                className="text-muted-foreground hover:text-primary transition-colors font-medium"
              >
                Fascículos
              </button>
              <button
                onClick={() => scrollToSection("vantagens")}
                className="text-muted-foreground hover:text-primary transition-colors font-medium"
              >
                Vantagens
              </button>
              <button
                onClick={() => scrollToSection("faq")}
                className="text-muted-foreground hover:text-primary transition-colors font-medium"
              >
                FAQs
              </button>
              <Button className="bg-orange-500 hover:bg-orange-600 text-white font-bold" onClick={() => setIsSubscriptionOpen(true)}>
                Assinar Agora
              </Button>
            </div>

            {/* Mobile menu button */}
            <div className="md:hidden">
              <button
                onClick={() => setIsOpen(!isOpen)}
                className="text-foreground hover:text-primary transition-colors p-2"
              >
                {isOpen ? <X size={24} /> : <Menu size={24} />}
              </button>
            </div>
          </div>

          {/* Mobile Navigation */}
          {isOpen && (
            <div className="md:hidden pb-4 space-y-1 animate-fade-in border-t border-border pt-4">
              <button
                onClick={() => scrollToSection("colecao")}
                className="block w-full text-left px-4 py-3 text-muted-foreground hover:bg-muted hover:text-primary rounded-lg transition-colors"
              >
                A Coleção
              </button>
              <button
                onClick={() => scrollToSection("fasciculos")}
                className="block w-full text-left px-4 py-3 text-muted-foreground hover:bg-muted hover:text-primary rounded-lg transition-colors"
              >
                Fascículos
              </button>
              <button
                onClick={() => scrollToSection("vantagens")}
                className="block w-full text-left px-4 py-3 text-muted-foreground hover:bg-muted hover:text-primary rounded-lg transition-colors"
              >
                Vantagens
              </button>
              <button
                onClick={() => scrollToSection("faq")}
                className="block w-full text-left px-4 py-3 text-muted-foreground hover:bg-muted hover:text-primary rounded-lg transition-colors"
              >
                FAQs
              </button>
              <div className="px-4 pt-2">
                <Button className="w-full bg-orange-500 hover:bg-orange-600 text-white font-bold" onClick={() => setIsSubscriptionOpen(true)}>
                  Assinar Agora
                </Button>
              </div>
            </div>
          )}
        </div>
      </nav>

      <Dialog open={isSubscriptionOpen} onOpenChange={setIsSubscriptionOpen}>
        <DialogContent className="max-w-4xl w-full h-[100dvh] md:h-auto md:max-h-[85vh] p-4 md:p-6 m-0 md:m-4 max-w-full md:max-w-4xl rounded-none md:rounded-xl overflow-hidden flex flex-col">
          <SubscriptionForm onClose={() => setIsSubscriptionOpen(false)} />
        </DialogContent>
      </Dialog>
    </>
  );
};

export default Navbar;