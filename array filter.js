function filterRange(arr, x, y) {
    return arr.filter(item => (x <= item && item <= y))
}

// let arr = [5, 3, 8, 1];
let arr = [5, 2, 3, 8, 6, 11];

let filterArray = filterRange(arr, 1, 8); // 1 to 8 , 1 start 8 end ans 5,2,3,8,6
console.log(filterArray);