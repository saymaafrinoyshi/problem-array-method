/*{
let army = {
    minAge: 18,
    maxAge: 27,
    canjon(user) {
        return user.age >= this.minAge && user.age < this.maxAge;
    }
}
let users = [
    { age: 16 },
    { age: 20 },
    { age: 23 },
    { age: 30 }
];
let soldiers = users.filter(army.canjon, army);
console.log(soldiers[0].age);
console.log(soldiers[1].age);
}
*/

let string = ["Hare", "riya", "Krishna", "Hare", "Krishna",
    "Krishna", "Krishna", "Hare", "Hare", ":-O"
];

function unique(arr) {
    let result = [];

    for (let x of arr) {
        if (!result.includes(x)) {
            result.push(x)
        }
    }
    return result;
}


console.log(unique(string));