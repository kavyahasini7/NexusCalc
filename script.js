const expression = document.getElementById("expression");
const result = document.getElementById("result");

const buttons = document.querySelectorAll(".calculator-grid button");

let currentInput = "";
const historyList = document.getElementById("history-list");

let history = [];
function addToHistory(calculation){

    history.push(calculation);

    historyList.innerHTML = "";

    history.forEach(item => {

        const div = document.createElement("div");

        div.textContent = item;

        historyList.appendChild(div);

    });

}

buttons.forEach(button => {

    button.addEventListener("click", () => {

        const value = button.dataset.value;

        switch(value){

            case "AC":
                currentInput = "";
                expression.textContent = "";
                result.textContent = "0";
                break;
                case "CE":
    currentInput = currentInput.slice(0, -1);
    expression.textContent = currentInput;

    if(currentInput === ""){
        result.textContent = "0";
    }

    break;

            case "BACK":
                currentInput = currentInput.slice(0,-1);
                expression.textContent = currentInput;
                break;
                case "sqrt":

    try{
        const answer = Math.sqrt(Number(currentInput));
        result.textContent = answer;
    }
    catch{
        result.textContent = "Error";
    }

    break;


case "sin":

    try{
        const answer = Math.sin(Number(currentInput) * Math.PI / 180);
        result.textContent = answer;
    }
    catch{
        result.textContent = "Error";
    }

    break;


case "cos":

    try{
        const answer = Math.cos(Number(currentInput) * Math.PI / 180);
        result.textContent = answer;
    }
    catch{
        result.textContent = "Error";
    }

    break;


case "tan":

    try{
        const answer = Math.tan(Number(currentInput) * Math.PI / 180);
        result.textContent = answer;
    }
    catch{
        result.textContent = "Error";
    }

    break;


case "pi":

    currentInput += "π";
    expression.textContent = currentInput;

    break;

           case "=":
    try{

        let expressionToSolve = currentInput
            .replace(/π/g, Math.PI);

        const answer = eval(expressionToSolve);

        result.textContent = answer;

        addToHistory(
            `${currentInput} = ${answer}`
        );

    }
    catch{
        result.textContent = "Error";
    }
    break;
            default:
                currentInput += value;
                expression.textContent = currentInput;

        }

    });

});
const themeBtn = document.getElementById("theme-btn");
const themeIcon = themeBtn.querySelector("i");

if(localStorage.getItem("theme") === "dark"){
    document.body.classList.add("dark-mode");
}

themeBtn.addEventListener("click", () => {

    document.body.classList.toggle("dark-mode");

    if(document.body.classList.contains("dark-mode")){

        localStorage.setItem("theme","dark");

        themeIcon.classList.remove("fa-moon");
        themeIcon.classList.add("fa-sun");

    }else{

        localStorage.setItem("theme","light");

        themeIcon.classList.remove("fa-sun");
        themeIcon.classList.add("fa-moon");

    }

});
const historyBtn = document.getElementById("history-btn");
const historyPanel = document.getElementById("history-panel");

historyBtn.addEventListener("click", () => {
    historyPanel.classList.toggle("show-history");
});
const clearHistoryBtn =
document.getElementById("clear-history");

clearHistoryBtn.addEventListener("click", () => {

    history = [];

    historyList.innerHTML = "";

});
document.addEventListener("keydown", (event) => {

    const key = event.key;

    if(
        "0123456789+-*/.".includes(key)
    ){
        currentInput += key;
        expression.textContent = currentInput;
    }

    else if(key === "Backspace"){
        currentInput = currentInput.slice(0,-1);
        expression.textContent = currentInput;
    }

    else if(key === "Escape"){
        currentInput = "";
        expression.textContent = "";
        result.textContent = "0";
    }

    else if(key === "Enter"){

        try{

            let expressionToSolve =
            currentInput.replace(/π/g, Math.PI);

            const answer =
            eval(expressionToSolve);

            result.textContent = answer;

            addToHistory(
                `${currentInput} = ${answer}`
            );

        }
        catch{
            result.textContent = "Error";
        }

    }

});
