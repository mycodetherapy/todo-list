class TodoList {
  static _template = document.querySelector("#todolist-template");

  constructor(
    createTodoListForm,
    createTodolistCounter,
    createTodoListItem,
    updateTodoListCounter
  ) {
   
    this._createTodoListForm = createTodoListForm;
    this._createTodolistCounter = createTodolistCounter;
    this._createTodoListItem = createTodoListItem;
    this._updateTodoListCounter = updateTodoListCounter;
  }

  _addItem = (text) => {
    this._createTodoListItem(text, this._updateTodoListCounter).render(
      this._view
    );
  };

  render(container) {
    this._view = TodoList._template.content.cloneNode(true).children[0];
    this._createTodoListForm(this._addItem, this._updateTodoListCounter).render(
      this._view
    );
    this._createTodolistCounter().render(this._view);
    
    container.append(this._view);
  }
}
