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
  { number: 31, title: "Mercedes Benz G-Class", date: deliveryDates[30], price: "5,95€" },
  { number: 32, title: "Ford Capri '69", date: deliveryDates[31], price: "5,95€" },
  { number: 33, title: "Fiat Panda", date: deliveryDates[32], price: "5,95€" },
  { number: 34, title: "Mercedes 190 SL", date: deliveryDates[33], price: "5,95€" },
  { number: 35, title: "Trabant P50", date: deliveryDates[34], price: "5,95€" },
  { number: 36, title: "Ford Pick-up '51", date: deliveryDates[35], price: "5,95€" },
  { number: 37, title: "Opel Manta", date: deliveryDates[36], price: "5,95€" },
  { number: 38, title: "Citröen Tipo H", date: deliveryDates[37], price: "5,95€" },
  { number: 39, title: "Dacia 1100", date: deliveryDates[38], price: "5,95€" },
  { number: 40, title: "Peugeot 206", date: deliveryDates[39], price: "5,95€" },
  { number: 41, title: "Porsche 356B", date: deliveryDates[40], price: "5,95€" },
  { number: 42, title: "Wartburg 353", date: deliveryDates[41], price: "5,95€" },
  // Cars 43-150: Coming soon
  ...Array.from({ length: 108 }, (_, i) => ({
    number: i + 43,
    title: "Em breve disponível o modelo do carro",
    date: deliveryDates[i + 42],
    price: "5,95€"
  }))
];

// Keep minerals export for backward compatibility
export const minerals = cars;
