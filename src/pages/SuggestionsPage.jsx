import { useState } from "react";
import { fetchHabitSuggestions } from "../services/habitSuggestions";

export default function SuggestiosPage() {
    const [suggestions, setSuggestions] = useState([]);
    const [message, setMessage] = useState(
        "Clique para buscar sugestões.",
    );

    async function handleLoadSuggestions() {
        try {
            setMessage("Buscando sugestões...");
            const data = await fetchHabitSuggestions();
            setSuggestions(data);
            setMessage(`${data.length} sugestões recebidas.`);
        } catch (error) {
            setSuggestions([]);
            setMessage(error.message);
        }
    }

    return (
        <section>
            <p className="eyebrow">API EXTERNA</p>
            <h1>Sugestões de prática</h1>

            <button type="button" onClick={handleLoadSuggestions}>
                Buscar sugestões
            </button>

            <p role="status">{message}</p>

            <ul>
                {suggestions.map((suggestion) => (
                    <li key={suggestion.id}>{suggestion.title}</li>
                ))}
            </ul>
        </section>
    );
}