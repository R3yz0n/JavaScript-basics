function sum(a) {
    let x = 0;
    for (let i of a) {
        x = x + i;


    }
    return x;

}
let a = [1, 2, 3, 4, 5];
let total = sum(a)
console.log('', total);