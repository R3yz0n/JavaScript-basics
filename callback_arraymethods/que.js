let ar = [1, "sagar", 2, [2, 5, [7, 8, 9, [0, 2, 1, 3]]], 6, 7];

let SUM = 0



function addition(a) {
    let x
    for (let i = 0; i < a.length; i++) {
        try {
            if (typeof (a[i]) == "string") {

                throw new Error(typeof a[i]);

            }

            else if (Array.isArray(a[i])) {

                // console.log(a[i]);

                SUM = addition(a[i]);
            }
            else {

                SUM += a[i];
                // console.log(a[i]);
            }

        }
        catch (x) {
            console.log("s" + x);
        }
    }

    return SUM;

}
console.log(addition(ar));