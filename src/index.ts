#!/usr/bin/env node
import Generator from './generator';
import { join } from 'path';

const argv = require('yargs')
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
    const generator = new Generator(argv.i);

    if(argv.o === undefined){
        generator.generateJSON(join(process.env.pwd!,'./output.json'));
    }else{
        generator.generateJSON(argv.o);
    }
    

}
    

/*

const generator = new Generator('./template.json');

generator.generateJSON('./output.json');
*/



