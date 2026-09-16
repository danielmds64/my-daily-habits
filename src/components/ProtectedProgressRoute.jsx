import { useContext } from "react";
import { HabitsContext } from "../context/HabitsContext";

export default function ProtectedProgressRoute({ children }) {
    const { habits } = useContext(HabitsContext);

    if (habits.length === 0) {
        return <Navigate to="/novo" replace />;
    }

    return children;
}