


//call back func
function check(c) {

    if (c % 2 == 0) {
        console.log(c + " is even and will return c*c*2");
        return c * c;
    }
    else {
        console.log(c + " is odd and will return c*c*c*2");

        return c ** 3;
    }

}

// HOF
function double(cback) {

    let x = prompt("Enter the number u like")
    x = Number.parseInt(x);
    return cback(x) * 2;


}

// y = double(check)
// console.log(y);


const add = function (a, b) {
    return a + b;

}
const power = function (a, b) {
    return Math.pow(a, b)
}

const op = function (f, a, b) {

    let result = f(a, b)
    console.log(result);




}
let n = power;
op(n, 4, 2)



myfun = () => {

    return xd



}
xd = () => {
    return "helllo xd!!"
}


// let myvar = myfun();
// x = myvar();
let myvar = myfun()
console.log(myvar());

