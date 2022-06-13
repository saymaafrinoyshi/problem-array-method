// sort(fn)
/*
{
    let arr = ["function", "andalf", "akash", "cc", "function", "fff", "a"];
    // let arr = [1, 2, 15];
    arr.sort();
    console.log(arr);
}


/*
{
    function compare(a, b) {
        if (a > b) return 1;
        if (a == b) return 0;
        if (a < b) return -1;
    }
    let arr = [155, 5, 4];
    arr.sort(compare);
    console.log(arr);
}
*/

let john = { name: "John", age: 55 };
let pete = { name: "Pete", age: 30 };
let mary = { name: "Mary", age: 28 };

function compare(arr) {
    arr.sort((a, b) => a.age - b.age);
}

let arr = [john, pete, mary];

compare(arr);
console.log(arr[0].name);
console.log(arr[1].name);
console.log(arr[2].name);

// console.log(arr[0].name);