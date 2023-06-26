const nInputContainer = document.getElementById('nInput-container');
const displayError = document.getElementById('errorH2');
const resultElement = document.getElementById('result');
let numOfInput = 2;

function addInput() {
  let input = document.createElement("input");
  nInputContainer.appendChild(input);
  input.setAttribute('type', 'number');
  input.setAttribute('placeholder', '0');
  input.setAttribute('class', 'numberInput');
  numOfInput++;
  let breakLine = document.createElement("br");
  nInputContainer.appendChild(breakLine);
}

function add() {
  if (numOfInput < 10) {
    addInput();
  } else {
    displayError.style.display = 'flex';
  }
}

function calculate() {
  const inputs = document.getElementsByClassName('numberInput');
  let sum = 0;
  let quantity = 0;

  for (let i = 0; i < inputs.length; i++) {
    const input = inputs[i];
    if (input.value) {
      sum += parseFloat(input.value);
      quantity++;
    }
  }

  if (quantity > 0) {
    const average = sum / quantity;
    resultElement.textContent = "Média: " + average.toFixed(2);
  } else {
    resultElement.textContent = "Nenhum número inserido.";
  }
}
