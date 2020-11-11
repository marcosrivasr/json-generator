import {generateRandomCompanyName, generateRandomFullName} from './names';
export function generateRandomEmail(){
    const name = generateRandomFullName()
                .toLocaleLowerCase()
                .replace(' ', '.');
    const email = generateRandomCompanyName()
                    .toLocaleLowerCase()
                    .split(' ').join('');
    return name.concat('@', email, '.com');
}