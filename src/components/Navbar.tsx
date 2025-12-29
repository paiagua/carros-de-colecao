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
      <nav className={`fixed top-0 w-full z-50 transition-all duration-500 ${
        scrolled 
          ? "bg-background/95 backdrop-blur-lg shadow-xl border-b border-border" 
          : "bg-background/80 backdrop-blur-sm border-b border-border/50"
      }`}>
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between h-16">
            <div className="flex items-center gap-3 animate-fade-in-down">
              <Car className="w-6 h-6 text-primary" />
              <span className="font-display text-xl font-bold">
                <span className="text-primary">Carros</span>
                <span className="text-foreground/80"> Clássicos</span>
              </span>
            </div>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center space-x-6 animate-fade-in-down">
              <button
                onClick={() => scrollToSection("colecao")}
                className="text-foreground/80 hover:text-primary transition-all duration-300 font-medium relative after:absolute after:bottom-0 after:left-0 after:h-0.5 after:w-0 after:bg-primary after:transition-all after:duration-300 hover:after:w-full"
              >
                A Coleção
              </button>
              <button
                onClick={() => scrollToSection("entregas")}
                className="text-foreground/80 hover:text-primary transition-all duration-300 font-medium relative after:absolute after:bottom-0 after:left-0 after:h-0.5 after:w-0 after:bg-primary after:transition-all after:duration-300 hover:after:w-full"
              >
                Entregas
              </button>
              <button
                onClick={() => scrollToSection("vantagens")}
                className="text-foreground/80 hover:text-primary transition-all duration-300 font-medium relative after:absolute after:bottom-0 after:left-0 after:h-0.5 after:w-0 after:bg-primary after:transition-all after:duration-300 hover:after:w-full"
              >
                Vantagens
              </button>
              <button
                onClick={() => scrollToSection("faq")}
                className="text-foreground/80 hover:text-primary transition-all duration-300 font-medium relative after:absolute after:bottom-0 after:left-0 after:h-0.5 after:w-0 after:bg-primary after:transition-all after:duration-300 hover:after:w-full"
              >
                FAQs
              </button>
              <Button variant="cta" size="default" onClick={() => setIsSubscriptionOpen(true)}>
                Assinar a Coleção
              </Button>
            </div>

            {/* Mobile menu button */}
            <div className="md:hidden">
              <button
                onClick={() => setIsOpen(!isOpen)}
                className="text-foreground hover:text-primary transition-colors duration-300 p-2 hover:bg-secondary rounded-lg"
              >
                {isOpen ? <X size={24} /> : <Menu size={24} />}
              </button>
            </div>
          </div>

          {/* Mobile Navigation */}
          {isOpen && (
            <div className="md:hidden pb-4 space-y-2 animate-slide-up">
              <button
                onClick={() => scrollToSection("colecao")}
                className="block w-full text-left px-4 py-3 text-foreground/80 hover:bg-secondary hover:text-primary rounded-lg transition-all duration-300"
              >
                A Coleção
              </button>
              <button
                onClick={() => scrollToSection("entregas")}
                className="block w-full text-left px-4 py-3 text-foreground/80 hover:bg-secondary hover:text-primary rounded-lg transition-all duration-300"
              >
                Entregas
              </button>
              <button
                onClick={() => scrollToSection("vantagens")}
                className="block w-full text-left px-4 py-3 text-foreground/80 hover:bg-secondary hover:text-primary rounded-lg transition-all duration-300"
              >
                Vantagens
              </button>
              <button
                onClick={() => scrollToSection("faq")}
                className="block w-full text-left px-4 py-3 text-foreground/80 hover:bg-secondary hover:text-primary rounded-lg transition-all duration-300"
              >
                FAQs
              </button>
              <div className="px-4 pt-2">
                <Button variant="cta" size="default" className="w-full" onClick={() => setIsSubscriptionOpen(true)}>
                  Assinar a Coleção
                </Button>
              </div>
            </div>
          )}
        </div>
      </nav>

      <Dialog open={isSubscriptionOpen} onOpenChange={setIsSubscriptionOpen}>
        <DialogContent className="max-w-4xl w-full h-[100dvh] md:h-auto md:max-h-[85vh] p-4 md:p-6 m-0 md:m-4 max-w-full md:max-w-4xl rounded-none md:rounded-lg overflow-hidden flex flex-col">
          <SubscriptionForm onClose={() => setIsSubscriptionOpen(false)} />
        </DialogContent>
      </Dialog>
    </>
  );
};

export default Navbar;