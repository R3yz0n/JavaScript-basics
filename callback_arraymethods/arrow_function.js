const square = (n) => {
    return n * n;

}

console.log(square(3));

const rollDie = () => {


    return Math.floor(Math.random() * 6) + 1
}

console.log(rollDie());
console.log(typeof rollDie);