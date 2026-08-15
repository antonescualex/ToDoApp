import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import NewListForm from "./NewListForm/NewListForm.jsx";
import NewTaskForm from "./NewTaskForm/NewTaskForm.jsx";
import MainPage from "./MainPage/MainPage.jsx";
import ListPage from "./ListPage/ListPage.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <ListPage />
  </StrictMode>,
);
