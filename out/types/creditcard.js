"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function generateRandomCreditCardNumber(template = 'xxxx-xxxx-xxxx-xxxx') {
    var res = template.replace(/x/g, function (x) {
        return (Math.floor(Math.random() * 9)).toString();
    });
    return res;
}
exports.default = generateRandomCreditCardNumber;
//# sourceMappingURL=creditcard.js.map