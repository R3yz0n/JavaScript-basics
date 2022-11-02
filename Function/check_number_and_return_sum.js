function sum(num1, num2) {
    if (typeof num1 !== "number" || typeof num2 !== "") {
        return false;
    }
    else {
        return num1 + num2;
    }
}

let x = 2
let y = 3
console.log(sum(x, y));