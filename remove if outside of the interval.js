let array = [5, 3, 8, 1];

function filterRangeInPlace(array, a, b) {
    for (let i = 0; i < array.length; i++) {
        const element = array[i];

        if (element < a || element > b) {
            array.splice(i, 1);
            i--;
        }

    }
}

filterRangeInPlace(array, 1, 8);

console.log(array);