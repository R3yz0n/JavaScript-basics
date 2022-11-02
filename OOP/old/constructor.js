class Car {

    constructor(name, year) {
        this.name = name;
        this.year = year;
        console.log("hello");
    }


    get = () => {

        return this.name;
    }

}

const audi = new Car("Sagar Thapa", 2001);

console.log(audi.get());
console.log(audi.name);


o = new Object()
o.name = "ramesh"
o.fk = function () {

    console.log("my name is " + this.name);
}

o.fk()
