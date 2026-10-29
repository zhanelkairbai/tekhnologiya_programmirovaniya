let btn = document.getElementById(“btn”);
let search = document.getElementById(“search”);
let result = document.getElementById(“result”);
let status = document.getElementById(“status”);

let posts = [];

btn.onclick = async function() {
status.textContent = “Загрузка…”;
result.replaceChildren();

try {
    let response = await fetch("https://jsonplaceholder.typicode.com/posts");
    if (!response.ok) {
        throw new Error("Ошибка");
    }
    posts = await response.json();
    showPosts(posts);
    status.textContent = "Публикации загружены";
} catch (error) {
    status.textContent = "Ошибка загрузки";
}

};

function showPosts(list) {
result.replaceChildren();

for (let post of list) {
    let p = document.createElement("p");
    p.textContent = post.id + ". " + post.title;
    result.appendChild(p);
}

}

search.oninput = function() {
let word = search.value.toLowerCase();

let filtered = posts.filter(function(post) {
    return post.title.toLowerCase().includes(word);
});
showPosts(filtered);

};
