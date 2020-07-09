
export default function generateRandomNumber(min:number = 0, max:number = 10000):number{
    if(min < 0 || max < 0 || (min > max)) throw new Error('Error: ranged');
    return Math.floor(Math.random() * (max - min) + min);
}