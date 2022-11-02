let o =
{
    name: "John",
    dob: function () {
        console.log("My dob is 23rd March 2002");

    },

}
o['age'] = 12;
o.sum = function (x, y) {
    return x * y;

}

console.log(o.sum(9, 2));
o.sagar(2, 3)