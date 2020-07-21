function getRandom(min:number|null, max:number){
    let r = 0;
    if(min === null){
        r = Math.floor(Math.random() * max);
    }else{
        r = Math.floor(Math.random() * (max - min) + min);
    }
    
    if(r < 10) return '0' + r.toString();
    return r.toString();
}
export function generateRandomDate(minYear:number = 2010, maxYear: number = 2030):string{
    let template = 'mm-dd-yyyy';
    let res = template.replace(/mm/g, function (x) {
        return getRandom(null, 12);
    });
    res = res.replace(/dd/g, function (x) {
        return getRandom(null, 31);
    });
    res = res.replace(/yyyy/g, function (x) {
        return getRandom(minYear, maxYear);
    });
    return res;
}
