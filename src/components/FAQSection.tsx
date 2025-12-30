import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { HelpCircle } from "lucide-react";
import { trackFAQInteraction } from "@/lib/analytics";

const faqs = [
  { 
    question: "Em que consiste a coleção?", 
    answer: "Uma coleção para toda a família descobrir os clássicos do automobilismo, com miniaturas de alta qualidade que são reproduções fiéis dos modelos originais. Uma seleção dos carros mais icónicos da história, com fascículos que incluem curiosidades, história e imagens magníficas." 
  },
  { 
    question: "A coleção é composta por quantas entregas?", 
    answer: "A coleção é composta por miniaturas de carros clássicos + Fascículos."
  },
  { 
    question: "Qual o preço unitário de cada entrega?", 
    answer: "Cada entrega tem um preço de 5,95€."
  },
  { 
    question: "Com que frequência serão distribuídas as entregas em banca?", 
    answer: "A coleção terá distribuição semanal, conforme o calendário de entregas indicado." 
  },
  { 
    question: "Como posso fazer uma assinatura?", 
    answer: "As assinaturas podem ser efetuadas através do preenchimento do formulário que está disponível na secção de assinaturas da coleção, neste site. Ou, se preferir pode ligar para o número 214 337 036." 
  },
  { 
    question: "Quais são as vantagens de assinar a coleção?", 
    answer: "Não perderá nenhum número, pois tudo será enviado para a sua morada, sem custos adicionais. Beneficiará de ofertas exclusivas para assinantes. Pode anular a sua assinatura a qualquer momento." 
  },
  { 
    question: "Que formas de pagamento são aceites?", 
    answer: "O pagamento da assinatura é por débito direto, mensalmente no valor correspondente ao envio mensal." 
  },
  { 
    question: "Como posso anular a minha subscrição?", 
    answer: "Pode anular a sua assinatura em qualquer momento contactando-nos através do e-mail assinaturas@vasp.pt ou por telefone 21 433 70 36." 
  },
];

const FAQSection = () => {
  return (
    <section id="faq" className="py-20 md:py-28 bg-background">
      <div className="container mx-auto px-4 max-w-3xl">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 text-primary text-sm font-semibold mb-2">
            <HelpCircle className="w-4 h-4" />
            <span className="uppercase tracking-wider">Dúvidas</span>
          </div>
          <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-bold text-foreground">
            Perguntas Frequentes
          </h2>
        </div>

        <Accordion type="single" collapsible className="w-full space-y-3" onValueChange={(value) => {
          if (value) {
            const index = parseInt(value.replace('item-', ''));
            trackFAQInteraction(faqs[index]?.question || value);
          }
        }}>
          {faqs.map((faq, index) => (
            <AccordionItem 
              key={index} 
              value={`item-${index}`}
              className="bg-card rounded-lg px-6 border border-border data-[state=open]:border-primary/30 transition-colors"
            >
              <AccordionTrigger className="text-left font-medium text-foreground hover:text-primary hover:no-underline py-4 transition-colors [&[data-state=open]]:text-primary">
                {faq.question}
              </AccordionTrigger>
              <AccordionContent className="text-muted-foreground pb-4 leading-relaxed">
                {faq.answer}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  );
};

export default FAQSection;