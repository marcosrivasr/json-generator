"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.generateRandomFullName = exports.generateRandomLastName = exports.generateRandomFirstName = void 0;
const fs_1 = require("fs");
const path_1 = require("path");
function loadFile(filename) {
    const content = fs_1.readFileSync(filename, 'utf-8');
    return JSON.parse(content);
}
function capitalizeFirstLetter(string) {
    if (typeof string == undefined)
        return '';
    var firstLetter = string[0] || string.charAt(0);
    return firstLetter ? firstLetter.toUpperCase() + string.slice(1) : '';
}
function generateRandomFirstName() {
    const filename = path_1.join(__dirname, '/data/names.json');
    const json = loadFile(filename);
    const rnd = Math.floor(Math.random() * json.length);
    const text = capitalizeFirstLetter(json[rnd].toLowerCase());
    return text;
}
exports.generateRandomFirstName = generateRandomFirstName;
function generateRandomLastName() {
    const filename = path_1.join(__dirname, '/data/lastnames.json');
    const json = loadFile(filename);
    const rnd = Math.floor(Math.random() * json.length);
    const text = capitalizeFirstLetter(json[rnd].toLowerCase());
    return text;
}
exports.generateRandomLastName = generateRandomLastName;
function generateRandomFullName() {
    return generateRandomFirstName() + ' ' + generateRandomLastName();
}
exports.generateRandomFullName = generateRandomFullName;
//# sourceMappingURL=names.js.map