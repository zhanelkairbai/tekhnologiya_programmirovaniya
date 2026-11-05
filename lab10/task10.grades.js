export function addGrade(list, name, grade) {
    list.push({name, grade});
}

export function average(list) {
    let sum = 0;

    for (let item of list) {
        sum += item.grade;
    }

    return list.length ? sum / list.length : 0;
}
