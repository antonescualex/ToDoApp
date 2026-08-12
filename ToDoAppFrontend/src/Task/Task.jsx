import "./Task.css";
import Checkbox from "../Components/Checbox.jsx";

export default function Task({
  title = "Finalizeaza task-ul",
  description = "Adauga aici o scurta descriere.",
  completed = false,
}) {
  return (
    <article className="task">
      <Checkbox
        completed={completed}
        label={`Marcheaza ${title} ca finalizat`}
      />
      <span className="task-content">
        <span className="task-title">{title}</span>
        {description && <span className="task-description">{description}</span>}
      </span>
    </article>
  );
}
