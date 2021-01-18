import {readFileSync, readFile,writeFileSync} from 'fs';
import { array } from 'yargs';
import TypeFactory from './typeFactory';

export default class Generator{

    private factory?:TypeFactory;
    private output:any;
    private filecontent:string = '';

    constructor(filename?:string){
        //new factory instance
        this.factory = new TypeFactory();

        if(filename !== undefined){
            //if filename exists, read and return the text of the file
            this.filecontent = JSON.parse(readFileSync(filename, 'utf8'));
        }
    }
    /**
     * Generates a new JSON file with the structure
     * @param filename Filename for the output file
     */
    generateJSON(filename:string){
        let output = null;
        if(Array.isArray(this.filecontent)){
            output = this.parse(this.filecontent, this.factory!);
        }else{
            output = this.parse(this.filecontent, this.factory!);
        }

        const finalJSON = Object.fromEntries(this.output);

        writeFileSync(filename, JSON.stringify(finalJSON,null,"\t"), "UTF-8");
    }

    createJSON(text:string):string{
        console.log('Start parse process...');
        let output = null;
        if(Array.isArray(text)){
            console.log('************************** El JSON es un arreglo inicial');
            const objSettings   = text[0];
            const template      = text[1];
            const repeat        = objSettings['repeat'];
            let temp = [];

            for(let i = 1; i <= repeat; i++){
                const item = new Map<string, any>([this.parse(template, this.factory!)]);
                console.log('0.', item);
                const object = Object.fromEntries(item);
                temp.push(object);
            }
            output = [...temp];
        }else{
            console.log('************************** El JSON es un objeto inicial');
            output = this.parse(text, this.factory!);
        }
        
        const finalJSON = Object.fromEntries(output);
        return JSON.stringify(finalJSON,null, '\t');
    }

    /**
     * 
     * @param json JSON text
     * @param factory 
     */
    private parse(json:any, factory:TypeFactory){
        const keys:string[] = Object.keys(json);
        let res:[string, any][] = [];
        
        
        keys.forEach(key => {
            const type = json[key];
            
            if(typeof type === 'string'){
                res.push(factory.getDataValue(key, type));
            }else if(typeof type === 'object'){
                const subobj = type;
                let subfactory = new TypeFactory();
                if(!Array.isArray(type)){
                    res.push([key, Object.fromEntries(this.parse(subobj, subfactory))]);
                
                }
                
            }
        });
    }

}