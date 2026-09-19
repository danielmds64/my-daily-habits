import { Route, Routes } from "react-router";
import ProtectedProgressRoute from "./components/ProtectedProgressRoute";
import AppLayout from "./layouts/AppLayout";
import HabitsLayout from "./layouts/HabitsLayout";
import AboutPage from "./pages/AboutPage";
import HabitDetailsPage from "./pages/HabitDetailsPage";
import HabitsPage from "./pages/HabitsPage";
import HomePage from "./pages/HomePage";
import NewHabitPage from "./pages/NewHabitPage";
import NotFoundPage from "./pages/NotFoundPage";
import ProgressPage from "./pages/ProgressPage";
import "./App.css"
import SuggestiosPage from "./pages/SuggestionsPage";

export default function App() {
  return (
    <Routes>
      <Route element={<AppLayout />}>
        <Route index element={<HomePage />} />
        <Route path="novo" element={<NewHabitPage />} />
        
        <Route path="habitos" element={<HabitsLayout />}>
          <Route index element={<HabitsPage />} />
          <Route path=":habitId" element={<HabitDetailsPage />} />
        </Route>

        <Route
          path="progresso"
          element={
            <ProtectedProgressRoute>
              <ProgressPage />
            </ProtectedProgressRoute>
          }
        />

        <Route path="sugestoes" element={<SuggestiosPage />} />
        <Route path="sobre" element={<AboutPage />} />
        <Route path="*" element={<NotFoundPage />} />
      
      </Route>
    </Routes>
  );
}