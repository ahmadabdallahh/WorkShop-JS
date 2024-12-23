// Image Gallery

for (let i = 1; i <= 6; i++) {
  let imageContainer = document.getElementsByClassName('image-container')[0];
  let image = document.createElement('img');
  image.src = `https://picsum.photos/200/300?random=${i}`;
  imageContainer.appendChild(image);
}