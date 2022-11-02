
// o = {
//     name: "sagar",
//     roll: 19,

// }
// o.marks = [20, 11, 99];
// // console.log(o);





// for (let key of (o.marks))
//     console.log(key);


//Another example

let marks = [20, 11, 99]
o = {
    name: "sagar",
    roll: 19,
    [marks]: "marks is good"

}

// either this
for (let key in o)
    console.log(key);

// or this

console.log(Object.keys(o)[2]);



