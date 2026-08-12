import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import NewListForm from "./NewListForm/NewListForm.jsx";
import NewTaskForm from "./NewTaskForm/NewTaskForm.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <NewTaskForm />
  </StrictMode>,
);
