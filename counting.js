const example = document.querySelector('.js-example');
const message = document.querySelector('.js-message');
const inputEl = document.querySelector('input');

const a = getNumber(1,9);
const b = getNumber(1,9);
const operator = randomOperator();

let result;
if (operator === "+") {
result = a + b;
} else {
result = a - b;
}

example.textContent = `${a} ${operator} ${b} = `;

const formEl = document.querySelector("form");
formEl.addEventListener("submit", handleSubmit);

function handleSubmit(event) {
event.preventDefault();
const {
elements: { input }
} = event.currentTarget;

if (Number(inputEl.value) === result) {
message.textContent = "Success!";
example.textContent += inputEl.value;
setTimeout(() => {
  location.reload();
  }, 1800);
} else {
message.textContent = "Error! Try again";
}
event.currentTarget.reset();
}

function getNumber (min, max){
min = Math.ceil(min);
max = Math.floor(max);
return Math.floor(Math.random() * (max - min) + 1);
}

function randomOperator() {
var operators = ['+', '-'];
var randomIndex = Math.floor(Math.random() * operators.length);
return operators[randomIndex];
}

