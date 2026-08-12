import "./ToDoList.css";

export default function ToDoList({ name = "New list", onClick }) {
  return (
    <li className="list-item">
      <button className="todo-list-card" type="button" onClick={onClick}>
        <span className="name">{name}</span>
      </button>
    </li>
  );
}
