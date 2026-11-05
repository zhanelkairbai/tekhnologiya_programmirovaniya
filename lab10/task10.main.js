import { addGrade, average } from "./grades.js";
import { save, load } from "./storage.js";

let grades = load();

function show() {
    let list = document.querySelector("#list");
    list.innerHTML = "";

    for (let item of grades) {
        list.innerHTML += "<li>" + item.name + " — " + item.grade + "</li>";
    }
}

show();

document.querySelector("#add").addEventListener("click", function() {
    let name = document.querySelector("#name").value;
    let grade = document.querySelector("#grade").value;

    if (name.trim() === "" || grade === "" || Number(grade) < 1 || Number(grade) > 100) {
        alert("Проверьте введенные данные");
        return;
    }

    addGrade(grades, name, Number(grade));
    save(grades);
    show();
});

document.querySelector("#average").addEventListener("click", function() {
    alert("Средний балл: " + average(grades).toFixed(1));
});
