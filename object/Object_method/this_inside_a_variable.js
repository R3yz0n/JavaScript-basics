// "use strict"
let o =
{
    name: "sagar",
    age: 21,

    dob() {
        // let next_year = ++(this.age)
        // console.log("The date of birth is 23rd march 2001 so the age after a year is " + next_year);
        // return this

        console.log("this is " + this.name);
        console.log(this);



    },




}
o.dob()

//reference to a function downs
x = o.dob
x()



// console.log(o.x);
// console.log(o.sagar);






