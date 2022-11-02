class Vehicle {

    kolor;
    setter(color) {

        this.kolor = color;



    }
    getter() {
        return this.kolor
    }


}


const car = new Vehicle()

car.setter("pink");
console.log(car.kolor);
console.log(car.getter());

