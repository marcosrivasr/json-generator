import {generateRandomFirstName, generateRandomLastName, generateRandomFullName} from './types/names';
import generateRandomAge from './types/age';
import {generateRandomNumber, generateRandomDecimal, generateRandomPrice} from './types/number';
import generateRandomPhone from './types/phone';
import generateRandomCreditCardNumber from './types/creditcard';
import {generateRandomDate} from './types/date';
import { generateRandomId, generateRandomIndex, generateRandomUUID } from './types/id';
import { generateRandomBoolean } from './types/boolean';
import { generateRandomChoice } from './types/choice';
import { generateRandomTitle, generateRandomParagraph } from './types/lorem';
import { getRandomCity, getRandomCountry} from './types/cities';

export default class TypeFactory{

    private id:number;

    constructor(){
        this.id = 0;
    }
    /**
     * 
     * @param key name of the parameter 
     * @param type data type with arguments
     */
    getDataValue(key:string, func:string):[string, any]{
        const inputs = func.split(' ');
        
        const type = inputs[0];
        inputs.shift();
        const args = inputs;
        switch(type){
            case 'id':
                return [key, generateRandomId()];
            break;
            case 'index':
                const id = this.id;
                this.id++;
                return [key, generateRandomIndex(id)];
            break;
            case 'uuid':
                return [key, generateRandomUUID()];
            break;
            case 'number':
                return [key, generateRandomNumber()];
            break;
            case 'first-name':
                return [key, generateRandomFirstName()];
            break;
            case 'last-name':
                return [key, generateRandomLastName()];
            break;
            case 'full-name':
                return [key, generateRandomFullName()];
            break;
            case 'age':
                return [key, generateRandomAge()];
            break;
            case 'phone':
                return [key, generateRandomPhone()];
            break;
            case 'decimal':
                return [key, generateRandomDecimal()];
            break;
            case 'price':
                return [key, generateRandomPrice()];
            break;
            case 'credit-card':
                return [key, generateRandomCreditCardNumber()];
            break;
            case 'date':
                return [key, generateRandomDate()];
            break;
            case 'boolean':
                return [key, generateRandomBoolean()];
            break;
            case 'choice':
                return [key, generateRandomChoice(args)];
            break;
            case 'title':
                return [key, generateRandomTitle()];
            break;
            case 'paragraph':
                return [key, generateRandomParagraph()];
            break;
            case 'city':
                return [key, getRandomCity()];
            break;
            case 'country':
                return [key, getRandomCountry()];
            break;
            default:
                throw new Error('Data type ${inputs[0]} not recorgnized');
        } 
    }
}