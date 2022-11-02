

let a = [1, 2, 3, 4]

ar = a.filter(
    el => {
        console.log(el);
        return el < 3
    }
)
console.log(ar);



const movies = [{
    title: "ghajni",
    score: 90,
},
{
    title: "dhoom 3",
    score: 70,
},
{
    title: "samsundra",
    score: 86
}
]

const goodtitile = movies.filter(
    (i) => {
        return i.score > 72
    }
)
const goodscore = goodtitile.map(
    (i) => {
        return i.title
    }

)
console.log(goodscore);

const goodone = movies.filter(m => m.score > 70).map(m => m.title)
console.log(goodone);
// console.log(goodtitile);

// const newmo = movies.filter(
//     (x) => {
//         return x.score > 71
//     }



// )
// console.log(newmo);