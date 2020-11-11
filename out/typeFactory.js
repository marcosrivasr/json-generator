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
const choice_1 = require("./types/choice");
const lorem_1 = require("./types/lorem");
const cities_1 = require("./types/cities");
class TypeFactory {
    constructor() {
        this.id = 0;
    }
    /**
     *
     * @param key name of the parameter
     * @param type data type with arguments
     */
    getDataValue(key, func) {
        const inputs = func.split(' ');
        const type = inputs[0];
        inputs.shift();
        const args = inputs;
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
            case 'full-name':
                return [key, names_1.generateRandomFullName()];
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
            case 'choice':
                return [key, choice_1.generateRandomChoice(args)];
                break;
            case 'title':
                return [key, lorem_1.generateRandomTitle()];
                break;
            case 'paragraph':
                return [key, lorem_1.generateRandomParagraph()];
                break;
            case 'city':
                return [key, cities_1.getRandomCity()];
                break;
            case 'country':
                return [key, cities_1.getRandomCountry()];
                break;
            default:
                throw new Error('Data type ${inputs[0]} not recorgnized');
        }
    }
}
exports.default = TypeFactory;
//# sourceMappingURL=typeFactory.js.map