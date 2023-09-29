const display = document.querySelector(".input-display");
const buttons = document.querySelectorAll("button");
const operators = ["+", "-", "*", "/", "="];
let answer = " ";

const calculate = (buttonValue) => {
    if (buttonValue === "=" && answer !== " ") {
        answer = eval(answer);
    } else if (buttonValue === "C") {
        answer = " ";
    } else {
        if (answer === " " && operators.includes(buttonValue))
        return;
        answer += buttonValue;
    }
    display.value = answer;
};

buttons.forEach((button) => {
    button.addEventListener("click", (e) => calculate(e.target.dataset.value));
});