const counter = document.querySelector(".counter")
const buttons = document.querySelectorAll("[data-control]")
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

buttons.forEach(button => {
    button.addEventListener("click", pressButton) 
});

