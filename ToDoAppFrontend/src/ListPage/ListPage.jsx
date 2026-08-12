import "./ListPage.css";
import AddTaskButton from "../Components/AddTaskButton.jsx";
import Task from "../Task/Task.jsx";

export default function ListPage() {
  return (
    <div className="contents">
      <div className="title">
        <h className="title-text">Lista</h>
      </div>
      <div className="separation-line"></div>
      <ul className="tasks">
        <Task />
      </ul>
      <AddTaskButton />
    </div>
  );
}
