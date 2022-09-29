import { Fruit, Reel, Spin, FRUIT } from "./types";

const reelOne: Reel = [
  FRUIT.CHERRY,
  FRUIT.LEMON,
  FRUIT.APPLE,
  FRUIT.LEMON,
  FRUIT.BANANA,
  FRUIT.BANANA,
  FRUIT.LEMON,
  FRUIT.LEMON,
];
const reelTwo: Reel = [
  FRUIT.LEMON,
  FRUIT.APPLE,
  FRUIT.LEMON,
  FRUIT.LEMON,
  FRUIT.CHERRY,
  FRUIT.APPLE,
  FRUIT.BANANA,
  FRUIT.LEMON,
];
const reelThree: Reel = [
  FRUIT.LEMON,
  FRUIT.APPLE,
  FRUIT.LEMON,
  FRUIT.APPLE,
  FRUIT.CHERRY,
  FRUIT.LEMON,
  FRUIT.BANANA,
  FRUIT.LEMON,
];

const reels: Reel[] = [reelOne, reelTwo, reelThree];

export const getConsecutiveFruitsFromSpin = (
  spin: Spin
): {
  [key in Fruit]?: number;
} => {
  let result = {};
  let counter = 1;

  for (let i = 0; i < spin.length; i++) {
    const fruit = spin[i];
    const nextFruit = spin[i + 1];
    if (fruit === nextFruit) {
      counter++;
    } else {
      result = {
        ...result,
        [fruit]: counter,
      };
      counter = 1;
    }
  }

  return result;
};

export const getCoinsFromSpin = (spin: Spin): number => {
  const consecutiveFruits = getConsecutiveFruitsFromSpin(spin);

  const { cherry, apple, banana, lemon } = consecutiveFruits;

  if (cherry === 3) {
    return 50;
  }

  if (cherry === 2) {
    return 40;
  }

  if (apple === 3) {
    return 20;
  }

  if (apple === 2) {
    return 10;
  }

  if (banana === 3) {
    return 15;
  }

  if (banana === 2 || lemon === 3) {
    return 5;
  }

  return 0;
};

export const getRandomFruitFromReel = (reel: Reel) => {
  return reel[Math.floor(Math.random() * reel.length)];
};

export const spin = (): {
  spin: Spin;
  coins: number;
} => {
  const spin: Fruit[] = [];

  reels.forEach((reel) => {
    const fruit = getRandomFruitFromReel(reel);
    spin.push(fruit);
  });

  return {
    spin: spin as Spin,
    coins: getCoinsFromSpin(spin as Spin),
  };
};
