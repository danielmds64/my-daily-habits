import { useContext } from "react";
import { Link, useNavigate, useParams } from "react-router";
import { HabitsContext } from "../context/HabitsContext";

export default function HabitDetailsPage() {
    const { habitId } = useParams();
    const navigate = useNavigate();
    const { habits } = useContext(HabitsContext);

    const habit = habits.find((item) => item.id === habitId);

    if (!habit) { 
        return (
            <section>
                <h1>Hábito não encontrado</h1>
                <Link to="/habitos">Voltar à lista</Link>
            </section>
        );
    }

    return (
        <article>
            <p className="eyebrow">DETALHES DO HÁBITO</p>
            <h1>{habit.title}</h1>
            <p>Meta: {habit.goal}</p>
            <p>Status: {habit.completed ? "Concluído" : "Pendente"}</p>

            <button type="button" onClick={() => navigate(-1)}>
                Voltar
            </button>
        </article>
    );
}