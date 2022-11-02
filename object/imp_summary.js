
o = {
    123: "shubam",
    name: "sagar",
    roll: 19,
    age: 21
}
const x = "it is X"
console.log(typeof Object.keys(o)[0]);
o['ki a'] = true;
// treated as string
// o.x = 981921221;
o[x] = 12345;
console.log(typeof Object.keys(o)[0]);
console.log(Object.keys(o));
console.log(o);
