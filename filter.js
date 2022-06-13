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