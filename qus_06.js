class calculator{
    static add(num1,num2){
        return num1 + num2;
    }
}

const calc = new calculator();
const result = calc.constructor.add(31,5)
console.log(result);