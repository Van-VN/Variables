let amount;
let inputCur;
let outputCur;
let exchangedValue;

function exchange() {
    amount = +document.getElementById("amount").value;
    inputCur = document.getElementById("inputCurr").value;
    outputCur = document.getElementById("outputCurr").value;
    console.log(amount, inputCur, outputCur);

    if (isNaN(amount) || amount < 0) {
        alert("Nhập sai dữ liệu");
    } else if (inputCur == outputCur) {
        exchangedValue = amount;
        printingOutput();
    } else if (inputCur === "VND" && outputCur === "USD") {
        exchangedValue = amount / 23700;
        printingOutput();
    } else if (inputCur === "VND" && outputCur === "EUR") {
        exchangedValue = amount / 25000;
        printingOutput();
    } else if (inputCur === "USD" && outputCur === "EUR") {
        exchangedValue = amount / 1.06;
        printingOutput();
    } else if (inputCur === "USD" && outputCur === "VND") {
        exchangedValue = amount * 23700;
        printingOutput();
    } else if (inputCur === "EUR" && outputCur === "USD") {
        exchangedValue = amount / 0.94;
        printingOutput();
    } else if (inputCur === "EUR" && outputCur === "VND") {
        exchangedValue = amount * 25000;
        printingOutput();
    }
}

function printingOutput() {
    document.getElementById("result").innerHTML = exchangedValue + " " + outputCur;
}