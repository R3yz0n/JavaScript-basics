function passob(a) {
    o.bool = "rabin"
    for (let key in a)
        // console.log(key + "=>" + a[key]);
        console.log(`${key}==${a[key]}`);

}
let o = {
    sagar: 18,
    ashish: 19
}

passob(o)