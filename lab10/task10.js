export function save(data) {
    localStorage.setItem("grades", JSON.stringify(data));
}

export function load() {
    return JSON.parse(localStorage.getItem("grades")) || [];
}
