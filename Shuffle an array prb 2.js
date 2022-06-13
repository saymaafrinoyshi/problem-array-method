let array = [1, 5, 3];



function shuffle(arr) {
    arr.sort(() => Math.random() - 0.5);
}




let count = {
    '153': 0,
    '135': 0,
    '513': 0,
    '531': 0,
    '351': 0,
    '315': 0
};




for (let i = 0; i < 1000000; i++) {

    shuffle(array);
    count[array.join('')]++;
}

for (let key in count) {
    console.log(`key ${key}: ${count[key]}`);
}