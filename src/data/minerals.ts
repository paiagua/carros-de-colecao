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
  { number: 1, title: "VW Beetle Hard Top", date: deliveryDates[0], price: "5,95€" },
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
  // Cars 26-150: Coming soon
  ...Array.from({ length: 125 }, (_, i) => ({
    number: i + 26,
    title: "Em breve disponível o modelo do carro",
    date: deliveryDates[i + 25],
    price: "5,95€"
  }))
];

// Keep minerals export for backward compatibility
export const minerals = cars;
