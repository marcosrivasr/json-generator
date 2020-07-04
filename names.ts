import { readFileSync } from 'fs';

export default function generateRandomName(){
    const file = './data/names.json';
    
    const content = readFileSync(file, 'utf-8');
    const arr = JSON.parse(content);
    return arr[Math.floor(Math.random() * arr.length)];
}