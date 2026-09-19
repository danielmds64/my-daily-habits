import { useEffect, useState } from "react";
import { fetchHabitSuggestions } from "../services/habitSuggestions";

export default function SuggestiosPage() {
    const [suggestions, setSuggestions] = useState([]);
    const [status, setStatus] = useState("idle");
    const [errorMessage, setErrorMessage] = useState("");
    const [requestVersion, setRequestVersion] = useState(0);

    useEffect(() => {
        const controller = new AbortController();

        async function loadSuggestions() {
            setStatus("loading");
            setErrorMessage("");

            try {
                const data = await fetchHabitSuggestions({
                    signal: controller.signal,
                });

                setSuggestions(data);
                setStatus("success");
            } catch (error) {
                if (error.name === "AbortError") return;

                setSuggestions([]);
                setErrorMessage(
                    error.message || "Não foi possível carregar as sugestões.",
                );
                setStatus("error");
            }
        }

        loadSuggestions();

        return () => {
            controller.abort();
        };
    }, [requestVersion]);

    function handleRetry() {
        setRequestVersion((version) => version + 1);
    }

    return (
        <section>
            <p className="eyebrow">API EXTERNA</p>       
            <h1>Sugestões de prática</h1>        
            
            {status === "loading" && (         
                <p role="status">Carregando sugestões...</p>
            )}        
            
            {status === "error" && (         
                <div role="alert" className="error-state">           
                    <p>{errorMessage}</p>           
                    <button type="button" onClick={handleRetry}>             
                        Tentar novamente           
                    </button>
                </div>
            )}

            {status === "success" && suggestions.length === 0 && ( 
                <p>Nenhuma sugestão disponível neste momento.</p> 
            )} 

            {status === "success" && suggestions.length > 0 && ( 
                <ul className="suggestion-list"> 
                    {suggestions.map((suggestion) => ( 
                    <li key={suggestion.id}>{suggestion.title}</li> 
                    ))}
                </ul>
            )}
        </section> 
    );
}