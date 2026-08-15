import "./MainPage.css";
import ToDoList from "../ToDoList/ToDoList.jsx";
import AddButton from "../Components/AddButton.jsx";
import LogoutButton from "../Components/BackButton.jsx";

export default function MainPage() {
  return (
    <>
      <div className="contents">
        <div className="title">
          <h className="title-text">My Lists</h>
        </div>
        <div className="separation-line"></div>
        <ul className="lists">
          <ToDoList />
          <ToDoList />
          <ToDoList />
          <ToDoList />
          <ToDoList />
          <ToDoList />
          <ToDoList />
        </ul>
        <AddButton />
        <LogoutButton />
      </div>
    </>
  );
}
