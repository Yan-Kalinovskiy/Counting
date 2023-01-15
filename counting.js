const example = document.querySelector('.js-example');
const massage = document.querySelector('.js-massage');
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

example.textContent = `${a} ${operator} ${b}`;

const formEl = document.querySelector("form");
formEl.addEventListener("submit", handleSubmit);

function handleSubmit(event) {
event.preventDefault();
const {
elements: { input }
} = event.currentTarget;

if (Number(inputEl.value) === result) {
massage.textContent = "Success!";
} else {
massage.textContent = "Error! Try again";
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


