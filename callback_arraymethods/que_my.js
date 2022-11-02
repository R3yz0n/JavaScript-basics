let ar = [1, 2, [2, 3, 5], 6, 7];

let sum = 0


const add = (a) => {

    for (let el of a) {

        if (Array.isArray(el)) {
            sum = add(el)

        }
        else {

            sum += el

        }

    }

    return sum;



}
console.log(add(ar));
