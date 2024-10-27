import { initializeEventListeners } from './events.js';
import { DisplayTodos } from './dom.js';

window.addEventListener('load', () => {
    initializeEventListeners();
    DisplayTodos();
});
