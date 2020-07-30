#!/usr/bin/env node
import Generator from './generator';
import { join } from 'path';
import { existsSync } from 'fs';
import { exit } from 'process';

const argv = require('yargs')
    .usage('============================\n Welcome to JSON Generator!\n============================\n')
    .usage('Usage: $0 option message \n e.g $0 -s message')
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
    
    

}
    

/*

const generator = new Generator('./template.json');

generator.generateJSON('./output.json');
*/



