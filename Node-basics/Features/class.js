// classes are new to ECMAscript 2015
// ES6 class

class Car {
    colour = 'red';
    constructor(name, year) {
        this.name = name;
        this.year = year;
    }
    
    // class method
    getName() {
        return this.name;
    }
}

// instantiating objects
const myCar = new Car("Tesla", 2022);
const emilianoCar = new Car("Toyota", 1997);

console.log(myCar.colour);
console.log(myCar.name + " " + myCar.year);
console.log(emilianoCar.name);