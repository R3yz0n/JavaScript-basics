
"use strict"
let o =
{
    name: "sagar",
    age: 19,
    gender: function () {
        console.log("Male");
        console.log(this.name);


    }
}
o.gender()
console.log()


