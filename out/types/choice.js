"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.generateRandomChoice = void 0;
function generateRandomChoice(args) {
    if (args.length === 0)
        return '';
    if (args.length === 1)
        return args[0];
    const n = (Math.floor(Math.random() * args.length) + 1) - 1;
    return args[n];
}
exports.generateRandomChoice = generateRandomChoice;
//# sourceMappingURL=choice.js.map