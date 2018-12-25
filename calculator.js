let mainValue;
let mainOperator;

function printNumber(num) {
    var a = document.getElementById("write").innerText;
    if (a === "" && num === 0) {
        document.getElementById("write").innerText = "";
    } else if (a.length < 14) {
        document.getElementById("write").innerText = a + String(num);
    }
}

function backspace() {
    var a = document.getElementById("write").innerText;
    a = a.substring(0, a.length - 1);
    document.getElementById("write").innerText = a;
}
document.querySelector(".backspace").addEventListener("click", backspace);


function clearEverything() {
    document.getElementById("write").innerText = "";
}
document.querySelector(".clear").addEventListener("click", clearEverything);


function operator(operator) {
    mainValue = parseInt(document.getElementById("write").innerText);
    mainOperator = operator;
    clearEverything();
}

function result() {
    let secondMainValue = parseInt(document.getElementById("write").innerText);
    let endResult;
    if (mainOperator === "+") {
        endResult = mainValue + secondMainValue
    } else if (mainOperator === "-") {
        endResult = mainValue - secondMainValue;
    } else if (mainOperator === "*") {
        endResult = mainValue * secondMainValue;
    } else {
        endResult = mainValue / secondMainValue;
    }
    document.getElementById("write").innerText = endResult;
}
