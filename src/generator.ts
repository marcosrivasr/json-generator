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
        let output:[string, string|number][]|[] = [];
        let finalJSON;
        if(Array.isArray(text)){
            console.log('****** El archivo inicia con un arreglo');
            let res:[string, any][] = [];
            const settings = text[0];
            const obj = text[1];
            const repeat = settings['repeat'];
            let temp = [];
            
            for(let i = 1; i <= repeat; i++){
                temp.push(Object.fromEntries(this.parse(obj, this.factory!)));
            }
            res.push(['result',temp]);
            output = res;
            finalJSON = Object.fromEntries(output);
            finalJSON = finalJSON.result;
        }else{
            output = this.parse(text, this.factory!);
            finalJSON = Object.fromEntries(output);
        }

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
        
        console.log("---------- Evaluar", json);
        keys.forEach(key => {
            const type = json[key];
            
            if(typeof type === 'string' && isNaN(json[key])){
                const item = factory.getDataValue(key, type);
                console.log('-------------------Resultado:', item);
                res.push(item);

            }else if(typeof type === 'object'){
                const subobj = type;
                let subfactory = new TypeFactory();

                if(!Array.isArray(type)){
                    const item = Object.fromEntries(this.parse(subobj, subfactory));
                    res.push([key, item]);
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