#!/usr/bin/env node
import Generator from './generator';
import { join } from 'path';
import { existsSync } from 'fs';
import { exit } from 'process';

import open from 'open';
import { exec } from 'child_process';


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
.command({ 
    command: 'generate', 
    describe: 'Generates a JSON output file based on a template', 
    builder: { 
        source: { 
            describe: 'JSON template path', 
            demandOption: true,  // Required 
            type: 'string'     
        }, 
        destination: {   
            describe: 'File destination', 
            demandOption: true, 
            type: 'string'
        } 
    }, 
  
    // Function for your command 
    handler(argv:any) { 
        const source = join(process.env.pwd!, argv.source);
        if(existsSync(source)){
            const generator = new Generator(source);
            const dest = join(process.env.pwd!, argv.destination);
            generator.generateJSON(dest);
        }else{
            console.log(`Source file doesn't exist`);
        }
        
    } 
})
.command({ 
    command: 'load', 
    describe: 'Load a new template and run the server', 
    builder: { 
        source: { 
            describe: 'JSON template path', 
            demandOption: true,  // Required 
            type: 'string'     
        }
    }, 
  
    // Function for your command 
    handler(argv:any) { 
       console.log('Work in progress...');
    } 
})
.command({ 
    command: 'serve', 
    describe: 'Run the server', 
    builder: { 
        source: { 
            describe: 'JSON template path', 
            demandOption: true,  // Required 
            type: 'string'     
        }
    }, 
  
    // Function for your command 
    handler(argv:any) { 
        console.log('In progress...');
    } 
})
.argv;

