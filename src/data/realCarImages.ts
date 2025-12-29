// Real car images mapping
import realCar1 from "@/assets/real-cars/real-car-1.png";
import realCar2 from "@/assets/real-cars/real-car-2.png";
import realCar3 from "@/assets/real-cars/real-car-3.png";
import realCar4 from "@/assets/real-cars/real-car-4.png";
import realCar5 from "@/assets/real-cars/real-car-5.png";
import realCar6 from "@/assets/real-cars/real-car-6.png";
import realCar7 from "@/assets/real-cars/real-car-7.png";
import realCar8 from "@/assets/real-cars/real-car-8.png";
import realCar9 from "@/assets/real-cars/real-car-9.png";
import realCar10 from "@/assets/real-cars/real-car-10.png";

const realCarImages: Record<number, string> = {
  1: realCar1,   // VW Beetle
  2: realCar2,   // VW T1 Bus
  3: realCar3,   // Renault 4L
  4: realCar4,   // Citroen 2CV
  5: realCar5,   // Fiat 500
  6: realCar6,   // Mini Cooper 1300
  7: realCar7,   // Lancia Integrale
  8: realCar8,   // Citroen DS
  9: realCar9,   // VW T2 Bus
  10: realCar10, // Citroen Charleston
};

export const getRealCarImage = (carNumber: number): string | undefined => {
  return realCarImages[carNumber];
};

// Check if a real car image exists
export const hasRealCarImage = (carNumber: number): boolean => {
  return !!realCarImages[carNumber];
};
