#!/usr/bin/env node
import Generator from './generator';
import { join } from 'path';
import { existsSync } from 'fs';
import { exit } from 'process';


/* const argv = require('yargs')
    .usage('============================\n Welcome to JSON Generator!\n============================\n')
    .usage('Usage: json -i inputfile -o outputfile \n e.g json -i template.json -o api.json')
    .alias('i', 'input')
    .nargs('i', 1)
    .describe('i', 'Input file')
    .alias('o', 'output')
    .nargs('o', 1)
    .describe('o', 'Output file')
    .demandOption(['i'])
    .help('h')
    .alias('h', 'help')
    .epilog('Copyright Marcos Rivas 2020')
    .argv

if(argv.i != undefined){
    if(existsSync(argv.i)){
        
        const generator = new Generator(argv.i);
        let output = undefined;

        if(argv.o === undefined){
            output = join(process.env.pwd!,'./output.json');
            generator.generateJSON(output);
        }else{
            output = argv.o;
            generator.generateJSON(argv.o);
        }
        console.log('JSON file created successfully in ', output);
    }else{
        console.error('FILE does not exist. Make sure the the file exists and the path is correct.');
    }
} */

var argv = require('yargs/yargs')(process.argv.slice(2))
.command('create', 'Generate a JSON file based on a template', {
    url: {
        alias: 'u',
        default: 'http://yargs.js.org/'
    }
})
.command('serve', 'Run the JSON server', {
    url: {
        alias: 'u',
        default: 'http://yargs.js.org/'
    }
})
.command('load', 'Run the JSON server with a new template', {
    url: {
        alias: 'u',
        default: 'http://yargs.js.org/'
    }
})
.argv;

console.log(argv);
    

/*

const generator = new Generator('./template.json');

generator.generateJSON('./output.json');
*/



