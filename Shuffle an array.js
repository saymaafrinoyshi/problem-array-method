let arr = [1, 5, 3];

function shuffle(arr) {
    arr.sort(() => Math.random() - 0.5);
}

shuffle(arr);
console.log(arr);