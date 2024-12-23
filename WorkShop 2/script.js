// WorkShop 2.1

function addNumbers() {
  let num1 = parseInt(document.getElementById('num1').value);
  let num2 = parseInt(document.getElementById('num2').value);
  let result = num1 + num2;
  document.getElementById('result').innerHTML = `The Total Sum is => ${result}`;
}
