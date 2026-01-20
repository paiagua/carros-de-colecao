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
import car11 from "@/assets/cars/car-11.png";
import car12 from "@/assets/cars/car-12.png";
import car13 from "@/assets/cars/car-13.png";
import car14 from "@/assets/cars/car-14.png";
import car15 from "@/assets/cars/car-15.png";
import car16 from "@/assets/cars/car-16.png";
import car17 from "@/assets/cars/car-17.png";
import car18 from "@/assets/cars/car-18.png";
import car19 from "@/assets/cars/car-19.png";
import car20 from "@/assets/cars/car-20.png";
import car21 from "@/assets/cars/car-21.png";
import car22 from "@/assets/cars/car-22.png";
import car23 from "@/assets/cars/car-23.png";
import car24 from "@/assets/cars/car-24.png";
import car25 from "@/assets/cars/car-25.png";
import car26 from "@/assets/cars/car-26.png";
import car27 from "@/assets/cars/car-27.png";
import car28 from "@/assets/cars/car-28.png";
import car29 from "@/assets/cars/car-29.png";
import car30 from "@/assets/cars/car-30.png";

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
  11: car11,
  12: car12,
  13: car13,
  14: car14,
  15: car15,
  16: car16,
  17: car17,
  18: car18,
  19: car19,
  20: car20,
  21: car21,
  22: car22,
  23: car23,
  24: car24,
  25: car25,
  26: car26,
  27: car27,
  28: car28,
  29: car29,
  30: car30,
};

export const getCarImage = (carNumber: number): string | undefined => {
  return carImages[carNumber];
};
