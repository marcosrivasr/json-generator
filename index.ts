import {readFileSync, readFile,writeFileSync} from 'fs';
import { v4 as uuidv4 } from 'uuid';
import {generateRandomFirstName, generateRandomLastName} from './types/names';
import generateRandomAge from './types/age';
import {generateRandomNumber, generateRandomDecimal, generateRandomPrice} from './types/number';
import generateRandomPhone from './types/phone';
import generateRandomCreditCardNumber from './types/creditcard';

const json = JSON.parse(readFileSync('template.json', 'utf8'));

let res = [];
res = parse(json);

const finalJSON = Object.fromEntries(res);

writeFileSync('./output.json', JSON.stringify(finalJSON,null,"\t"), "UTF-8");




function parse(json:any):[string, string|number][]{
    const keys:string[] = Object.keys(json);
    let res:[string, any][] = [];

    
    
    keys.forEach(key => {
        const type = json[key];
        
        if(typeof type === 'string'){

             switch(type){
                case 'uuid':
                    //console.log(key, uuidv4());
                    res.push([key, uuidv4()]);
                break;
                case 'number':
                    //console.log(key, generateRandomNumber());
                    res.push([key, generateRandomNumber()]);
                break;
                case 'first-name':
                    //console.log(key, generateRandomFirstName());
                    res.push([key, generateRandomFirstName()]);
                break;
                case 'last-name':
                    //console.log(key, generateRandomLastName());
                    res.push([key, generateRandomLastName()]);
                break;
                case 'age':
                    //console.log(key, generateRandomAge());
                    res.push([key, generateRandomAge()]);
                break;
                case 'phone':
                    //console.log(key, generateRandomPhone());
                    res.push([key, generateRandomPhone()]);
                break;
                case 'decimal':
                    //console.log(key, generateRandomDecimal());
                    res.push([key, generateRandomDecimal()]);
                break;
                case 'price':
                    //console.log(key, generateRandomPrice());
                    res.push([key, generateRandomPrice()]);
                break;
                case 'credit-card':
                    //console.log(key, generateRandomCreditCardNumber());
                    res.push([key, generateRandomCreditCardNumber()]);
                break;
                default:
            } 
        }else if(typeof type === 'object'){
            const arr = type;
            const settings = arr[0];
            const obj = arr[1];
            const repeat = settings['repeat'];
            let temp = [];
            for(let i = 1; i <= repeat; i++){

                temp.push(Object.fromEntries(parse(obj)));
            }
            res.push([key, temp]);
        }
    });
    return res;
}





