"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function generateRandomPhone(template = '(xxx) xxx-xxxx') {
    var res = template.replace(/x/g, function (x) {
        return (Math.floor(Math.random() * 9)).toString();
    });
    return res;
}
exports.default = generateRandomPhone;
//# sourceMappingURL=phone.js.map