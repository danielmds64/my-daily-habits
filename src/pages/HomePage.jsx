import { useContext, useEffect } from "react";
import HabitList from "../components/HabitList";
import Panel from "../components/Panel";
import { HabitsContext } from "../context/HabitsContext";

export default function HomePage() {
    const { habits, completedCount } = useContext(HabitsContext);
    
    useEffect(() => {
    const previousTitle = document.title;
    document.title = `${completedCount}/${habits.length} hábitos concluídos.`;

    return () => {
      document.title = previousTitle;
    };
  }, [completedCount, habits.length]);
      
    return (
        <>
            <header className="hero">
                <p className="eyebrow">MY-DAILY-HABITS</p>
                <h1>Pequenos hábitos, progresso visível.</h1>
                <p>{completedCount} de {habits.length} hábitos concluídos.</p>
            </header>
            
            <Panel title="Hábitos de hoje">
                <HabitList />
            </Panel>
        </>
    );
}