"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const fs_1 = require("fs");
const typeFactory_1 = __importDefault(require("./typeFactory"));
class Generator {
    constructor(filename) {
        this.output = [];
        this.filecontent = '';
        this.filecontent = JSON.parse(fs_1.readFileSync(filename, 'utf8'));
        this.factory = new typeFactory_1.default();
    }
    generateJSON(filename) {
        this.output = this.parse(this.filecontent, this.factory);
        const finalJSON = Object.fromEntries(this.output);
        fs_1.writeFileSync(filename, JSON.stringify(finalJSON, null, "\t"), "UTF-8");
    }
    parse(json, factory) {
        const keys = Object.keys(json);
        let res = [];
        keys.forEach(key => {
            const type = json[key];
            if (typeof type === 'string') {
                res.push(factory.getDataValue(key, type));
            }
            else if (typeof type === 'object') {
                const subobj = type;
                let subfactory = new typeFactory_1.default();
                if (!Array.isArray(type)) {
                    res.push([key, Object.fromEntries(this.parse(subobj, subfactory))]);
                }
                else {
                    const settings = subobj[0];
                    const obj = subobj[1];
                    const repeat = settings['repeat'];
                    let temp = [];
                    for (let i = 1; i <= repeat; i++) {
                        temp.push(Object.fromEntries(this.parse(obj, subfactory)));
                    }
                    res.push([key, temp]);
                }
            }
        });
        return res;
    }
}
exports.default = Generator;
//# sourceMappingURL=generator.js.map