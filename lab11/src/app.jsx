import { useState } from "react";

function LikeButton({ title }) {
  const [likes, setLikes] = useState(0);

  return (
    <div>
      <h3>{title}</h3>
      <p>Лайки: {likes}</p>
      <button onClick={() => setLikes(likes + 1)}>Лайк</button>
      <button onClick={() => setLikes(0)}>Сброс</button>
    </div>
  );
}

function TodoItem({ text, done, onClick }) {
  return (
    <p>
      {done ? "✅" : "⬜"} {text}
      <button onClick={onClick}>Выполнено</button>
    </p>
  );
}

function TodoList() {
  const [tasks, setTasks] = useState([
    { text: "Учеба", done: false },
    { text: "Домашнее задание", done: false }
  ]);

  const [newTask, setNewTask] = useState("");

  function addTask() {
    if (newTask.trim() !== "") {
      setTasks([...tasks, { text: newTask, done: false }]);
      setNewTask("");
    }
  }

  function changeTask(index) {
    const newTasks = [...tasks];
    newTasks[index] = {
      ...newTasks[index],
      done: !newTasks[index].done
    };
    setTasks(newTasks);
  }

  return (
    <div>
      <h3>Список задач</h3>

      <input
        value={newTask}
        onChange={(e) => setNewTask(e.target.value)}
        placeholder="Новая задача"
      />

      <button onClick={addTask}>Добавить</button>

      {tasks.map((task, index) => (
        <TodoItem
          key={index}
          text={task.text}
          done={task.done}
          onClick={() => changeTask(index)}
        />
      ))}
    </div>
  );
}

function ExpenseForm({ addExpense }) {
  const [name, setName] = useState("");
  const [price, setPrice] = useState("");
  const [category, setCategory] = useState("Еда");

  function save() {
    if (name.trim() !== "" && Number(price) > 0) {
      addExpense({
        name: name,
        price: Number(price),
        category: category
      });

      setName("");
      setPrice("");
    }
  }

  return (
    <div>
      <h3>Добавить расход</h3>

      <input
        placeholder="Название"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />

      <input
        type="number"
        placeholder="Сумма"
        value={price}
        onChange={(e) => setPrice(e.target.value)}
      />

      <select
        value={category}
        onChange={(e) => setCategory(e.target.value)}
      >
        <option>Еда</option>
        <option>Транспорт</option>
        <option>Покупки</option>
      </select>

      <button onClick={save}>Добавить</button>
    </div>
  );
}

function ExpenseList({ expenses }) {
  return (
    <div>
      <h3>Мои расходы</h3>

      {expenses.map((item, index) => (
        <p key={index}>
          {item.name} — {item.price} тг ({item.category})
        </p>
      ))}
    </div>
  );
}

export default function App() {
  const [expenses, setExpenses] = useState([]);

  const total = expenses.reduce(
    (sum, item) => sum + item.price,
    0
  );

  return (
    <div>
      <h1>Лабораторная работа №11</h1>

      <hr />

      <h2>1. Базовый уровень</h2>
      <LikeButton title="Счетчик лайков" />

      <hr />

      <h2>2. Средний уровень</h2>
      <TodoList />

      <hr />

      <h2>3. Повышенный уровень</h2>

      <ExpenseForm
        addExpense={(item) =>
          setExpenses([...expenses, item])
        }
      />

      <ExpenseList expenses={expenses} />

      <h3>Общая сумма: {total} тг</h3>
    </div>
  );
}
