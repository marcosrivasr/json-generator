import {readFileSync, readFile,writeFileSync} from 'fs';
import TypeFactory from './typeFactory';

export default class Generator{

    private factory?:TypeFactory;
    private output:[string, string|number][]=[];
    private filecontent:string = '';

    constructor(filename?:string){
        this.factory = new TypeFactory();
        if(filename !== undefined){
            this.filecontent = JSON.parse(readFileSync(filename, 'utf8'));
        }
    }
    /**
     * Generates a new JSON file with the structure
     * @param filename Filename for the output file
     */
    generateJSON(filename:string){
        this.output = this.parse(this.filecontent, this.factory!);

        const finalJSON = Object.fromEntries(this.output);

        writeFileSync(filename, JSON.stringify(finalJSON,null,"\t"), "UTF-8");
    }

    createJSON(text:string):string{
        const output = this.parse(text, this.factory!);
        const finalJSON = Object.fromEntries(output);
        return JSON.stringify(finalJSON,null, '\t');
    }

    /**
     * 
     * @param json JSON text
     * @param factory 
     */
    private parse(json:any, factory:TypeFactory):[string, string|number][]{
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
                }else{
                    const settings = subobj[0];
                    const obj = subobj[1];
                    const repeat = settings['repeat'];
                    let temp = [];
                    
                    for(let i = 1; i <= repeat; i++){

                        temp.push(Object.fromEntries(this.parse(obj, subfactory)));
                    }
                    res.push([key, temp]);
                }
                
            }
        });

        return res;
    }
}