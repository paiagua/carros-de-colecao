import fasciculoVW from "@/assets/fasciculos/fasciculo-vw-bus.png";
import fasciculoRenault from "@/assets/fasciculos/fasciculo-renault.png";

const ReplicasSection = () => {
  return (
    <section className="py-16 md:py-24 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left - Fascicle images */}
          <div className="flex justify-center items-center gap-4 md:gap-8">
            <img 
              src={fasciculoVW} 
              alt="Fascículo VW T1 Bus" 
              className="w-40 md:w-56 lg:w-64 drop-shadow-2xl transform -rotate-6 hover:rotate-0 transition-transform duration-300"
            />
            <img 
              src={fasciculoRenault} 
              alt="Fascículo Renault 4L" 
              className="w-40 md:w-56 lg:w-64 drop-shadow-2xl transform rotate-6 hover:rotate-0 transition-transform duration-300"
            />
          </div>

          {/* Right - Content */}
          <div className="space-y-6">
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-gray-900 leading-tight">
              Descubra as histórias e curiosidades das réplicas oficiais dos carros que deixaram a sua marca na história do automóvel.
            </h2>

            <p className="text-gray-700 text-base md:text-lg leading-relaxed">
              Modelos que fizeram parte de momentos inesquecíveis, de viagens em família, de aventuras na estrada e de sonhos sobre rodas.
            </p>

            <ul className="space-y-3 text-gray-700 text-base md:text-lg">
              <li className="flex items-start gap-3">
                <span className="text-red-600 font-bold text-xl">•</span>
                <span>Réplicas oficiais dos modelos mais emblemáticos do mundo automóvel, do passado e do presente</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-red-600 font-bold text-xl">•</span>
                <span>Miniaturas pormenorizadas</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-red-600 font-bold text-xl">•</span>
                <span>As melhores imagens, fotografias e infografias de cada modelo, ilustrando a sua história e design</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ReplicasSection;
