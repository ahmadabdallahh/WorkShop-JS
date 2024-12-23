// Menu items

let object = [
  {
    name: 'Chicken',
    price: 60,
    description: 'Lorem that is code from JS file',
    image: 'images/food1.png',
  },
  {
    name: 'Pizza',
    price: 50,
    description: 'Lorem that is code from JS file',
    image: 'images/food1.png',
  },
  {
    name: 'Food',
    price: 60,
    description: 'Lorem that is code from JS file',
    image: 'images/food1.png',
  },
  {
    name: 'Food',
    price: 60,
    description: 'Lorem that is code from JS file',
    image: 'images/food1.png',
  },
  {
    name: 'Food',
    price: 60,
    description: 'Lorem that is code from JS file',
    image: 'images/food1.png',
  },
  {
    name: 'Food',
    price: 60,
    description: 'Lorem that is code from JS file',
    image: 'images/food1.png',
  },
];

window.onload = function () {
  let menuLeft = document.getElementsByClassName('menu-left')[0];
  let menuRight = document.getElementsByClassName('menu-right')[0];
  let menuContainer = document.getElementsByClassName('menu-container');
  object.forEach(function (item, index) {
    let newItem = `
    <div class="image">
    <img src="${item.image}" alt="${item.description}">
    </div>
    <h3>${item.name}</h3>
    <span>${item.price}</span>
    <p>${item.description}</p>
    </div>
    `;

    if (index < object.length / 2) {
      menuRight.innerHTML += newItem;
    } else {
      menuLeft.innerHTML += newItem;
    }
  });
};
