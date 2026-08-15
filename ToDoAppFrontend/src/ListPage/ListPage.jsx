import "./ListPage.css";
import AddListButton from "../Components/AddButton.jsx";
import Task from "../Task/Task.jsx";
import LogoutButton from "../Components/BackButton.jsx";

export default function ListPage() {
  return (
    <div className="contents">
      <div className="title">
        <h1 className="title-text">Lista</h1>
      </div>
      <div className="separation-line"></div>
      <ul className="tasks">
        <Task />
        <Task />
        <Task />
      </ul>
      <AddListButton />
      <LogoutButton />
    </div>
  );
}
