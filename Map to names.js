function Student(name, age, ) {
    this.name = name;
    this.age = age;


    this.Display = function() {
        console.log(this.name);
    }
}

let student1 = new Student("jhon", 25);
let student2 = new Student("pete", 30);
let student3 = new Student("jhon", 28);

/*{
    let riad = { name: "riad", age: 25 };
    let alamin = { name: "alamin", age: 35 };
    let tarek = { name: "tarek", age: 20 };

    let totaalName = [riad, alamin, tarek];
    let x = totaalName.map(item => item.name);
    console.log(x);
}
*/