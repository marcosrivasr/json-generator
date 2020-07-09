import {readFileSync, readFile} from 'fs';
import { v4 as uuidv4 } from 'uuid';
import {generateRandomFirstName} from './types/names';
import {generateRandomLastName} from './types/names';
import generateRandomAge from './types/age';
import generateRandomNumber from './types/number';
import generateRandomPhone from './types/phone';

const json = JSON.parse(readFileSync('template.json', 'utf8'));


parse(json);


function parse(json:any){
    const keys:string[] = Object.keys(json);

    const regexs = [/uuid/, 
                    /^number\((-?[0-9]+,-?[0-9]+)?\)$/, 
                    /^generateRandomName\(\)$/, 
                    /^generateRandomAge\(([1-9]+,[1-9]+)?\)$/
                ];

    keys.forEach(key => {
        const type = json[key];
        if(typeof type === 'string'){

             switch(type){
                case 'uuid':
                    console.log(key, uuidv4());
                break;
                case 'number':
                    console.log(key, generateRandomNumber());
                break;
                case 'first-name':
                    console.log(key, generateRandomFirstName());
                break;
                case 'last-name':
                    console.log(key, generateRandomLastName());
                break;
                case 'age':
                    console.log(key, generateRandomAge());
                break;
                case 'phone':
                    console.log(key, generateRandomPhone());
                break;
            } 
        }else if(typeof type === 'object'){
            const arr = type;
            const settings = arr[0];
            const obj = arr[1];
            const repeat = settings['repeat'];
            for(let i=1; i< repeat; i++){
                parse(obj);
            }
        }
    });
}





