// storage.js (INTENTIONAL BUG: username saved under wrong key)
export function saveUsername(username) {
    // BUG: сохраняем под ключом 'user' вместо 'username'
    localStorage.setItem('user', username);
}

export function saveTodo(todo) {
    const todos = JSON.parse(localStorage.getItem('todos')) || [];
    todos.push(todo);
    localStorage.setItem('todos', JSON.stringify(todos));
}

export function getTodos() {
    return JSON.parse(localStorage.getItem('todos')) || [];
}
