students = ["Алия", "Дамир", "Алина"]

name = "Жанель"

if name not in students:
    students.append(name)

print("Участники:", students)

students.remove("Дамир")
print("После удаления:", students)

if "Алия" in students:
    print("Участник найден")

students.sort()
print("По алфавиту:", students)
