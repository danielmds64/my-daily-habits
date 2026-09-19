import { NavLink, Outlet } from "react-router";

export default function AppLayout() {
    return (
        <div className="app-shell">
            <header className="app-header">
                <strong>My Daily Habits</strong>
                <nav aria-label="Navegação principal">
                    <NavLink to="/" end>Hoje</NavLink>
                    <NavLink to="/novo">Novo hábito</NavLink>
                    <NavLink to="/habitos">Hábitos</NavLink>
                    <NavLink to="/progresso">Progresso</NavLink>
                    <NavLink to="/sugestoes">Sugestões</NavLink>
                    <NavLink to="/sobre">Sobre</NavLink>
                </nav>
            </header>

            <main className="app">
                <Outlet />
            </main>
        </div>
    );
}