"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.generateRandomIndex = exports.generateRandomId = exports.generateRandomUUID = void 0;
const uuid_1 = require("uuid");
function generateRandomUUID() {
    return uuid_1.v4();
}
exports.generateRandomUUID = generateRandomUUID;
function generateRandomId() {
    return 'xxxxxxxxxxxxxxxxxxx'.replace(/x/g, function (x) {
        return Math.floor(Math.random() * 9).toString();
    });
}
exports.generateRandomId = generateRandomId;
function generateRandomIndex(index) {
    return index.toString();
}
exports.generateRandomIndex = generateRandomIndex;
//# sourceMappingURL=id.js.map