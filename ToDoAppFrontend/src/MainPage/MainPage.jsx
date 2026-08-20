import "./MainPage.css";
import ToDoList from "../ToDoList/ToDoList.jsx";
import AddButton from "../Components/AddButton.jsx";
import LogoutButton from "../Components/BackButton.jsx";
import { useNavigate } from "react-router-dom";

export default function MainPage() {
  const navigate = useNavigate();
  const lists = [];

  return (
    <>
      <div className="contents">
        <div className="title">
          <h1 className="title-text">My Lists</h1>
        </div>
        <div className="separation-line"></div>
        {lists.length === 0 ? (
          <div className="empty-state">
            <p className="empty-state-title">No lists created</p>
            <p className="empty-state-message">
              Press the + button to create your first list.
            </p>
          </div>
        ) : (
          <ul className="lists">
            {lists.map((list) => (
              <li key={list.id}>
                <ToDoList list={list} />
              </li>
            ))}
          </ul>
        )}
        <AddButton onClick={() => navigate("/lists/new")} label="Create" />
        <LogoutButton />
      </div>
    </>
  );
}
