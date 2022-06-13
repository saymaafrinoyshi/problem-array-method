{
    // let num2 = 3;
    // let num1 = 7;
    // let sum, sub;
    // sum = num1 + num2;
    // sub = num1 - num2;
    // console.log(`sum => ${sum} sub => ${sub}`);
}


let Calculator = (n1, n2) => {
    return n1 + n2;
}
console.log(Calculator(3, 7));






















// console.log(Calculator(5 + 5));

// function Calculator() {

//     this.methods = {
//         "-": (a, b) => a - b,
//         "+": (a, b) => a + b
//     };

//     this.calculate = function(str) {

//         let split = str.split(' '),
//             a = +split[0],
//             op = split[1],
//             b = +split[2];

//         if (!this.methods[op] || isNaN(a) || isNaN(b)) {
//             return NaN;
//         }

//         return this.methods[op](a, b);
//     };

//     this.addMethod = function(name, func) {
//         this.methods[name] = func;
//     };
// }