import { v4 as uuidv4 } from 'uuid';

export function generateRandomUUID():string{
    return uuidv4();
}

export function generateRandomId():string{
    return 'xxxxxxxxxxxxxxxxxxx'.replace(/x/g, function(x){
        return Math.floor(Math.random() * 9).toString();
    });
}

export function generateRandomIndex(index:number):string{
    return index.toString();
}