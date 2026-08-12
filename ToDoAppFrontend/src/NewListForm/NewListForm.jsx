import { useState } from "react";
import "./NewListForm.css";

export default function NewListForm({ onCreate, onCancel }) {
  const [name, setName] = useState("");

  function handleSubmit(event) {
    event.preventDefault();

    const trimmedName = name.trim();
    if (!trimmedName) return;

    onCreate?.(trimmedName);
    setName("");
  }

  return (
    <main className="new-list-page">
      <section className="new-list-card" aria-labelledby="new-list-title">
        <header className="new-list-header">
          <h1 id="new-list-title" className="new-list-title">New list</h1>
          <p className="new-list-subtitle">Give your list a clear, memorable name.</p>
        </header>

        <form className="new-list-form" onSubmit={handleSubmit}>
          <label className="new-list-field" htmlFor="list-name">
            <span>List name</span>
            <input
              id="list-name"
              name="name"
              value={name}
              onChange={(event) => setName(event.target.value)}
              placeholder="For example: Shopping"
              autoComplete="off"
              autoFocus
              maxLength="60"
              required
            />
          </label>

          <div className="new-list-actions">
            <button className="create-list-button" type="submit">Create list</button>
            <button className="cancel-list-button" type="button" onClick={onCancel}>Cancel</button>
          </div>
        </form>
      </section>
    </main>
  );
}
