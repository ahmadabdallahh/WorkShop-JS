/*
    Creating a List of Employee Objects in JavaScript Using a Loop To
    access and manipulate each employee object
*/

let object = [
  { name: 'Cole', age: 31, title: 'IT', email: 'hojhonew@id.rw' },
  { name: 'Noah', age: 27, title: 'classroom', email: 'inu@vani.ni' },
  {
    name: 'Henry',
    age: 21,
    title: 'development',
    email: 'maltedgur@haguun.ma',
  },
  { name: 'Augusta', age: 16, title: 'longer', email: 'deh@osora.no' },
];

for (let i = 0; i < object.length; i++) {
  console.log(object[i].name);
}
