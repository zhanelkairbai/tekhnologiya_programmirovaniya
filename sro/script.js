let contacts = JSON.parse(localStorage.getItem("contacts")) || [];

function saveContacts() {
    localStorage.setItem("contacts", JSON.stringify(contacts));
}

function addContact() {

    let name = document.getElementById("name").value.trim();
    let phone = document.getElementById("phone").value.trim();
    let group = document.getElementById("group").value;

    if (name === "" || phone === "") {
        alert("Заполните все поля!");
        return;
    }

    if (!/^[0-9+() -]{5,20}$/.test(phone) || !/[0-9]/.test(phone)) {
        alert("Введите корректный номер телефона!");
        return;
    }

    let contact = {
        name: name,
        phone: phone,
        group: group
    };

    contacts.push(contact);

    saveContacts();

    document.getElementById("name").value = "";
    document.getElementById("phone").value = "";

    showContacts();
}

function showContacts() {

    let list = document.getElementById("contactList");
    let search = document.getElementById("search").value.toLowerCase();
    let filter = document.getElementById("filter").value;

    list.innerHTML = "";

    for (let i = 0; i < contacts.length; i++) {

        let contact = contacts[i];

        if (contact.name.toLowerCase().includes(search)) {

            if (filter === "Все" || contact.group === filter) {

                let li = document.createElement("li");

                let info = document.createElement("p");
                info.textContent = contact.name + " - " +
                    contact.phone + " (" + contact.group + ")";

                let editButton = document.createElement("button");
                editButton.textContent = "Изменить";
                editButton.onclick = function() {
                    editContact(i);
                };

                let deleteButton = document.createElement("button");
                deleteButton.textContent = "Удалить";
                deleteButton.onclick = function() {
                    deleteContact(i);
                };

                li.appendChild(info);
                li.appendChild(editButton);
                li.appendChild(deleteButton);

                list.appendChild(li);
            }
        }
    }
}

function deleteContact(index) {

    contacts.splice(index, 1);

    saveContacts();
    showContacts();
}

function editContact(index) {

    let newName = prompt("Введите новое имя:", contacts[index].name);

    if (newName === null) return;

    newName = newName.trim();

    if (newName === "") {
        alert("Имя не может быть пустым!");
        return;
    }

    let newPhone = prompt("Введите новый номер:", contacts[index].phone);

    if (newPhone === null) return;

    newPhone = newPhone.trim();

    if (!/^[0-9+() -]{5,20}$/.test(newPhone) || !/[0-9]/.test(newPhone)) {
        alert("Введите корректный номер!");
        return;
    }

    contacts[index].name = newName;
    contacts[index].phone = newPhone;

    saveContacts();
    showContacts();
}

showContacts();
