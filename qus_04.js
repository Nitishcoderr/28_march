class employee{
    constructor(name,position,salary){
        this.name = name;
        this.position = position;
        this.salary = salary;
    }
    
    getSalary(){
        return console.log(`Salary of employee is ${this.salary}`);
    }
}

const empolyee1 = new employee("Nitish","developer",100000)
empolyee1.getSalary();