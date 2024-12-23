// Create Image gallery by using JS only

let myDiv = document.createElement('div');
let text = document.createTextNode('Hello from JS file');

myDiv.setAttribute('class', 'parent');

for (let i = 1; i <= 1000; i++) {
  let myP = document.createElement('img');
  myP.src = `https://picsum.photos/200/300?random=${i}`;
  myDiv.appendChild(myP);
}

document.body.appendChild(myDiv);
