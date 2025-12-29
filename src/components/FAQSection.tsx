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
    answer: "Uma coleção para toda a família descobrir os segredos da mineralogia, com 120 minerais que são exemplares autênticos. Uma seleção por especialistas em geologia e mineralogia, com fascículos que incluem curiosidades, experiências e imagens magníficas. Ao subscrever receberá ofertas exclusivas: Geodo de Quartzo, Lupa e Geodo de Ametista." 
  },
  { 
    question: "A coleção é composta por quantas entregas?", 
    answer: "A coleção é composta por 120 minerais + Fascículos."
  },
  { 
    question: "Qual o preço unitário de cada entrega?", 
    answer: "A primeira entrega tem um preço lançamento de 1€. A segunda entrega tem um preço promocional de 3,99€. O preço unitário das restantes entregas (3º ao 120º) é de 7,99€."
  },
  { 
    question: "Qual o preço total da coleção completa?", 
    answer: "O preço da coleção completa composta pelas 120 entregas tem um preço de 947,81€. Preços válidos para Portugal Continental. Os valores apresentados incluem IVA à taxa legal em vigor."
  },
  { 
    question: "Com que frequência serão distribuídas as entregas em banca?", 
    answer: "A coleção terá distribuição quinzenal da 1ª entrega e semanal das restantes entregas, às 4ªas feiras de 14/01/2026 a 03/05/2028." 
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
    answer: "Dependendo do número com que deseja iniciar a sua assinatura, o seu pacote inicial incluirá os números da coleção pela seguinte ordem: a) Se subscrever a partir do número 1, receberá os números 1, 2 e 3. O preço deste conjunto de entregas é de 12,98€. No segundo envio, receberá os números 4 e 5, pelo valor de 15,98€. b) Se subscrever a partir do número 2, receberá os números 2 e 3, cujo preço é de 11,89€. Na segunda remessa, receberá os números 4 e 5, pelo valor de 15,98€. O terceiro envio contém os números 6, 7, 8 e 9 e custará um total de 31,96€." 
  },
  { 
    question: "Quantos envios vou receber no total?", 
    answer: "Independentemente de encomendar a partir do número 1 ou do nº 2, a coleção completa será composta por 31 envios (3 ou 2 números no primeiro envio, 2 números no segundo e, em seguida, 28 envios mensais de 4 números cada. A última remessa conterá 3 números)." 
  },
  { 
    question: "Quanto tempo vai demorar até ter a minha coleção completa?", 
    answer: "Deverá ter a sua coleção completa em 29 meses após o primeiro envio." 
  },
  { 
    question: "Quais são as vantagens de assinar a coleção?", 
    answer: "Não perderá nenhum número, pois tudo será enviado para a sua morada, sem custos adicionais. Os custos de envio serão suportados pelo editor. Beneficiará de ofertas exclusivas para os assinantes. Pode anular a sua assinatura a qualquer momento, bastando para isso contactar o nosso serviço de apoio ao cliente." 
  },
  { 
    question: "Quais são as ofertas disponíveis e em que envios as vou receber?", 
    answer: "Com o 4.º envio receberá o Mineral Geodo de Quartzo de OFERTA. Com o 10.º envio receberá a Lupa de OFERTA. Com o 20.º envio receberá o mineral Geodo de Ametista de OFERTA." 
  },
  { 
    question: "Que formas de pagamento são aceites?", 
    answer: "O pagamento da assinatura é por débito direto, mensalmente no valor correspondente ao envio mensal. Se tiver algum problema com o pagamento da sua assinatura, contacte o nosso serviço de apoio ao cliente." 
  },
  { 
    question: "Quando é que recebo o meu primeiro envio?", 
    answer: "O primeiro envio será feito no início de fevereiro, até 21 dias após o início da coleção." 
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
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-accent/50 to-transparent" />
      
      <div className="container mx-auto px-4 max-w-5xl relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-16 items-end mb-16 animate-fade-in">
          {/* Left side - Title */}
          <div className="lg:col-span-7 text-left">
            <div className="inline-flex items-center gap-2 text-accent text-sm md:text-base font-semibold mb-3">
              <HelpCircle className="w-4 h-4 md:w-5 md:h-5" />
              <span className="uppercase tracking-wider">Tire as suas Dúvidas</span>
            </div>
            <h2 className="font-display text-4xl sm:text-5xl md:text-7xl font-bold text-foreground leading-[0.9]">
              Perguntas <span className="text-accent">Frequentes</span>
            </h2>
          </div>
          
          {/* Right side - Description */}
          <div className="lg:col-span-5 lg:pb-2">
            <div className="lg:border-l-2 border-accent/30 lg:pl-8">
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
              className="group bg-card rounded-xl px-6 border border-border hover:border-accent/30 data-[state=open]:border-accent/50 transition-all duration-300 animate-scale-in"
              style={{ animationDelay: `${index * 0.05}s` }}
            >
              <AccordionTrigger className="text-left font-semibold text-foreground hover:text-accent hover:no-underline py-5 transition-colors duration-300 [&[data-state=open]]:text-accent">
                <span className="flex items-start gap-4">
                  <span className="flex-shrink-0 w-8 h-8 bg-secondary group-data-[state=open]:bg-accent rounded-full flex items-center justify-center text-accent group-data-[state=open]:text-accent-foreground font-bold text-sm transition-all duration-300">
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