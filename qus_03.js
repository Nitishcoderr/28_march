class car {
  constructor(year, company, model) {
      this.year = year;
    this.company = company;
    this.model = model;
  }
  getDescription() {
    return `This is a ${this.year} ${this.company} ${this.model} `;
  }
}

const mycar = new car(2022,'BMW',"Nitish")

console.log(mycar.getDescription())