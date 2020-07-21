import { readFileSync } from 'fs';

function loadFile(filename: string){
    const content = readFileSync(filename, 'utf-8');
    return JSON.parse(content);
}

function capitalizeFirstLetter(string: string):string{
    if(typeof string==undefined) return '';
    var firstLetter = string[0] || string.charAt(0);
    return firstLetter ? firstLetter.toUpperCase() + string.slice(1) : '';
}

export function generateRandomFirstName(){
    const filename = 'src/data/names.json';

    const json = loadFile(filename);
    const rnd = Math.floor(Math.random() * json.length);
    const text = capitalizeFirstLetter(json[rnd].toLowerCase());
    return text;
}

export function generateRandomLastName(){
    const filename = 'src/data/lastnames.json';
    const json = loadFile(filename);
    const rnd = Math.floor(Math.random() * json.length);
    const text = capitalizeFirstLetter(json[rnd].toLowerCase());
    
    return text;
}

