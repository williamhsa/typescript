"use strict";
// const ADMIN = 0;
// const READ_ONLY = 1;
// const AUTHOR = 2;
var Role;
(function (Role) {
    Role[Role["ADMIN"] = 0] = "ADMIN";
    Role[Role["READ__ONLY"] = 1] = "READ__ONLY";
    Role[Role["AUTHOR"] = 2] = "AUTHOR";
})(Role || (Role = {}));
;
const personFirst = {
    name: 'William',
    age: 28,
    role: Role.ADMIN,
};
const person = {
    name: 'William',
    age: 28,
    hobbies: ['Sports', 'Cooking'],
    role: [2, 'author'] // tuples
};
let testArray;
testArray = [1, true, 'oi'];
console.log(testArray);
let favoriteActivities;
let favoriteFoods;
favoriteActivities = ['sports'];
favoriteFoods = ['potato', 1];
console.log(person.hobbies);
for (const hobby of person.hobbies)
    console.log(hobby.toUpperCase());
if (personFirst.role === Role.ADMIN)
    console.log('is admin');
/*
*  trabalhando com tuples, quando eu sei exatamente o tamanho da lista e o tipo
* de cada elemento da lista, com isso tenho algo ainda mais tipado.
*
*
* */ 
