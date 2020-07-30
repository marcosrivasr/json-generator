"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function generateRandomAge(min = 1, max = 80) {
    if (min < 0 || max < 0 || (min > max))
        throw new Error('Error with the range');
    return Math.floor(Math.random() * (max - min) + min);
}
exports.default = generateRandomAge;
//# sourceMappingURL=age.js.map