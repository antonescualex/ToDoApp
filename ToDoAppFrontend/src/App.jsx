import { Routes, Route } from "react-router-dom";
import MainPage from "./MainPage/MainPage.jsx";
import NewListForm from "./NewListForm/NewListForm.jsx";
import ListPage from "./ListPage/ListPage.jsx";
import NewTaskForm from "./NewTaskForm/NewTaskForm.jsx";

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<MainPage />} />
      <Route path="/lists/new" element={<NewListForm />} />
      <Route path="/lists/:listId" element={<ListPage />} />
      <Route path="/lists/:listId/tasks/new" element={<NewTaskForm />} />
    </Routes>
  );
}
