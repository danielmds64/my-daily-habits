import { useNavigate } from "react-router";
import HabitForm from "../components/HabitForm";
import Panel from "../components/Panel";

export default function NewHabitPage() {
  const navigate = useNavigate();
    
  return (
    <>
      <h1>Novo hábito</h1>
      <Panel title="Cadastre uma pequena meta">
        <HabitForm onSuccess={() => navigate("/")} />
      </Panel>
    </>
  );
}