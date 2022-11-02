
let a = [[1, 2, 3], [0, 1, 0]]
for (let i = 0; i < a.length; i++) {
    let c = a[i]
    for (let j = 0; j < c.length; j++) {

        console.log(a[i][j]);

    }
}


// easy method
for (let i of a) {
    for (let j of i) {
        console.log(j);
    }
    console.log("\n");
}


