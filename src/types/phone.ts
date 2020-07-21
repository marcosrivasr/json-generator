export default function generateRandomPhone(template:string = '(xxx) xxx-xxxx'):string{

    var res = template.replace(/x/g, function (x) {
        return (Math.floor(Math.random() * 9)).toString();
      });

    return res;
}