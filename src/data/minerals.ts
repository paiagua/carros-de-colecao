export interface Car {
  number: number;
  title: string;
  date: string;
  price: string;
}

// Helper function to calculate delivery dates
function calculateDeliveryDates(): string[] {
  const dates: string[] = [];
  let currentDate = new Date(2026, 0, 31); // 31/01/2026

  for (let i = 0; i < 150; i++) {
    const day = String(currentDate.getDate()).padStart(2, '0');
    const month = String(currentDate.getMonth() + 1).padStart(2, '0');
    const year = currentDate.getFullYear();
    dates.push(`${day}/${month}/${year}`);

    if (i < 2) {
      // First 3 deliveries are biweekly (2 weeks apart)
      currentDate.setDate(currentDate.getDate() + 14);
    } else {
      // Rest are weekly
      currentDate.setDate(currentDate.getDate() + 7);
    }
  }

  return dates;
}

const deliveryDates = calculateDeliveryDates();

export const cars: Car[] = [
  { number: 1, title: "VW Beetle Hard Top", date: deliveryDates[0], price: "1,95€" },
  { number: 2, title: "VW T1 Classic Bus", date: deliveryDates[1], price: "5,95€" },
  { number: 3, title: "Renault 4L", date: deliveryDates[2], price: "5,95€" },
  { number: 4, title: "Citroen 2CV", date: deliveryDates[3], price: "5,95€" },
  { number: 5, title: "Fiat 500", date: deliveryDates[4], price: "5,95€" },
  { number: 6, title: "Mini Cooper 1300", date: deliveryDates[5], price: "5,95€" },
  { number: 7, title: "Lancia Integrale", date: deliveryDates[6], price: "5,95€" },
  { number: 8, title: "Citroen DS", date: deliveryDates[7], price: "5,95€" },
  { number: 9, title: "Volkswagen T2 Bus", date: deliveryDates[8], price: "5,95€" },
  { number: 10, title: "Citröen Charleston", date: deliveryDates[9], price: "5,95€" },
  { number: 11, title: "Ford Mustang Coupé", date: deliveryDates[10], price: "5,95€" },
  { number: 12, title: "BMW 2002", date: deliveryDates[11], price: "5,95€" },
  { number: 13, title: "Fiat Topolino", date: deliveryDates[12], price: "5,95€" },
  { number: 14, title: "Renault 5", date: deliveryDates[13], price: "5,95€" },
  { number: 15, title: "Aston Martin 1964 DB5", date: deliveryDates[14], price: "5,95€" },
  { number: 16, title: "Land Rover Defender", date: deliveryDates[15], price: "5,95€" },
  { number: 17, title: "Fiat 600", date: deliveryDates[16], price: "5,95€" },
  { number: 18, title: "Porsche 964", date: deliveryDates[17], price: "5,95€" },
  { number: 19, title: "Citroen 2CV Furgonette", date: deliveryDates[18], price: "5,95€" },
  { number: 20, title: "Audi Quattro", date: deliveryDates[19], price: "5,95€" },
  { number: 21, title: "Peugeot 504", date: deliveryDates[20], price: "5,95€" },
  { number: 22, title: "Citroen Mehari", date: deliveryDates[21], price: "5,95€" },
  { number: 23, title: "SUZUKI Jimny", date: deliveryDates[22], price: "5,95€" },
  { number: 24, title: "Citroën Dyane 6 Nazare", date: deliveryDates[23], price: "5,95€" },
  { number: 25, title: "Mini Cooper New", date: deliveryDates[24], price: "5,95€" },
  { number: 26, title: "Volvo 240 GL", date: deliveryDates[25], price: "5,95€" },
  { number: 27, title: "Fiat 126P", date: deliveryDates[26], price: "5,95€" },
  { number: 28, title: "Trabant 601", date: deliveryDates[27], price: "5,95€" },
  { number: 29, title: "VW Golf GTI", date: deliveryDates[28], price: "5,95€" },
  { number: 30, title: "Renault 8 Gordini", date: deliveryDates[29], price: "5,95€" },
  { number: 31, title: "Mercedes-Benz G-Class", date: deliveryDates[30], price: "5,95€" },
  { number: 32, title: "Ford Capri '69", date: deliveryDates[31], price: "5,95€" },
  { number: 33, title: "Fiat Panda", date: deliveryDates[32], price: "5,95€" },
  { number: 34, title: "Mercedes-Benz 190 SL", date: deliveryDates[33], price: "5,95€" },
  { number: 35, title: "Trabant P50", date: deliveryDates[34], price: "5,95€" },
  { number: 36, title: "Ford Pick-up '51", date: deliveryDates[35], price: "5,95€" },
  { number: 37, title: "Opel Manta", date: deliveryDates[36], price: "5,95€" },
  { number: 38, title: "Citröen Tipo H", date: deliveryDates[37], price: "5,95€" },
  { number: 39, title: "Dacia 1100", date: deliveryDates[38], price: "5,95€" },
  { number: 40, title: "Peugeot 206", date: deliveryDates[39], price: "5,95€" },
  { number: 41, title: "Porsche 356B", date: deliveryDates[40], price: "5,95€" },
  { number: 42, title: "Wartburg 353", date: deliveryDates[41], price: "5,95€" },
  { number: 43, title: "Renault Caravelle", date: deliveryDates[42], price: "5,95€" },
  { number: 44, title: "Škoda 105 L", date: deliveryDates[43], price: "5,95€" },
  { number: 45, title: "Audi A4 2000", date: deliveryDates[44], price: "5,95€" },
  { number: 46, title: "Chevrolet Corvette '57", date: deliveryDates[45], price: "5,95€" },
  { number: 47, title: "Škoda Octavia '59", date: deliveryDates[46], price: "5,95€" },
  { number: 48, title: "Syrena 105", date: deliveryDates[47], price: "5,95€" },
  { number: 49, title: "Alfa Romeo Giulietta", date: deliveryDates[48], price: "5,95€" },
  { number: 50, title: "Jeep Wrangler Rubicon", date: deliveryDates[49], price: "5,95€" },
  { number: 51, title: "Renault 16", date: deliveryDates[50], price: "5,95€" },
  { number: 52, title: "Lamborghini Diablo", date: deliveryDates[51], price: "5,95€" },
  { number: 53, title: "Mercedes-Benz 600 '63", date: deliveryDates[52], price: "5,95€" },
  { number: 54, title: "Opel GT", date: deliveryDates[53], price: "5,95€" },
  { number: 55, title: "BMW M1", date: deliveryDates[54], price: "5,95€" },
  { number: 56, title: "Ford Escort RS Turbo S1", date: deliveryDates[55], price: "5,95€" },
  { number: 57, title: "Porsche 959", date: deliveryDates[56], price: "5,95€" },
  { number: 58, title: "Chevrolet Camaro Z28", date: deliveryDates[57], price: "5,95€" },
  { number: 59, title: "Lotus Esprit Type 79", date: deliveryDates[58], price: "5,95€" },
  { number: 60, title: "Audi 100 Coupé S", date: deliveryDates[59], price: "5,95€" },
  { number: 61, title: "Lamborghini Murciélago", date: deliveryDates[60], price: "5,95€" },
  { number: 62, title: "BMW M3 (E30)", date: deliveryDates[61], price: "5,95€" },
  { number: 63, title: "Mitsubishi Pajero", date: deliveryDates[62], price: "5,95€" },
  { number: 64, title: "Honda Integra Type R", date: deliveryDates[63], price: "5,95€" },
  { number: 65, title: "Porsche 550 Spyder", date: deliveryDates[64], price: "5,95€" },
  { number: 66, title: "Renault 12", date: deliveryDates[65], price: "5,95€" },
  { number: 67, title: "Subaru Impreza WRX STI", date: deliveryDates[66], price: "5,95€" },
  { number: 68, title: "Chevrolet Corvette '82", date: deliveryDates[67], price: "5,95€" },
  { number: 69, title: "Nissan Skyline GT-R (R34)", date: deliveryDates[68], price: "5,95€" },
  { number: 70, title: "Lotus Elan '65", date: deliveryDates[69], price: "5,95€" },
  { number: 71, title: "SEAT 600", date: deliveryDates[70], price: "5,95€" },
  { number: 72, title: "Fiat 125p", date: deliveryDates[71], price: "5,95€" },
  { number: 73, title: "Škoda 100", date: deliveryDates[72], price: "5,95€" },
  { number: 74, title: "Mitsubishi Lancer Evolution VIII", date: deliveryDates[73], price: "5,95€" },
  { number: 75, title: "Toyota Supra", date: deliveryDates[74], price: "5,95€" },
  { number: 76, title: "McLaren GT", date: deliveryDates[75], price: "5,95€" },
  { number: 77, title: "Chevrolet Corvette '63", date: deliveryDates[76], price: "5,95€" },
  { number: 78, title: "Lotus Emira", date: deliveryDates[77], price: "5,95€" },
  { number: 79, title: "Pagani Huayra", date: deliveryDates[78], price: "5,95€" },
  { number: 80, title: "Honda NSX", date: deliveryDates[79], price: "5,95€" },
  { number: 81, title: "Lamborghini Gallardo LP 560-4", date: deliveryDates[80], price: "5,95€" },
  { number: 82, title: "Trabant P601 Kombi", date: deliveryDates[81], price: "5,95€" },
  { number: 83, title: "VW Santana", date: deliveryDates[82], price: "5,95€" },
  { number: 84, title: "Mercedes-Benz 300 S", date: deliveryDates[83], price: "5,95€" },
  { number: 85, title: "Austin FX4 London Taxi", date: deliveryDates[84], price: "5,95€" },
  { number: 86, title: "Škoda Favorit", date: deliveryDates[85], price: "5,95€" },
  { number: 87, title: "Dacia 1300", date: deliveryDates[86], price: "5,95€" },
  { number: 88, title: "Buick GSX '70", date: deliveryDates[87], price: "5,95€" },
  { number: 89, title: "Pontiac Firebird '67", date: deliveryDates[88], price: "5,95€" },
  { number: 90, title: "FSO Polonez Caro", date: deliveryDates[89], price: "5,95€" },
  { number: 91, title: "Toyota Corolla", date: deliveryDates[90], price: "5,95€" },
  { number: 92, title: "Mercedes-Benz 300 SL", date: deliveryDates[91], price: "5,95€" },
  { number: 93, title: "Alfa Romeo 4C", date: deliveryDates[92], price: "5,95€" },
  { number: 94, title: "McLaren 675LT Coupé", date: deliveryDates[93], price: "5,95€" },
  { number: 95, title: "Chevrolet Chevelle SS 454 '71", date: deliveryDates[94], price: "5,95€" },
  { number: 96, title: "Porsche 911 GT3 RS (992)", date: deliveryDates[95], price: "5,95€" },
  { number: 97, title: "Ford Mustang GT 2024", date: deliveryDates[96], price: "5,95€" },
  { number: 98, title: "Honda Civic", date: deliveryDates[97], price: "5,95€" },
  { number: 99, title: "Volkswagen Golf V", date: deliveryDates[98], price: "5,95€" },
  { number: 100, title: "Maserati GranTurismo 2023", date: deliveryDates[99], price: "5,95€" },
  // Cars 101-150: Coming soon
  ...Array.from({ length: 50 }, (_, i) => ({
    number: i + 101,
    title: "Em breve disponível o modelo do carro",
    date: deliveryDates[i + 100],
    price: "5,95€"
  }))
];

// Keep minerals export for backward compatibility
export const minerals = cars;
