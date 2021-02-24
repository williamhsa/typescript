// const person: object = {
//   name: 'William',
//   age: 28
// };
var person = {
    name: 'William',
    age: 28,
    hobbies: ['Sports', 'Cooking']
};
var favoriteActivities;
var favoriteFoods;
favoriteActivities = ['sports'];
favoriteFoods = ['potato', 1];
console.log(person.hobbies);
for (var _i = 0, _a = person.hobbies; _i < _a.length; _i++) {
    var hobby = _a[_i];
    console.log(hobby.toUpperCase());
}
