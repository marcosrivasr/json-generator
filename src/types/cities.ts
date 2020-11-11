import { readFileSync } from 'fs';
import { join } from 'path';

function loadFile(filename: string){
    const content = readFileSync(filename, 'utf-8');
    return JSON.parse(content);
}

export function getRandomCity(){
    const rnd = Math.floor(Math.random() * data.length);

    return data[rnd]['city'];
}

export function getRandomCountry(){
    const rnd = Math.floor(Math.random() * data.length);

    return data[rnd]['country'];
}

const data = [
    {"city": "London","country": "United Kingdom"},
    {"city": "Paris","country": "France"},
    {"city": "Barcelona","country": "Spain"},
    {"city": "Moscow","country": "Rusia"},
    {"city": "Chicago","country": "United States"},
    {"city": "Singapore","country": "Singapore"},
    {"city": "Dubai","country": "United Arab Emirates"},
    {"city": "San Francisco","country": "United States"},
    {"city": "Madrid","country": "Spain"},
    {"city": "Amsterdam","country": "Netherlands"},
    {"city": "Los Angeles","country": "United States"},
    {"city": "Rome","country": "Italy"},
    {"city": "Boston","country": "United States"},
    {"city": "Mexico City","country": "Mexico"},
    {"city": "San Jose","country": "United States"},
    {"city": "Toronto","country": "Canada"},
    {"city": "Zurich","country": "Switzerland"},
    {"city": "Hong Kong","country": "Hong Kong"},
    {"city": "Beijing","country": "China"},
    {"city": "Berlin","country": "Germany"},
    {"city": "Sydney","country": "Australia"},
    {"city": "Las Vegas","country": "United States"},
    {"city": "Frankfurt","country": "Germany"}
];