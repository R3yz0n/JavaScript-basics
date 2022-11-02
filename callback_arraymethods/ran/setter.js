

const a = new car("sagar", 19)

function car(nam, age) {

    this.nam = nam;
    this.age = age;


    // console.log("my name is" + this.nam);

    this.getNam = function () {

        return this.nam;

    }

}
// a.fn()
// console.log(a.nam);

function amrit() {

    console.log("amrit!!!!!");

}




