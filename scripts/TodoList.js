class TodoList {
  static _template = document.querySelector("#todolist-template");

  constructor(items, createTodoListForm, createTodoListItem) {
    this._items = items;
    this._createTodoListForm = createTodoListForm;
    this._createTodoListItem = createTodoListItem;
  }

  _addItem = (text) => {
    this._createTodoListItem(text).render(this._view)
  }

  render(container) {
    this._view = TodoList._template.content.cloneNode(true).children[0];

    this._createTodoListForm(this._addItem).render(this._view);
    this._items.forEach(this._addItem);

    container.append(this._view);
  }
}
