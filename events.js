import { saveUsername, saveTodo } from './storage.js';
import { DisplayTodos } from './dom.js';

export function initializeEventListeners() {
    const nameInput = document.querySelector('#name');
    const newTodoForm = document.querySelector('#new-todo-form');

    nameInput.value = localStorage.getItem('username') || '';

    nameInput.addEventListener('change', (e) => saveUsername(e.target.value));

    newTodoForm.addEventListener('submit', (e) => {
        e.preventDefault();
        const todo = {
            content: e.target.elements.content.value,
            category: e.target.elements.category.value,
            done: false,
            createdAt: new Date().getTime(),
        };
        saveTodo(todo);
        e.target.reset();
        DisplayTodos();
    });
}
