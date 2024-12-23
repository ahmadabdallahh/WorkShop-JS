// Form Validation

function validateForm() {
  let name = document.getElementById('name').value;
  let email = document.getElementById('email').value;
  let subject = document.getElementById('subject').value;
  let message = document.getElementById('message').value;

  if (name === '' || email === '' || subject === '' || message === '') {
    alert('Error');
    return false;
  }

  if (email.indexOf('@') === -1 || email.indexOf('.') === -1) {
    alert('Please enter a valid email address');
    return false;
  }

  return true;
}
