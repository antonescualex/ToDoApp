import "./MainPage.css";
import ToDoList from "../ToDoList/ToDoList.jsx";
import AddButton from "../Components/AddListButton.jsx";

export default function MainPage() {
  return (
    <div className="contents">
      <div className="title">
        <h className="title-text">My Lists</h>
      </div>
      <div className="separation-line"></div>
      <ul className="lists">
        <ToDoList />
      </ul>
      <AddButton />
    </div>
  );
}
