"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.generateRandomDate = void 0;
function getRandom(min, max) {
    let r = 0;
    if (min === null) {
        r = Math.floor(Math.random() * max);
    }
    else {
        r = Math.floor(Math.random() * (max - min) + min);
    }
    if (r < 10)
        return '0' + r.toString();
    return r.toString();
}
function generateRandomDate(minYear = 2010, maxYear = 2030) {
    let template = 'mm-dd-yyyy';
    let res = template.replace(/mm/g, function (x) {
        return getRandom(null, 12);
    });
    res = res.replace(/dd/g, function (x) {
        return getRandom(null, 31);
    });
    res = res.replace(/yyyy/g, function (x) {
        return getRandom(minYear, maxYear);
    });
    return res;
}
exports.generateRandomDate = generateRandomDate;
//# sourceMappingURL=date.js.map