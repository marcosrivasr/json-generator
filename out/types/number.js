"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.generateRandomPrice = exports.generateRandomDecimal = exports.generateRandomNumber = void 0;
function generateRandomNumber(min = 0, max = 10000) {
    if (min < 0 || max < 0 || (min > max))
        throw new Error('Error: ranged');
    return Math.floor(Math.random() * (max - min) + min);
}
exports.generateRandomNumber = generateRandomNumber;
function generateRandomDecimal(min = 0, max = 10000, decimals = 3) {
    if (min < 0 || max < 0 || (min > max))
        throw new Error('Error: ranged');
    return parseFloat((Math.random() * (1000 - 0)).toFixed(decimals));
}
exports.generateRandomDecimal = generateRandomDecimal;
function generateRandomPrice(symbol = '$', min = 0, max = 10000) {
    return symbol + generateRandomDecimal(min, max, 2);
}
exports.generateRandomPrice = generateRandomPrice;
//# sourceMappingURL=number.js.map