import { toF, toC, toK } from "./temperature.js";

let temp = document.querySelector("#temp");
let result = document.querySelector("#result");

document.querySelector("#fahrenheit").addEventListener("click", function() {
    if (temp.value === "") {
        result.textContent = "Введите температуру";
    } else {
        result.textContent = toF(Number(temp.value)).toFixed(2) + " °F";
    }
});

document.querySelector("#celsius").addEventListener("click", function() {
    if (temp.value === "") {
        result.textContent = "Введите температуру";
    } else {
        result.textContent = toC(Number(temp.value)).toFixed(2) + " °C";
    }
});

document.querySelector("#kelvin").addEventListener("click", function() {
    if (temp.value === "" || Number(temp.value) < -273.15) {
        result.textContent = "Введите корректную температуру";
    } else {
        result.textContent = toK(Number(temp.value)).toFixed(2) + " K";
    }
});
