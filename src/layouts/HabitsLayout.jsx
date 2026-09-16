import { Outlet } from "react-router";

export default function HabitsLayout() {
    return (
        <section>
            <p className="eyebrow">MINHA ROTINA</p>
            <h1>Hábitos</h1>
            <Outlet />
        </section>
    );
}