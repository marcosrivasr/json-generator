import {readFileSync, readFile,writeFileSync} from 'fs';
import { v4 as uuidv4 } from 'uuid';
import {generateRandomFirstName, generateRandomLastName} from './types/names';
import generateRandomAge from './types/age';
import {generateRandomNumber, generateRandomDecimal, generateRandomPrice} from './types/number';
import generateRandomPhone from './types/phone';
import generateRandomCreditCardNumber from './types/creditcard';
import {generateRandomDate} from './types/date';

import TypeFactory from './typeFactory';

const json = JSON.parse(readFileSync('template.json', 'utf8'));

let res = [];
res = parse(json);

const finalJSON = Object.fromEntries(res);

writeFileSync('./output.json', JSON.stringify(finalJSON,null,"\t"), "UTF-8");




function parse(json:any):[string, string|number][]{
    const keys:string[] = Object.keys(json);
    let res:[string, any][] = [];
    let factory = new TypeFactory();
    
    keys.forEach(key => {
        const type = json[key];
        
        if(typeof type === 'string'){
            res.push(factory.getDataValue(key, type));
        }else if(typeof type === 'object'){
            const subobj = type;

            if(!Array.isArray(type)){
                let temp = [];
                temp.push();
                res.push([key, Object.fromEntries(parse(subobj))]);
            }else{
                const settings = subobj[0];
                const obj = subobj[1];
                const repeat = settings['repeat'];
                let temp = [];
                for(let i = 1; i <= repeat; i++){

                    temp.push(Object.fromEntries(parse(obj)));
                }
                res.push([key, temp]);
            }
            
        }
    });
    return res;
}





