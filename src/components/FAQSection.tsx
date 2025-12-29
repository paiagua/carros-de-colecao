import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { HelpCircle } from "lucide-react";

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
    answer: "A primeira entrega tem um preço de lançamento de 1€. As restantes entregas têm preços promocionais conforme indicado na lista de entregas."
  },
  { 
    question: "Com que frequência serão distribuídas as entregas em banca?", 
    answer: "A coleção terá distribuição semanal, conforme o calendário de entregas indicado." 
  },
  { 
    question: "Como posso fazer uma assinatura?", 
    answer: "As assinaturas podem ser efetuadas através do preenchimento do formulário que está disponível na secção de assinaturas da coleção, neste site. Ou, se preferir pode ligar para o número 214 337 036. O horário de atendimento é de segunda a sexta-feira das 9h às 13h e das 14h às 18h." 
  },
  { 
    question: "Quais são as vantagens de assinar a coleção?", 
    answer: "Não perderá nenhum número, pois tudo será enviado para a sua morada, sem custos adicionais. Os custos de envio serão suportados pelo editor. Beneficiará de ofertas exclusivas para os assinantes. Pode anular a sua assinatura a qualquer momento, bastando para isso contactar o nosso serviço de apoio ao cliente." 
  },
  { 
    question: "Que formas de pagamento são aceites?", 
    answer: "O pagamento da assinatura é por débito direto, mensalmente no valor correspondente ao envio mensal. Se tiver algum problema com o pagamento da sua assinatura, contacte o nosso serviço de apoio ao cliente." 
  },
  { 
    question: "Como posso anular a minha subscrição?", 
    answer: "Pode anular a sua assinatura em qualquer momento e sem complicações, contactando-nos através do e-mail: assinaturas@vasp.pt ou por telefone: 21 433 70 36 (dias úteis entre as 9h e as 13h e as 14h e as 18h)." 
  },
  { 
    question: "Como posso contactar o serviço de apoio ao cliente?", 
    answer: "Pode contactar-nos por e-mail: assinaturas@vasp.pt ou por telefone: 21 433 70 36 (dias úteis entre as 9h e as 13h e as 14h e as 18h)." 
  }
];

const FAQSection = () => {
  return (
    <section id="faq" className="py-24 bg-background relative overflow-hidden">
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-primary/50 to-transparent" />
      
      <div className="container mx-auto px-4 max-w-5xl relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-16 items-end mb-16 animate-fade-in">
          {/* Left side - Title */}
          <div className="lg:col-span-7 text-left">
            <div className="inline-flex items-center gap-2 text-primary text-sm md:text-base font-semibold mb-3">
              <HelpCircle className="w-4 h-4 md:w-5 md:h-5" />
              <span className="uppercase tracking-wider">Tire as suas Dúvidas</span>
            </div>
            <h2 className="font-display text-4xl sm:text-5xl md:text-7xl font-bold text-foreground leading-[0.9]">
              Perguntas <span className="text-primary">Frequentes</span>
            </h2>
          </div>
          
          {/* Right side - Description */}
          <div className="lg:col-span-5 lg:pb-2">
            <div className="lg:border-l-2 border-primary/30 lg:pl-8">
              <p className="text-base sm:text-lg md:text-xl text-muted-foreground leading-relaxed">
                Encontre respostas para as suas dúvidas mais comuns
              </p>
            </div>
          </div>
        </div>

        <Accordion type="single" collapsible className="w-full space-y-4">
          {faqs.map((faq, index) => (
            <AccordionItem 
              key={index} 
              value={`item-${index}`}
              className="group bg-card rounded-xl px-6 border border-border hover:border-primary/30 data-[state=open]:border-primary/50 transition-all duration-300 animate-scale-in"
              style={{ animationDelay: `${index * 0.05}s` }}
            >
              <AccordionTrigger className="text-left font-semibold text-foreground hover:text-primary hover:no-underline py-5 transition-colors duration-300 [&[data-state=open]]:text-primary">
                <span className="flex items-start gap-4">
                  <span className="flex-shrink-0 w-8 h-8 bg-secondary group-data-[state=open]:bg-primary rounded-full flex items-center justify-center text-primary group-data-[state=open]:text-primary-foreground font-bold text-sm transition-all duration-300">
                    {index + 1}
                  </span>
                  <span className="flex-1">{faq.question}</span>
                </span>
              </AccordionTrigger>
              <AccordionContent className="text-muted-foreground pb-6 pl-12 pr-6 leading-relaxed">
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