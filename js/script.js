const counter = document.querySelector(".counter")
const subtractButton = document.querySelector(".subtract")
const addButton = document.querySelector(".add")
var currentValue = Number(counter.innerText);

function incrementValue(number) {
    currentValue += number;
}

function displayValue() {
    counter.innerText = currentValue.toString()
}

function pressButton() {
    incrementValue(Number(this.getAttribute("data-increment-step")))
    displayValue()
}

subtractButton.addEventListener("click", pressButton)
addButton.addEventListener('click', pressButton)

