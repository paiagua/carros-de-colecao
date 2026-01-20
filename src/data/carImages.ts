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
import car23 from "@/assets/cars/car-23.png";

const carImages: Record<number, string> = {
  1: car1,
  2: car2,
  3: car3,
  4: car4,
  5: car5,
  6: car6,
  7: car7,
  8: car8,
  9: car9,
  10: car10,
  23: car23,
};

export const getCarImage = (carNumber: number): string | undefined => {
  return carImages[carNumber];
};
