

export function generateRandomChoice(args:string[]):string{

    
    if(args.length === 0) return '';
    if(args.length === 1) return args[0];

    const n:number = (Math.floor(Math.random() * args.length) + 1) - 1;
    return args[n];
}