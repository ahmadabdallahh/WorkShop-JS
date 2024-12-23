// random Names

const names = ['Ahmed', 'Mohamed', 'Yosra', 'David', 'Asmaa'];

let random = Math.floor(Math.random() * names.length);

console.log(`WorkShop One => ${names[random]}`);

// Access through object Values => WorkShop 3.2

console.log('WorkShop 3.2 👇👇👇');

let array = [
  { name: 'David', age: 42, title: 'IT' },
  { name: 'Cora', age: 36, title: 'Developer' },
  { name: 'Norman', age: 15, title: 'IT' },
  { name: 'Gilbert', age: 37, title: 'Developer' },
];

for (let i of array) {
  console.log(`- ${i.age}`);
}
