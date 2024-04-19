
let todos = [
    // { id: 11111, name: 'сходить за хлебом1', isDone: false },
    // { id: 22222, name: 'сходить за хлебом2', isDone: false },
    // { id: 33333, name: 'сходить за хлебом3', isDone: false },
]

// отобразить все todo
const showTodos = () => {

    const todoListWrapper = document.getElementById('todo-list-wrapper');
    todoListWrapper.innerHTML = '';

    for (let item of todos) {

        const todoItemHtml = `
                <div class="todo-item">
                    <p class="todo-name">${item.name}</p>
                    <button class="delete-todo-btn" data-todo-id="${item.id}">удалить</button>
                </div>
            `;

        todoListWrapper.innerHTML = todoListWrapper.innerHTML += todoItemHtml;
    }

    const delButtons = document.getElementsByClassName('delete-todo-btn');

    // подписка на события всех кнопок удаление в todo
    for (let btn of delButtons) {
        btn.addEventListener('click', (e) => {
            const itemId = e.target.dataset.todoId;
            deleteTodoItem(itemId);
            showTodos();
        })
    }
}

showTodos();

// удаление todo
const deleteTodoItem = (id) => {
    const res = todos.filter(item => item.id.toString() !== id);
    todos = res;
}

// -----------------------
// добавление todo
const addTodo = () => {
    const createInput = document.getElementById('create-todo-input');

    todos.push({ id: Math.random(), name: createInput.value, isDone: false });
    showTodos();
}

const addTodoBtn = document.getElementById('create-todo-btn');
addTodoBtn.addEventListener('click', addTodo);







// получить значение атрибуты data-todo-id 
// const delBtn = document.getElementById('delete-todo-btn');
// console.log(delBtn.dataset.todoId);