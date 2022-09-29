export const FRUIT = {
  CHERRY: "cherry",
  LEMON: "lemon",
  APPLE: "apple",
  BANANA: "banana",
} as const;

const fruits = Object.values(FRUIT);
export type Fruit = typeof fruits[number];
export type Reel = Fruit[];
export type Spin = [Fruit, Fruit, Fruit];
