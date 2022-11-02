function sum(x = 3, y = 5) {

    // return sum
    return x + y;
}

console.log(sum());

function som(x = 1, y = x, z = x + y) {
    console.log(x + y + z);
}

som();


const calculate = function (x, y = x) {
    return x + y;
}

console.log(calculate());

function test(x = 1) {
    console.log(x);
}


test(undefined);






