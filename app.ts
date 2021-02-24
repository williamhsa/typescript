// const person: object = {
//   name: 'William',
//   age: 28
// };
const person: {
  name: string;
  age: number;
  hobbies: string[];
} = {
  name: 'William',
  age: 28,
  hobbies: ['Sports', 'Cooking']
};

let favoriteActivities: string[];
let favoriteFoods: any[];
favoriteActivities = ['sports']
favoriteFoods = ['potato', 1];

console.log(person.hobbies)

for (const hobby of person.hobbies) console.log(hobby.toUpperCase())