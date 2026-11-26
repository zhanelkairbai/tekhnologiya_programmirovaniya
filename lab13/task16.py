normal = []
urgent = []

normal.append("Сделать домашнее задание")
normal.append("Убраться дома")

urgent.append("Сдать лабораторную")
urgent.append("Подготовить презентацию")

print("Обычные задачи:", normal)
print("Срочные задачи:", urgent)

if len(urgent) > 0:
    print("Выполняем:", urgent.pop(0))
elif len(normal) > 0:
    print("Выполняем:", normal.pop(0))

print("Оставшиеся срочные:", urgent)
print("Оставшиеся обычные:", normal)
