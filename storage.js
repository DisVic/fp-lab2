export function saveUsername(username) {
    localStorage.setItem('username', username);
}

export function saveTodo(todo) {
    const todos = JSON.parse(localStorage.getItem('todos')) || [];
    todos.push(todo);
    localStorage.setItem('todos', JSON.stringify(todos));
}

export function getTodos() {
    return JSON.parse(localStorage.getItem('todos')) || [];
}
