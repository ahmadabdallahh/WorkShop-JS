function add() {
  const num1 = Number(document.getElementById('num1').value);
  const num2 = Number(document.getElementById('num2').value);
  const result = document.getElementById('result');
  let total = num1 + num2;
  result.textContent = total;
}
