"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const names_1 = require("./types/names");
const age_1 = __importDefault(require("./types/age"));
const number_1 = require("./types/number");
const phone_1 = __importDefault(require("./types/phone"));
const creditcard_1 = __importDefault(require("./types/creditcard"));
const date_1 = require("./types/date");
const id_1 = require("./types/id");
const boolean_1 = require("./types/boolean");
class TypeFactory {
    constructor() {
        this.id = 0;
    }
    getDataValue(key, type) {
        switch (type) {
            case 'id':
                return [key, id_1.generateRandomId()];
                break;
            case 'index':
                const id = this.id;
                this.id++;
                return [key, id_1.generateRandomIndex(id)];
                break;
            case 'uuid':
                return [key, id_1.generateRandomUUID()];
                break;
            case 'number':
                return [key, number_1.generateRandomNumber()];
                break;
            case 'first-name':
                return [key, names_1.generateRandomFirstName()];
                break;
            case 'last-name':
                return [key, names_1.generateRandomLastName()];
                break;
            case 'age':
                return [key, age_1.default()];
                break;
            case 'phone':
                return [key, phone_1.default()];
                break;
            case 'decimal':
                return [key, number_1.generateRandomDecimal()];
                break;
            case 'price':
                return [key, number_1.generateRandomPrice()];
                break;
            case 'credit-card':
                return [key, creditcard_1.default()];
                break;
            case 'date':
                return [key, date_1.generateRandomDate()];
                break;
            case 'boolean':
                return [key, boolean_1.generateRandomBoolean()];
                break;
            default:
                return ['', ''];
        }
    }
}
exports.default = TypeFactory;
//# sourceMappingURL=typeFactory.js.map