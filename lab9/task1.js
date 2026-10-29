let btn = document.getElementById(“btn”);
let result = document.getElementById(“result”);
let status = document.getElementById(“status”);

btn.onclick = async function() {
status.textContent = “Загрузка…”;
result.replaceChildren();

try {
    let response = await fetch("https://jsonplaceholder.typicode.com/posts?_limit=10");
    if (!response.ok) {
        throw new Error("Ошибка загрузки");
    }
    let posts = await response.json();
    for (let post of posts) {
        let p = document.createElement("p");
        p.textContent = post.id + ". " + post.title;
        result.appendChild(p);
    }
    status.textContent = "Готово!";
} catch (error) {
    status.textContent = "Ошибка загрузки данных";
}

};
