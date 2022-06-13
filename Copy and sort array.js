// 1st

/*
{
    let arr = ["wecan", "acreate", "funcion", "capable", "settiing", "multiple", "outputs", "byvalue"];

    function copySorted(arr) {
        return arr.slice(0, 8).sort();
    }

    let array = copySorted(arr);
    console.log(array);
    console.log(arr);
}
*/
// let calc = new Calculator;

//2ed


function Calculator() {

    this.read = function() {
        this.a = +prompt('input numbar one?', 0);
        this.b = +prompt('input number two ?', 0);
    };

    this.sum = function() {
        return this.a + this.b;
    };
}
let calculator = new Calculator();
calculator.read();

alert("Sum=" + calculator.sum());




//3rd
function Calculator() {

    this.sum = function(a, b) {
        // return this.a + this.b;
        return a + b;
    };


}

let calc = new Calculator();
console.log(calc.sum(3, 7));