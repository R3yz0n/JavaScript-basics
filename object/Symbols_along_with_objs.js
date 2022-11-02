const k1 = Symbol("for k1");
const k2 = Symbol("for k2");
const xx = "this cant be changed"

myobj = {
    [k2]: "ram",
    [k1]: "shayam",
    //variable can be added in object as keys
    [xx]: "idk",
    extra: "diffence",
    marks: 99.0
}


console.log(myobj);
console.log(myobj[k1]);
console.log(myobj.k1);

// SYmboles are not shown in for-in loop
for (let key in myobj) {
    console.log(key, "\t", myobj.key);
}

// symbols are cleared by this method however the type is string
const x = JSON.stringify(myobj)
console.log(x);




