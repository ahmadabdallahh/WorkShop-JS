// WorkShop 2.2

// button.addEventListener('click', () => {
//   if (number > 90) {
//     console.log('Grade one');
//   }
// });

function grade() {
  let number = parseInt(document.getElementById('num1').value);
  let message = '';
  let result = document.getElementById('message');
  if (number >= 90) {
    message = 'Excellent! Keep up the great work!';
  } else if (number >= 80) {
    message = "Very Good! You're doing really well!";
  } else if (number >= 70) {
    message = 'Good! Keep pushing forward!';
  } else if (number >= 60) {
    message = 'Pass. You can do even better!';
  } else {
    message = "Fail. Don't give up, keep trying!";
  }

  result.innerHTML = message;
}
