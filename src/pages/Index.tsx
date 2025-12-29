import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import ReasonsSection from "@/components/ReasonsSection";
import CollectionSection from "@/components/CollectionSection";
import SpecialOffersSection from "@/components/SpecialOffersSection";
import AdvantagesSection from "@/components/AdvantagesSection";
import FAQSection from "@/components/FAQSection";
import Footer from "@/components/Footer";
import SubscriptionSticker from "@/components/SubscriptionSticker";

const Index = () => {
  return (
    <main className="min-h-screen" role="main">
      <header>
        <Navbar />
      </header>
      
      <article>
        <Hero />
        
        <section id="colecao" aria-labelledby="colecao-titulo">
          <CollectionSection />
        </section>
        
        <section id="ofertas" aria-labelledby="ofertas-titulo">
          <SpecialOffersSection />
        </section>
        
        <section id="razoes" aria-labelledby="razoes-titulo">
          <ReasonsSection />
        </section>
        
        <section id="vantagens" aria-labelledby="vantagens-titulo">
          <AdvantagesSection />
        </section>
        
        <section id="faq" aria-labelledby="faq-titulo">
          <FAQSection />
        </section>
      </article>
      
      <Footer />
      <SubscriptionSticker />
    </main>
  );
};

export default Index;