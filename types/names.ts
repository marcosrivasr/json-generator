import { readFileSync } from 'fs';

function loadFile(filename: string){
    const content = readFileSync(filename, 'utf-8');
    return JSON.parse(content);
}

export function generateRandomFirstName(){
    const filename = './data/names.json';
    const json = loadFile(filename);
    
    return json[Math.floor(Math.random() * json.length)];
}

export function generateRandomLastName(){
    const filename = './data/lastnames.json';
    const json = loadFile(filename);
    
    return json[Math.floor(Math.random() * json.length)];
}