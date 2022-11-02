
const emojis = ['rolf', 'lol', 'mg', 'ttyl']
let a = [1, 2, 3, 4]


a = a.map(
    p = (i) => {
        console.log(i);
        return i * 10

    }


)

console.log(a)



// const persons = [
//     { firstname: "Malcom", lastname: "Reynolds" },
//     { firstname: "Kaylee", lastname: "Frye" },
//     { firstname: "Jayne", lastname: "Cobb" }
// ]


// persons.map(


//     function (i) {

//         return i.firstname + i.lastname;

//     }
// )


const movies =
    [
        p = {
            title: 'Amadeus',
            score: 90
        },
        q = {
            title: 'Stand by me',
            score: 95

        },
        r = {
            title: 'Parasite',
            score: 66
        }
    ]


movies.map(

    (i) => {
        return i.title.toUpperCase()
    }
)



