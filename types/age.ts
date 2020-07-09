export default function generateRandomAge(min:number = 1, max:number = 80):number{
    if(min < 0 || max < 0 || (min > max)) throw new Error('Error with the range');
    return Math.floor(Math.random() * (max - min) + min);
}