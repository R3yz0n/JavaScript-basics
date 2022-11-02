function Vehicle() {

    this.color = "black";
    this.getter = function () {


        return this.color;
    }

    this.setter = function (set_name) {

        this.car_nam = set_name;


    }

}

car = new Vehicle()
car.setter("sagar");
console.log(car.car_nam);

console.log(car.getter());








