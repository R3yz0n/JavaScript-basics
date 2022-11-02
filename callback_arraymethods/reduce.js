const a = [1, 2, 3, 4, 5]

result = a.reduce((a, b) => {
    return a * b
})

console.log(result);
max = a.reduce(
    (min, i) => {

        if (min < i)
            return min

        return i
    }
)
console.log(max);