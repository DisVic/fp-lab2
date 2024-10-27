import { getTodos } from './storage.js';

export function DisplayTodos() {
    const todoList = document.querySelector('#todo-list');
    todoList.innerHTML = "";
    const todos = getTodos();

    todos.forEach(todo => {
        const todoItem = document.createElement('div');
        todoItem.classList.add('todo-item');

        const label = document.createElement('label');
        const input = document.createElement('input');
        const span = document.createElement('span');
        const content = document.createElement('div');
        const actions = document.createElement('div');
        const edit = document.createElement('button');
        const deleteButton = document.createElement('button');

        input.type = 'checkbox';
        input.checked = todo.done;
        span.classList.add('bubble');
        if (todo.category === 'personal') {
            span.classList.add('personal');
        } else {
            span.classList.add('business');
        }
        content.classList.add('todo-content');
        actions.classList.add('actions');
        edit.classList.add('edit');
        deleteButton.classList.add('delete');

        content.innerHTML = `<input type="text" value="${todo.content}" readonly>`;
        edit.innerHTML = 'Редактировать';
        deleteButton.innerHTML = 'Удалить';

        label.appendChild(input);
        label.appendChild(span);
        actions.appendChild(edit);
        actions.appendChild(deleteButton);
        todoItem.appendChild(label);
        todoItem.appendChild(content);
        todoItem.appendChild(actions);

        if (todo.done) {
            todoItem.classList.add('done');
        }

        input.addEventListener('change', () => {
            todo.done = input.checked;
            localStorage.setItem('todos', JSON.stringify(todos));
            DisplayTodos();
        });

        edit.addEventListener('click', () => {
            const inputField = content.querySelector('input');
            inputField.removeAttribute('readonly');
            inputField.focus();
            inputField.addEventListener('blur', () => {
                inputField.setAttribute('readonly', true);
                todo.content = inputField.value;
                localStorage.setItem('todos', JSON.stringify(todos));
                DisplayTodos();
            });
        });

        deleteButton.addEventListener('click', () => {
            const updatedTodos = todos.filter(t => t !== todo);
            localStorage.setItem('todos', JSON.stringify(updatedTodos));
            DisplayTodos();
        });

        todoList.appendChild(todoItem);
    });
}
