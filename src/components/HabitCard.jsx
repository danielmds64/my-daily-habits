import { Link } from "react-router";

export default function HabitCard({ id, title, goal, completed, onToggle, }) {
    return(
        <article className={`habit-card ${completed ? "is-complete" : ""}`}>
            <div>
                <h2>{title}</h2>
                <p>Meta: {goal}</p>
                <Link to={`/habitos/${id}`}>Ver detalhes</Link>
            </div>

            <button type="button" onClick={() => onToggle(id)}>
                {completed ? "Desmarcar" : "Concluir"}
            </button>
        </article>
    );    
}