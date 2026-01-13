export interface Car {
  number: number;
  title: string;
  date: string;
  price: string;
}

export const cars: Car[] = [
  { number: 1, title: "VW Beetle Hard Top", date: "31/01/2026", price: "5,95€" },
  { number: 2, title: "VW T1 Classic Bus", date: "14/02/2026", price: "5,95€" },
  { number: 3, title: "Renault 4L", date: "28/02/2026", price: "5,95€" },
  { number: 4, title: "Citroen 2CV", date: "07/03/2026", price: "5,95€" },
  { number: 5, title: "Fiat 500", date: "14/03/2026", price: "5,95€" },
  { number: 6, title: "Mini Cooper 1300", date: "21/03/2026", price: "5,95€" },
  { number: 7, title: "Lancia Integrale", date: "28/03/2026", price: "5,95€" },
  { number: 8, title: "Citroen DS", date: "04/04/2026", price: "5,95€" },
  { number: 9, title: "Volkswagen T2 Bus", date: "11/04/2026", price: "5,95€" },
  { number: 10, title: "Citröen Charleston", date: "18/04/2026", price: "5,95€" },
  { number: 11, title: "Ford Mustang Coupé", date: "25/04/2026", price: "5,95€" },
  { number: 12, title: "BMW 2002", date: "02/05/2026", price: "5,95€" },
  { number: 13, title: "Fiat Topolino", date: "09/05/2026", price: "5,95€" },
  { number: 14, title: "Renault 5", date: "16/05/2026", price: "5,95€" },
  { number: 15, title: "Aston Martin 1964 DB5", date: "23/05/2026", price: "5,95€" },
  { number: 16, title: "Land Rover Defender", date: "30/05/2026", price: "5,95€" },
  { number: 17, title: "Fiat 600", date: "06/06/2026", price: "5,95€" },
  { number: 18, title: "Porsche 964", date: "13/06/2026", price: "5,95€" },
  { number: 19, title: "Citroen 2CV Furgonette", date: "20/06/2026", price: "5,95€" },
  { number: 20, title: "Audi Quattro", date: "27/06/2026", price: "5,95€" },
  { number: 21, title: "Peugeot 504", date: "04/07/2026", price: "5,95€" },
  { number: 22, title: "Citroen Mehari", date: "11/07/2026", price: "5,95€" },
  { number: 23, title: "SUZUKI Jimny", date: "18/07/2026", price: "5,95€" },
  { number: 24, title: "Citroën Dyane 6 Nazare", date: "25/07/2026", price: "5,95€" },
  { number: 25, title: "Mini Cooper New", date: "01/08/2026", price: "5,95€" },
];

// Keep minerals export for backward compatibility
export const minerals = cars;
