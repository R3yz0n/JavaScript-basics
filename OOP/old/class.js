class Vehicle {
    a = [1, 2, 3, 4, 5]

    b = 12.23

    constructor(b) {

        this.b = b;
        console.log("vechile is created!!!");
    }

    greet() {

        console.log("hello");

    }



}


const car = new Vehicle(4)
console.log(car.b);