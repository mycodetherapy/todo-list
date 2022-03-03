class TodoListForm {
  static _template = document.querySelector("#todolist-form-template");

  constructor(addItem, updateTodoListCounter) {
    this._adItem = addItem;
    this._updateTodoListCounter = updateTodoListCounter;
  }

  _submitHandler = (evt) => {
    evt.preventDefault();
    const text = document.querySelector(".todolist-form__input").value;
    this._updateTodoListCounter(this._view).increaseCounter();
    this._updateTodoListCounter(this._view).increasenotComplitedCounter();
    this._adItem(text);
  };

  render(container) {
    this._view = TodoListForm._template.content.cloneNode(true).children[0];
    this._view.addEventListener("submit", this._submitHandler);
    container.append(this._view);
  }
}
