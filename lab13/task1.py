spisok = ["Хлеб", "Молоко", "Яйца"]

print("Список покупок:", spisok)

spisok.append("Сахар")
print("После добавления:", spisok)

spisok.remove("Молоко")
print("После удаления:", spisok)

if "Хлеб" in spisok:
    print("Хлеб есть в списке")
else:
    print("Товара нет")

print("Итоговый список:", spisok)
