let john = { name: "John", surname: "Smith", id: 1 };
let pete = { name: "Pete", surname: "Hunt", id: 2 };
let mary = { name: "Mary", surname: "Key", id: 3 };

let user = [john, pete, mary];

/*
{

    let userInfo = user.map(x => ({
        name: x.name,
        id: x.id,
        surname: x.surname
    }));

    console.log(userInfo[0].id); //1
    console.log(userInfo[0].name); //john
    console.log(userInfo[0].surname);//smith
}

console.log(userInfo[0].id);
console.log(userInfo[0].fullname);
*/



let userInfo = user.map(x => ({ // callback function
    fullName: `${x.name} ${x.surname}`,
    id: x.id
}));




console.log(userInfo[0].id); // 1
console.log(userInfo[0].fullName); // John Smith