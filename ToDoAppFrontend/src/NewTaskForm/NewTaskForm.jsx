import { useState } from "react";
import "./NewTaskForm.css";

export default function NewTaskForm({ onCreate, onCancel }) {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [dueDate, setDueDate] = useState("");

  function handleSubmit(event) {
    event.preventDefault();

    const trimmedTitle = title.trim();
    if (!trimmedTitle) return;

    onCreate?.({
      title: trimmedTitle,
      description: description.trim(),
      dueDate: dueDate || null,
    });

    setTitle("");
    setDescription("");
    setDueDate("");
  }

  return (
    <main className="new-task-page">
      <section className="new-task-card" aria-labelledby="new-task-title">
        <header className="new-task-header">
          <h1 id="new-task-title" className="new-task-title">New task</h1>
          <p className="new-task-subtitle">Add the details you need to get it done.</p>
        </header>

        <form className="new-task-form" onSubmit={handleSubmit}>
          <label className="new-task-field" htmlFor="task-title">
            <span>Title</span>
            <input
              id="task-title"
              name="title"
              value={title}
              onChange={(event) => setTitle(event.target.value)}
              placeholder="For example: Buy groceries"
              autoComplete="off"
              autoFocus
              maxLength="80"
              required
            />
          </label>

          <label className="new-task-field" htmlFor="task-description">
            <span>Description <em>(optional)</em></span>
            <textarea
              id="task-description"
              name="description"
              value={description}
              onChange={(event) => setDescription(event.target.value)}
              placeholder="Add notes or helpful details"
              maxLength="300"
              rows="4"
            />
          </label>

          <label className="new-task-field" htmlFor="task-due-date">
            <span>Due date <em>(optional)</em></span>
            <input
              id="task-due-date"
              name="dueDate"
              type="date"
              value={dueDate}
              onChange={(event) => setDueDate(event.target.value)}
            />
          </label>

          <div className="new-task-actions">
            <button className="create-task-button" type="submit">Create task</button>
            <button className="cancel-task-button" type="button" onClick={onCancel}>Cancel</button>
          </div>
        </form>
      </section>
    </main>
  );
}
