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
    answer: "Uma coleção para toda a família descobrir os clássicos do automobilismo, com miniaturas de alta qualidade que são reproduções fiéis dos modelos originais. Uma seleção dos carros mais icónicos da história, com fascículos que incluem curiosidades, história e imagens magníficas. Ao subscrever receberá ofertas exclusivas: Caderno exclusivo, 5 caixas organizadoras de madeira, 2 packs exclusivos de 3 Ferraris." 
  },
  { 
    question: "A coleção é composta por quantas entregas?", 
    answer: "A coleção é composta por 150 carros + fascículos."
  },
  { 
    question: "Qual o preço unitário de cada entrega?", 
    answer: "A primeira entrega tem um preço lançamento de 1,95€. O preço unitário das restantes entregas (2º ao 150º) é de 5,95€."
  },
  { 
    question: "Qual o preço total da coleção completa?", 
    answer: "O preço da coleção completa composta pelas 150 entregas tem um preço total de 888,50€. Preços válidos para Portugal Continental. Os valores apresentados incluem IVA à taxa legal em vigor."
  },
  { 
    question: "Com que frequência serão distribuídas as entregas em banca?", 
    answer: "A coleção terá distribuição quinzenal das primeiras 3 entregas e semanal das restantes entregas, aos sábados de 31/01/2026 a 23/12/2028." 
  },
  { 
    question: "Como posso fazer uma assinatura?", 
    answer: "As assinaturas podem ser efetuadas através do preenchimento do formulário que está disponível na secção de assinaturas da coleção, neste site. Ou, se preferir pode ligar para o número 214 337 036. O horário de atendimento é de segunda a sexta-feira das 9h às 13h e das 14h às 18h. Poderá ainda fazê-lo preenchendo o cupão que encontrará na primeira e segunda entrega e enviá-lo por correio." 
  },
  { 
    question: "Posso assinar a coleção a partir da 2ª entrega?", 
    answer: "Sim, no caso de já ter comprado a primeira entrega em banca há a possibilidade de assinar a coleção a partir da 2ª entrega." 
  },
  { 
    question: "O que é que recebo como parte do meu envio inicial?", 
    answer: "Dependendo do número com que deseja iniciar a sua assinatura: a) Se subscrever a partir do número 1, receberá os números 1, 2 e 3. O preço deste conjunto de entregas é de 13,85€. No segundo envio, receberá os números 4 e 5, pelo valor de 11,90€. b) Se subscrever a partir do número 2, receberá os números 2 e 3, cujo preço é de 11,90€. Na segunda remessa, receberá os números 4 e 5, pelo valor de 11,90€. O terceiro envio contém os números 6, 7, 8 e 9 e custará um total de 23,80€." 
  },
  { 
    question: "Quantos envios vou receber no total?", 
    answer: "Independentemente de encomendar a partir do número 1 ou do nº 2, a coleção completa será composta por 38 envios (3 ou 2 números no primeiro envio, 2 números no segundo e, em seguida, 35 envios mensais de 4 números cada. A última remessa conterá 5 números)." 
  },
  { 
    question: "Quanto tempo vai demorar até ter a minha coleção completa?", 
    answer: "Deverá ter a sua coleção completa em 35 meses após o primeiro envio." 
  },
  { 
    question: "Quais são as vantagens de assinar a coleção?", 
    answer: "Não perderá nenhum número, pois tudo será enviado para a sua morada, sem custos adicionais. Beneficiará de ofertas exclusivas para assinantes. Pode anular a sua assinatura a qualquer momento." 
  },
  { 
    question: "Quais são as ofertas disponíveis e em que envios as vou receber?", 
    answer: "Com o 2.º envio receberá o Caderno Exclusivo de OFERTA. Com o 5.º envio receberá o Pack 1 exclusivo de 3 Ferrari (Enzo Ferrari, LaFerrari, F40 Competizione) de OFERTA. Com o 7º, 15º, 22º, 30º e 37º envio receberá 1 Caixa Organizadora de Madeira em cada um dos envios, de OFERTA. Com o 20º envio receberá o Pack 2 de 3 Ferraris (Ferrari 599 GTO, Ferrari F50 e Ferrari Roma), de OFERTA." 
  },
  { 
    question: "Que formas de pagamento são aceites?", 
    answer: "O pagamento da assinatura é por débito direto, mensalmente no valor correspondente ao envio mensal. Se tiver algum problema com o pagamento da sua assinatura, contacte o nosso serviço de apoio ao cliente." 
  },
  { 
    question: "Quando é que recebo o meu primeiro envio?", 
    answer: "O primeiro envio será feito no início de março, até 31 dias após o início da coleção." 
  },
  { 
    question: "Como posso anular a minha assinatura?", 
    answer: "Pode anular a sua assinatura em qualquer momento e sem complicações, contactando-nos através do e-mail: assinaturas@vasp.pt ou por telefone: 21 433 70 36 (dias úteis entre as 9h e as 13h e as 14h e as 18h)." 
  },
  { 
    question: "Como posso contactar o serviço de apoio ao cliente?", 
    answer: "Pode contactar-nos por e-mail: assinaturas@vasp.pt ou por telefone: 21 433 70 36 (dias úteis entre as 9h e as 13h e as 14h e as 18h)." 
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