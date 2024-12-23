/*
    Write the required code to design gallery images using html, css based on grid .
    2. You must use JavaScript to repeat images
*/

let myDiv = document.createElement('div');
let myText = document.createTextNode('This is TextNode');
let imageContainer = document.getElementById('image-container');

for (let i = 1; i <= 6; i++) {
  let myImage = document.createElement('img');
  myImage.src = `images/camping-${i}.jpg`;
  myDiv.appendChild(myImage);
}

imageContainer.appendChild(myDiv);

document.body.prepend(imageContainer);
