class TodoListItem {
  static _template = document.querySelector("#todolist-item-template");

  constructor(text, updateTodoListCounter, selector) {
    this._text = text;
    this._updateTodoListCounter = updateTodoListCounter;
    this._selector = selector;
  }

  _setEventListener = () => {
    this._view
      .querySelector(".todolist-item__del")
      .addEventListener("click", this._delete);
    this._view
      .querySelector(".todolist-item__toggle")
      .addEventListener("click", this._switchTask);
  };

  _delete = () => {
    this._updateTodoListCounter(this._view).decreaseCounter();
    this._view.remove();
  };

  _switchTask = () => {
    const count = Number(
      document.querySelector(".todolist-counter__completed-count").textContent
    );

    this._view
      .querySelector(".todolist-item__toggle")
      .classList.toggle("todolist-item__toggle_active");
    this._view.classList.toggle("todolist-item_active");
    this._updateTodoListCounter(this._view).updateCompletedCounter();
  };

  render(container) {
    this._view = TodoListItem._template.content.cloneNode(true).children[0];
    this._view.querySelector(".todolist-item__text").textContent = this._text;
    this._setEventListener();
    container.append(this._view);
  }
}
