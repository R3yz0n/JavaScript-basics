

let a = [0, 9, 8, 1, 5]


let temp = 0;
for (let i = 0; i < a.length - 1; i++) {

    for (let j = i + 1; j < a.length; j++) {

        if (a[i] < a[j]) {
            temp = a[i]
            a[i] = a[j]
            a[j] = temp;

        }

    }

}
// Student marks

o = {

    Ram: 90,
    shyam: 81,
    asisi: 100

}

a.sort();
a = a.reverse()
console.log(a);





