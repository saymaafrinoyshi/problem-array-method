function ptn(stri) {
    return stri
        .split("-").map(
            (object, index) => index == 0 ? object : object[0].toUpperCase() + object.slice(1)
        )
        .join("")
}

let a = ptn("this-is-my-country");
console.log(a);