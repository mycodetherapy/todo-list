const items = [
    "qwer",
    "tyui",
    "iopi"
]

const container = document.querySelector('.page');

const createTodoListForm = (...arg) => new TodoListForm(...arg);
const createTodoListItem = (...arg) => new TodoListItem(...arg);
const todoList = new TodoList(items, createTodoListForm, createTodoListItem);
todoList.render(container);