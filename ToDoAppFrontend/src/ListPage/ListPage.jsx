import "./ListPage.css";
import AddButton from "../Components/AddButton.jsx";
import Task from "../Task/Task.jsx";
import LogoutButton from "../Components/BackButton.jsx";
import { useNavigate, useParams } from "react-router-dom";

export default function ListPage() {
  const navigate = useNavigate();
  const { listId } = useParams();
  const tasks = [];

  return (
    <div className="contents">
      <div className="title">
        <h1 className="title-text">List</h1>
      </div>
      <div className="separation-line"></div>
      {tasks.length === 0 ? (
        <div className="empty-state">
          <p className="empty-state-title">No tasks created</p>
          <p className="empty-state-message">
            Press the + button to create your first task.
          </p>
        </div>
      ) : (
        <ul className="tasks">
          {tasks.map((task) => (
            <li key={task.id}>
              <Task
                title={task.title}
                description={task.description}
                completed={task.completed}
              />
            </li>
          ))}
        </ul>
      )}
      <AddButton
        onClick={() => navigate(`/lists/${listId}/tasks/new`)}
        label="Create"
      />
      <LogoutButton />
    </div>
  );
}
