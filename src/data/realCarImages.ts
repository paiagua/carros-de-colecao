// Real car images mapping
// When you have real car photos, import them here and add to the mapping
// Example:
// import realCar1 from "@/assets/real-cars/real-car-1.jpg";

const realCarImages: Record<number, string | undefined> = {
  // Add real car images here when available
  // 1: realCar1,
  // 2: realCar2,
  // etc.
};

export const getRealCarImage = (carNumber: number): string | undefined => {
  return realCarImages[carNumber];
};

// Check if a real car image exists
export const hasRealCarImage = (carNumber: number): boolean => {
  return !!realCarImages[carNumber];
};
