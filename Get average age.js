//reduce
/*
{
    let arr = [1, 2, 3, 4, 5];
    let result = arr.reduce((prevValu, currentValue, currentIndex, arr) => {
        // console.log(currentIndex);
        return prevValu + currentValue;

    }, 0);

    console.log(`result = ${result} `);
}
*/

/*
{
    let arr = [11, 22, 33, 4, 5];
    let x = arr.reduce((previousVAlue, currantValue, currentIndex, array) => previousVAlue + currantValue, 0);
    console.log(x);
}
*/

let john = { name: "John", age: 25 };
let pete = { name: "Pete", age: 30 };
let mary = { name: "Mary", age: 29 };


let arr = [john, pete, mary];

function avg(x) {
    return x.reduce((previousValue, currentValue) => previousValue + currentValue.age, 0) / x.length;
}
console.log(avg(arr));