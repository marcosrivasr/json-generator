export default function generateRandomCreditCardNumber(template:string = 'xxxx-xxxx-xxxx-xxxx'):string{

    var res = template.replace(/x/g, function (x) {
        return (Math.floor(Math.random() * 9)).toString();
      });

    return res;
}