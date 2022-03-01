const items = [
    
]

const container = document.querySelector('.page');

const createTodoListForm = (...arg) => new TodoListForm(...arg);
const createTodolistCounter = (...arg) => new TodoListCounter(...arg);
const createTodoListItem = (...arg) => new TodoListItem(...arg);
const updateTodoListCounter = (...arg) => new CounterUpdate(...arg);
const todoList = new TodoList(items, createTodoListForm, createTodolistCounter, createTodoListItem, updateTodoListCounter);

todoList.render(container);
//const count = document.querySelector('.todolist-item').children.length;
//console.log(count);