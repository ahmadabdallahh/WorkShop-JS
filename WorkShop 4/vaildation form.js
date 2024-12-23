// Validation Form

const fullName = document.getElementById('name').value;
const email = document.getElementById('email').value;
const subject = document.getElementById('subject').value;
const message = document.getElementById('message').value;

function valid() {
  if (fullName === '' || email === '' || subject === '' || message === '') {
    alert('You should put Valid Inputs');
    return false;
  }

  if (email.indexOf('@') === -1 || email.indexOf('.' === -1)) {
    alert('Enter Correct Email');
    return false;
  }
  return true;
}
