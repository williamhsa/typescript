// const ADMIN = 0;
// const READ_ONLY = 1;
// const AUTHOR = 2;

enum Role {
  ADMIN,
  READ__ONLY,
  AUTHOR
};


const personFirst: object = {
  name: 'William',
  age: 28,
  role: Role.ADMIN,
};

const person: {
  name: string;
  age: number;
  hobbies: string[];
  role: [number, string];
} = {
  name: 'William',
  age: 28,
  hobbies: ['Sports', 'Cooking'],
  role: [2, 'author'] // tuples
};
let testArray: any;
testArray = [1, true, 'oi']
console.log(testArray)

let favoriteActivities: string[];
let favoriteFoods: any[];
favoriteActivities = ['sports']
favoriteFoods = ['potato', 1];

console.log(person.hobbies)

for (const hobby of person.hobbies) console.log(hobby.toUpperCase());

// if (personFirst.role === Role.ADMIN) console.log('is admin')


/*
*  trabalhando com tuples, quando eu sei exatamente o tamanho da lista e o tipo
* de cada elemento da lista, com isso tenho algo ainda mais tipado.
*
*
* */