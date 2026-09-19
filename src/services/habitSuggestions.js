const API_BASE_URL =
    import.meta.env.VITE_API_BASE_URL ??
    "https://jsonplaceholder.typicode.com";

export async function fetchHabitSuggestions() {
    const response = await fetch(
        `${API_BASE_URL}/todos?_limit=6`,
    );

    if (!response.ok) {
        throw new Error(`Falha HTTP: ${response.status}`);
    }

    const todos = await response.json();

    return todos.map((todo) => ({
        id: todo.id,
        title: todo.title,
        completed: todo.completed,
    }));
}