{
    function Calculator() {
        this.read = function() {
            this.a = +prompt("1st value?", 0);
            this.b = +prompt("2ed value?", 0);
        }

        this.sum = function() {
            return this.a + this.b;
        };


        this.sub = function() {
            return this.a / this.b;
        };


        this.power = function() {
            return this.a ** this.b;
        };
    }

    let calc = new Calculator();
    calc.read();

    alert(`sum = ${calc.sum()},sub = ${calc.sub()},sum = ${calc.power()}`);
    // console.log(calc.sum());
    // console.log(calc.sub());
    // console.log(calc.power());

}

// 2ed
{

    function X(params) {

        this.sum = function(a, b) {
            return a + b;
        };
        this.sub = function(a, b) {
            return a / b;
        };

        this.power = function(a, b) {
            return a ** b;
        };
    }

    let x = new X();

    alert(`sum = ${x.sum(2,3)},sub = ${x.sub(2,3)},sum = ${x.power(2,3)}`);
}