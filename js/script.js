const body = document.querySelector("body")
const incrementStepAttribute = "data-increment-step"

// Create counter element
var counter = document.createElement('div')
counter.classList.add("counter")
counter.innerText = "0"
body.appendChild(counter)

// Create control elements
var controls = document.createElement("div")
controls.classList.add("controls")
body.appendChild(controls)

var subtractButton = document.createElement("button")
subtractButton.innerText = "-"
subtractButton.setAttribute(incrementStepAttribute,"-1")
controls.appendChild(subtractButton)

var addButton = document.createElement("button")
addButton.innerText = "+"
addButton.setAttribute(incrementStepAttribute,"1")
controls.appendChild(addButton)

// Counter functionality
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

[addButton, subtractButton].forEach(button => {
    button.addEventListener("click", pressButton) 
});

