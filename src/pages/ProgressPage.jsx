import { useContext } from "react";
import { HabitsContext } from "../context/HabitsContext";

export default function ProgressPage() {
    const { habits, completedCount } = useContext(HabitsContext);
    const percentage = Math.round(
        (completedCount / habits.length) * 100,
    );

    return (
        <section>
            <p className="eyebrow">PROGRESSO</p>
            <h1>{percentage}% concluído hoje</h1>
            <p>{completedCount} de {habits.length} hábitos foram concluídos.</p>
        </section>
    );
}