

class Car {



    // constructor(name, year) {

    //     this.name = name;
    //     this.year = year;

    //     console.log("hello");
    // }

    name = "sag";

    get = () => {

        return this.name;

    }

    // set = (name) => {


    //     this.name = name;

    // }

}

const audi = new Car("sagar", 2001);

console.log(audi.get());

// audi.set("sagar")
console.log(audi.name);




// let o =
// {
//     name: "ramesh",
//     age: 20,


//     fk: () => {
//         return this.name;
//     }


// }
// v = o.fk()
// console.log(v);
// console.log(o.fk());

// https://betterprogramming.pub/difference-between-regular-functions-and-arrow-functions-f65639aba256

o = new Object()
o.name = "ramesh"
o.fk = () function() {
    console.log("my name is " + this.name);
}

o.fk()
