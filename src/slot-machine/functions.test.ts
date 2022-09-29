import {
  getConsecutiveFruitsFromSpin,
  getCoinsFromSpin,
  spin,
} from "./functions";
import { FRUIT, Spin } from "./types";

describe("getConsecutiveFruitsFromSpin", () => {
  it("should return 3 cherries", () => {
    const spin: Spin = [FRUIT.CHERRY, FRUIT.CHERRY, FRUIT.CHERRY];
    const result = getConsecutiveFruitsFromSpin(spin);

    expect(result).toMatchObject({
      [FRUIT.CHERRY]: 3,
    });
  });

  it("should return 2 apples and 1 lemon", () => {
    const spin: Spin = [FRUIT.APPLE, FRUIT.APPLE, FRUIT.LEMON];
    const result = getConsecutiveFruitsFromSpin(spin);

    expect(result).toMatchObject({
      [FRUIT.APPLE]: 2,
      [FRUIT.LEMON]: 1,
    });
  });

  it("should return 1 banana, 1 lemon, and 1 cherry", () => {
    const spin: Spin = [FRUIT.BANANA, FRUIT.LEMON, FRUIT.CHERRY];
    const result = getConsecutiveFruitsFromSpin(spin);

    expect(result).toMatchObject({
      [FRUIT.BANANA]: 1,
      [FRUIT.LEMON]: 1,
      [FRUIT.CHERRY]: 1,
    });
  });
});

describe("getCoinsFromSpin", () => {
  it("should return 50", () => {
    const spin: Spin = [FRUIT.CHERRY, FRUIT.CHERRY, FRUIT.CHERRY];
    const coins = getCoinsFromSpin(spin);

    expect(coins).toEqual(50);
  });

  it("should return 0", () => {
    const spin: Spin = [FRUIT.CHERRY, FRUIT.APPLE, FRUIT.CHERRY];
    const coins = getCoinsFromSpin(spin);

    expect(coins).toEqual(0);
  });
});

describe("spin", () => {
  it("should the give the result of the spin and the coins won by the player", () => {
    const result = spin();

    expect(result.spin).toHaveLength(3);
    expect(typeof result.coins === "number").toBe(true);
  });
});
