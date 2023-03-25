class person{
    constructor(name="Unknownh",age=0){
        this.name=name;
        this.age = age;
    }
    getdetails(){
        return `Name:${this.name} Age:${this.age}`
    }
}

const person1 = new person()
console.log(person1.getdetails());