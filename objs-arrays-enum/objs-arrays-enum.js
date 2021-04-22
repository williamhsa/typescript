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
var personFirst = {
    name: 'William',
    age: 28,
    role: Role.ADMIN,
};
var person = {
    name: 'William',
    age: 28,
    hobbies: ['Sports', 'Cooking'],
    role: [2, 'author'] // tuples
};
var testArray;
testArray = [1, true, 'oi'];
console.log(testArray);
var favoriteActivities;
var favoriteFoods;
favoriteActivities = ['sports'];
favoriteFoods = ['potato', 1];
console.log(person.hobbies);
for (var _i = 0, _a = person.hobbies; _i < _a.length; _i++) {
    var hobby = _a[_i];
    console.log(hobby.toUpperCase());
}
if (personFirst.role === Role.ADMIN)
    console.log('is admin');
/*
*  trabalhando com tuples, quando eu sei exatamente o tamanho da lista e o tipo
* de cada elemento da lista, com isso tenho algo ainda mais tipado.
*
*
* */ 
