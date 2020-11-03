"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getRandomCountry = exports.getRandomCity = void 0;
const fs_1 = require("fs");
function loadFile(filename) {
    const content = fs_1.readFileSync(filename, 'utf-8');
    return JSON.parse(content);
}
function getRandomCity() {
    const rnd = Math.floor(Math.random() * data.length);
    return data[rnd]['city'];
}
exports.getRandomCity = getRandomCity;
function getRandomCountry() {
    const rnd = Math.floor(Math.random() * data.length);
    return data[rnd]['country'];
}
exports.getRandomCountry = getRandomCountry;
const data = [
    { "city": "London", "country": "United Kingdom" },
    { "city": "Paris", "country": "France" },
    { "city": "Barcelona", "country": "Spain" },
    { "city": "Moscow", "country": "Rusia" },
    { "city": "Chicago", "country": "United States" },
    { "city": "Singapore", "country": "Singapore" },
    { "city": "Dubai", "country": "United Arab Emirates" },
    { "city": "San Francisco", "country": "United States" },
    { "city": "Madrid", "country": "Spain" },
    { "city": "Amsterdam", "country": "Netherlands" },
    { "city": "Los Angeles", "country": "United States" },
    { "city": "Rome", "country": "Italy" },
    { "city": "Boston", "country": "United States" },
    { "city": "Mexico City", "country": "Mexico" },
    { "city": "San Jose", "country": "United States" },
    { "city": "Toronto", "country": "Canada" },
    { "city": "Zurich", "country": "Switzerland" },
    { "city": "Hong Kong", "country": "Hong Kong" },
    { "city": "Beijing", "country": "China" },
    { "city": "Berlin", "country": "Germany" },
    { "city": "Sydney", "country": "Australia" },
    { "city": "Las Vegas", "country": "United States" },
    { "city": "Frankfurt", "country": "Germany" }
];
//# sourceMappingURL=cities.js.map