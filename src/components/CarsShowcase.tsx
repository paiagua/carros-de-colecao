import car1 from "@/assets/cars/car-1.png";
import car2 from "@/assets/cars/car-2.png";
import car3 from "@/assets/cars/car-3.png";
import car4 from "@/assets/cars/car-4.png";
import car5 from "@/assets/cars/car-5.png";
import car6 from "@/assets/cars/car-6.png";
import car7 from "@/assets/cars/car-7.png";
import car8 from "@/assets/cars/car-8.png";
import car9 from "@/assets/cars/car-9.png";
import car10 from "@/assets/cars/car-10.png";

const cars = [
  { image: car1, name: "VW Beetle", year: "1967" },
  { image: car2, name: "VW T1 Bus", year: "1962" },
  { image: car3, name: "Renault 4L", year: "1968" },
  { image: car4, name: "Citroen 2CV", year: "1955" },
  { image: car5, name: "Fiat 500", year: "1970" },
  { image: car6, name: "Mini Cooper", year: "1969" },
  { image: car7, name: "Lancia Integrale", year: "1988" },
  { image: car8, name: "Citroen DS", year: "1972" },
  { image: car9, name: "VW T2 Bus", year: "1975" },
  { image: car10, name: "Citroen Charleston", year: "1981" },
];

const CarsShowcase = () => {
  return (
    <section className="py-20 md:py-32 bg-gray-900 relative overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-gray-900 via-gray-800 to-gray-900" />
      
      {/* Decorative elements */}
      <div className="absolute top-1/4 left-0 w-96 h-96 bg-orange-500/10 rounded-full blur-3xl" />
      <div className="absolute bottom-1/4 right-0 w-80 h-80 bg-orange-600/10 rounded-full blur-3xl" />

      <div className="container mx-auto px-4 relative z-10">
        {/* Header */}
        <div className="text-center mb-16 md:mb-24">
          <h2 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl text-white leading-tight uppercase tracking-tight">
            Os <span className="text-orange-500">Clássicos</span> Que Marcaram
            <br />
            <span className="text-orange-500">Gerações</span>
          </h2>
          <div className="mt-8 flex justify-center gap-2">
            <div className="h-1 w-24 bg-orange-500 rounded-full" />
            <div className="h-1 w-12 bg-orange-500/50 rounded-full" />
            <div className="h-1 w-6 bg-orange-500/30 rounded-full" />
          </div>
        </div>

        {/* Big Cars Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6 md:gap-8 lg:gap-10">
          {cars.map((car, index) => (
            <div 
              key={index}
              className="group relative"
            >
              {/* Car image container */}
              <div className="relative aspect-square flex items-center justify-center p-4">
                {/* Glow effect on hover */}
                <div className="absolute inset-0 bg-orange-500/0 group-hover:bg-orange-500/10 rounded-full blur-2xl transition-all duration-500 scale-75 group-hover:scale-100" />
                
                {/* Car image */}
                <img 
                  src={car.image} 
                  alt={car.name}
                  className="relative w-full h-full object-contain drop-shadow-2xl group-hover:scale-125 group-hover:-translate-y-4 transition-all duration-500 cursor-pointer"
                  style={{ filter: 'drop-shadow(0 20px 40px rgba(0,0,0,0.5))' }}
                />
              </div>

              {/* Car info */}
              <div className="text-center mt-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <p className="text-white text-lg">{car.name}</p>
                <p className="text-orange-500 text-sm">{car.year}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom text */}
        <div className="text-center mt-16 md:mt-24">
          <p className="text-gray-400 text-xl md:text-2xl max-w-3xl mx-auto">
            Cada miniatura é uma <span className="text-orange-500">réplica fiel</span> dos modelos originais, 
            com acabamentos de alta qualidade à escala <span className="text-orange-500">1:60</span>
          </p>
        </div>
      </div>
    </section>
  );
};

export default CarsShowcase;