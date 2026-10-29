let btn = document.getElementById(“btn”);
let filter = document.getElementById(“filter”);
let userId = document.getElementById(“userId”);
let result = document.getElementById(“result”);
let status = document.getElementById(“status”);
let count = document.getElementById(“count”);

let todos = [];

btn.onclick = async function() {
status.textContent = “Загрузка…”;
result.replaceChildren();

try {
    let response = await fetch("https://jsonplaceholder.typicode.com/todos");
    if (!response.ok) {
        throw new Error("Ошибка");
    }
    todos = await response.json();
    let done = todos.filter(function(todo) {
        return todo.completed;
    }).length;
    let notDone = todos.length - done;
    count.textContent = "Выполнено: " + done + 
        ", не выполнено: " + notDone;
    showTodos(todos);
    status.textContent = "Задачи загружены";
} catch (error) {
    status.textContent = "Ошибка загрузки";
}

};

function showTodos(list) {
result.replaceChildren();

for (let todo of list) {
    let p = document.createElement("p");
    p.textContent = todo.userId + ". " + todo.title;
    if (todo.completed) {
        p.textContent += " (Выполнено)";
    } else {
        p.textContent += " (Не выполнено)";
    }
    result.appendChild(p);
}

}

filter.onclick = function() {
let id = Number(userId.value);

if (id < 1 || id > 10 || userId.value === "") {
    status.textContent = "Введите ID от 1 до 10";
    return;
}
let filtered = todos.filter(function(todo) {
    return todo.userId === id;
});
showTodos(filtered);
status.textContent = "Задачи пользователя " + id;

};
