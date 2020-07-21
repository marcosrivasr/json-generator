
export function generateRandomNumber(min:number = 0, max:number = 10000):number{
    if(min < 0 || max < 0 || (min > max)) throw new Error('Error: ranged');
    return Math.floor(Math.random() * (max - min) + min);
}

export function generateRandomDecimal(min:number = 0, max:number = 10000, decimals:number = 3):number{
    if(min < 0 || max < 0 || (min > max)) throw new Error('Error: ranged');
    return parseFloat((Math.random() * (1000 - 0)).toFixed(decimals));
}

export function generateRandomPrice(symbol: string = '$', min:number = 0, max:number = 10000):string{
    return symbol + generateRandomDecimal(min, max, 2);
}