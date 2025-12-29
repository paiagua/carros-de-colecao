// Mineral cover images - only 1-80 available (except 61, 62)
import mineral1 from "@/assets/minerals/mineral-1.jpg";
import mineral2 from "@/assets/minerals/mineral-2.jpg";
import mineral3 from "@/assets/minerals/mineral-3.jpg";
import mineral4 from "@/assets/minerals/mineral-4.jpg";
import mineral5 from "@/assets/minerals/mineral-5.jpg";
import mineral6 from "@/assets/minerals/mineral-6.jpg";
import mineral7 from "@/assets/minerals/mineral-7.jpg";
import mineral8 from "@/assets/minerals/mineral-8.jpg";
import mineral9 from "@/assets/minerals/mineral-9.jpg";
import mineral10 from "@/assets/minerals/mineral-10.jpg";
import mineral11 from "@/assets/minerals/mineral-11.jpg";
import mineral12 from "@/assets/minerals/mineral-12.jpg";
import mineral13 from "@/assets/minerals/mineral-13.jpg";
import mineral14 from "@/assets/minerals/mineral-14.jpg";
import mineral15 from "@/assets/minerals/mineral-15.jpg";
import mineral16 from "@/assets/minerals/mineral-16.jpg";
import mineral17 from "@/assets/minerals/mineral-17.jpg";
import mineral18 from "@/assets/minerals/mineral-18.jpg";
import mineral19 from "@/assets/minerals/mineral-19.jpg";
import mineral20 from "@/assets/minerals/mineral-20.jpg";
import mineral21 from "@/assets/minerals/mineral-21.jpg";
import mineral22 from "@/assets/minerals/mineral-22.jpg";
import mineral23 from "@/assets/minerals/mineral-23.jpg";
import mineral24 from "@/assets/minerals/mineral-24.jpg";
import mineral25 from "@/assets/minerals/mineral-25.jpg";
import mineral26 from "@/assets/minerals/mineral-26.jpg";
import mineral27 from "@/assets/minerals/mineral-27.jpg";
import mineral28 from "@/assets/minerals/mineral-28.jpg";
import mineral29 from "@/assets/minerals/mineral-29.jpg";
import mineral30 from "@/assets/minerals/mineral-30.jpg";
import mineral31 from "@/assets/minerals/mineral-31.jpg";
import mineral32 from "@/assets/minerals/mineral-32.jpg";
import mineral33 from "@/assets/minerals/mineral-33.jpg";
import mineral34 from "@/assets/minerals/mineral-34.jpg";
import mineral35 from "@/assets/minerals/mineral-35.jpg";
import mineral36 from "@/assets/minerals/mineral-36.jpg";
import mineral37 from "@/assets/minerals/mineral-37.jpg";
import mineral38 from "@/assets/minerals/mineral-38.jpg";
import mineral39 from "@/assets/minerals/mineral-39.jpg";
import mineral40 from "@/assets/minerals/mineral-40.jpg";
import mineral41 from "@/assets/minerals/mineral-41.jpg";
import mineral42 from "@/assets/minerals/mineral-42.jpg";
import mineral43 from "@/assets/minerals/mineral-43.jpg";
import mineral44 from "@/assets/minerals/mineral-44.jpg";
import mineral45 from "@/assets/minerals/mineral-45.jpg";
import mineral46 from "@/assets/minerals/mineral-46.jpg";
import mineral47 from "@/assets/minerals/mineral-47.jpg";
import mineral48 from "@/assets/minerals/mineral-48.jpg";
import mineral49 from "@/assets/minerals/mineral-49.jpg";
import mineral50 from "@/assets/minerals/mineral-50.jpg";
import mineral51 from "@/assets/minerals/mineral-51.jpg";
import mineral52 from "@/assets/minerals/mineral-52.jpg";
import mineral53 from "@/assets/minerals/mineral-53.jpg";
import mineral54 from "@/assets/minerals/mineral-54.jpg";
import mineral55 from "@/assets/minerals/mineral-55.jpg";
import mineral56 from "@/assets/minerals/mineral-56.jpg";
import mineral57 from "@/assets/minerals/mineral-57.jpg";
import mineral58 from "@/assets/minerals/mineral-58.jpg";
import mineral59 from "@/assets/minerals/mineral-59.jpg";
import mineral60 from "@/assets/minerals/mineral-60.jpg";
import mineral63 from "@/assets/minerals/mineral-63.jpg";
import mineral64 from "@/assets/minerals/mineral-64.jpg";
import mineral65 from "@/assets/minerals/mineral-65.jpg";
import mineral66 from "@/assets/minerals/mineral-66.jpg";
import mineral67 from "@/assets/minerals/mineral-67.jpg";
import mineral68 from "@/assets/minerals/mineral-68.jpg";
import mineral69 from "@/assets/minerals/mineral-69.jpg";
import mineral70 from "@/assets/minerals/mineral-70.jpg";
import mineral71 from "@/assets/minerals/mineral-71.jpg";
import mineral72 from "@/assets/minerals/mineral-72.jpg";
import mineral73 from "@/assets/minerals/mineral-73.jpg";
import mineral74 from "@/assets/minerals/mineral-74.jpg";
import mineral75 from "@/assets/minerals/mineral-75.jpg";
import mineral76 from "@/assets/minerals/mineral-76.jpg";
import mineral77 from "@/assets/minerals/mineral-77.jpg";
import mineral78 from "@/assets/minerals/mineral-78.jpg";
import mineral79 from "@/assets/minerals/mineral-79.jpg";
import mineral80 from "@/assets/minerals/mineral-80.jpg";

export const mineralImages: Record<number, string> = {
  1: mineral1,
  2: mineral2,
  3: mineral3,
  4: mineral4,
  5: mineral5,
  6: mineral6,
  7: mineral7,
  8: mineral8,
  9: mineral9,
  10: mineral10,
  11: mineral11,
  12: mineral12,
  13: mineral13,
  14: mineral14,
  15: mineral15,
  16: mineral16,
  17: mineral17,
  18: mineral18,
  19: mineral19,
  20: mineral20,
  21: mineral21,
  22: mineral22,
  23: mineral23,
  24: mineral24,
  25: mineral25,
  26: mineral26,
  27: mineral27,
  28: mineral28,
  29: mineral29,
  30: mineral30,
  31: mineral31,
  32: mineral32,
  33: mineral33,
  34: mineral34,
  35: mineral35,
  36: mineral36,
  37: mineral37,
  38: mineral38,
  39: mineral39,
  40: mineral40,
  41: mineral41,
  42: mineral42,
  43: mineral43,
  44: mineral44,
  45: mineral45,
  46: mineral46,
  47: mineral47,
  48: mineral48,
  49: mineral49,
  50: mineral50,
  51: mineral51,
  52: mineral52,
  53: mineral53,
  54: mineral54,
  55: mineral55,
  56: mineral56,
  57: mineral57,
  58: mineral58,
  59: mineral59,
  60: mineral60,
  63: mineral63,
  64: mineral64,
  65: mineral65,
  66: mineral66,
  67: mineral67,
  68: mineral68,
  69: mineral69,
  70: mineral70,
  71: mineral71,
  72: mineral72,
  73: mineral73,
  74: mineral74,
  75: mineral75,
  76: mineral76,
  77: mineral77,
  78: mineral78,
  79: mineral79,
  80: mineral80,
};

export const getMineralImage = (number: number): string | undefined => {
  return mineralImages[number];
};
