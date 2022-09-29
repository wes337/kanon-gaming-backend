"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.spin = exports.getRandomFruitFromReel = exports.getCoinsFromSpin = exports.getConsecutiveFruitsFromSpin = void 0;
const types_1 = require("./types");
const reelOne = [
    types_1.FRUIT.CHERRY,
    types_1.FRUIT.LEMON,
    types_1.FRUIT.APPLE,
    types_1.FRUIT.LEMON,
    types_1.FRUIT.BANANA,
    types_1.FRUIT.BANANA,
    types_1.FRUIT.LEMON,
    types_1.FRUIT.LEMON,
];
const reelTwo = [
    types_1.FRUIT.LEMON,
    types_1.FRUIT.APPLE,
    types_1.FRUIT.LEMON,
    types_1.FRUIT.LEMON,
    types_1.FRUIT.CHERRY,
    types_1.FRUIT.APPLE,
    types_1.FRUIT.BANANA,
    types_1.FRUIT.LEMON,
];
const reelThree = [
    types_1.FRUIT.LEMON,
    types_1.FRUIT.APPLE,
    types_1.FRUIT.LEMON,
    types_1.FRUIT.APPLE,
    types_1.FRUIT.CHERRY,
    types_1.FRUIT.LEMON,
    types_1.FRUIT.BANANA,
    types_1.FRUIT.LEMON,
];
const reels = [reelOne, reelTwo, reelThree];
const getConsecutiveFruitsFromSpin = (spin) => {
    let result = {};
    let counter = 1;
    for (let i = 0; i < spin.length; i++) {
        const fruit = spin[i];
        const nextFruit = spin[i + 1];
        if (fruit === nextFruit) {
            counter++;
        }
        else {
            result = Object.assign(Object.assign({}, result), { [fruit]: counter });
            counter = 1;
        }
    }
    return result;
};
exports.getConsecutiveFruitsFromSpin = getConsecutiveFruitsFromSpin;
const getCoinsFromSpin = (spin) => {
    const consecutiveFruits = (0, exports.getConsecutiveFruitsFromSpin)(spin);
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
exports.getCoinsFromSpin = getCoinsFromSpin;
const getRandomFruitFromReel = (reel) => {
    return reel[Math.floor(Math.random() * reel.length)];
};
exports.getRandomFruitFromReel = getRandomFruitFromReel;
const spin = () => {
    const spin = [];
    reels.forEach((reel) => {
        const fruit = (0, exports.getRandomFruitFromReel)(reel);
        spin.push(fruit);
    });
    return {
        spin: spin,
        coins: (0, exports.getCoinsFromSpin)(spin),
    };
};
exports.spin = spin;
