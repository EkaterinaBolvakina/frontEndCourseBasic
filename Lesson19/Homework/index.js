class Transport {
    constructor(make, model, year) {
        this.make = make;
        this.model = model;
        this.year = year;
    }

    displayMainInfo() {
        console.log(`Make: ${this.make}, \nModel: ${this.model}, \nExp.Year: ${this.year}`);
    }
}

class Car extends Transport {
    constructor(make, model, year, numDoors, isConvertible) {
        super(make, model, year);
        this.numDoors = numDoors;
        this.isConvertible = isConvertible;
    }

    displayMainInfo() {
        console.log('\nCar:');
        super.displayMainInfo();
        console.log(`Number of doors: ${this.numDoors}, \nIs convertible?: ${this.isConvertible}`);
    }
}

class Motorcycle extends Transport {
    constructor(make, model, year, numWheels, hasSideCar) {
        super(make, model, year);
        this.numWheels = numWheels;
        this.hasSideCar = hasSideCar;
    }

    displayMainInfo() {
        console.log('\nMotorcycle:');
        super.displayMainInfo();
        console.log(`Number of wheels: ${this.numWheels}, \nHas a side car?: ${this.hasSideCar}`);
    }
}

const car1 = new Car('Audi', 'A4', 2021, 4, true);
const car2 = new Car('BMW', 'X5', 2023, 5, false);
const moto1 = new Motorcycle('Harley-Davidson', 'Sportster', 2023, 2, false);
const moto2 = new Motorcycle('Triumph', 'Bonneville', 1968, 2, true);

car1.displayMainInfo();
car2.displayMainInfo();
moto1.displayMainInfo();
moto2.displayMainInfo();