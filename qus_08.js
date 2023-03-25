function Student(name){
    this.name = name;
}

Student.prototype.printDetail = function(){
    console.log(`Hello,my name is ${this.name}`);
}

const student = new Student("Nitish");


student.printDetail();