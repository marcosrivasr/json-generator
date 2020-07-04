import {readFileSync, readFile} from 'fs';
import { v4 as uuidv4 } from 'uuid';
import generateRandomName from './names';

const json = JSON.parse(readFileSync('template.json', 'utf8'));


parse(json);

function parse(json:any){
    const keys:string[] = Object.keys(json);
    let finalJSON:any = {};

    keys.forEach(key => {
        const type = json[key];
        if(typeof type === 'string'){
            switch(type){
                case 'uuid':
                    finalJSON['sdsd'] = 'sdsd'
                    console.log(finalJSON);
                break;
                case 'number':
                    console.log(key, Math.floor(Math.random() * 100));
                break;
                case 'name':
                    console.log(generateRandomName());
                    finalJSON += JSON.stringify({key: generateRandomName()});
                    console.log(finalJSON);
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





