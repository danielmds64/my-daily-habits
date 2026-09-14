import { useContext } from "react";
import { HabitsContext } from "../context/HabitsContext";
import HabitCard from "./HabitCard";

export default function HabitList() {
    const habitsContext = useContext(HabitsContext);

    if (!habitsContext) {
        throw new Error("HabitList precisa estar dentro de HabitsProvider.");
    }

    const { habits, toggleHabit } = habitsContext;

    if (habits.length === 0) {
        return <p>Nenhum hábito cadastrado.</p>
    }

    return (
        <section className="habit-list" aria-label="Hábitos de hoje">
            {habits.map((habit) => (
                <HabitCard
                    key={habit.id}
                    {...habit}
                    onToggle={toggleHabit}
                />
            ))}
        </section>
    );
}