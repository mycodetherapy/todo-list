class TodoListCounter {
  static _template = document.querySelector("#todolist-counter-template");

  constructor() {
  }

  _setEventListener = () => {
    this._view
      .querySelector(".todolist-counter__all")
      .addEventListener("click", this._showAll);
    this._view
      .querySelector(".todolist-counter__completed")
      .addEventListener("click", this._toggleVisibilityNotCompleted);

    this._view
      .querySelector(".todolist-counter__not-completed")
      .addEventListener("click", this._toggleVisibilityCompleted);
  };

  _toggleVisibilityCompleted = () => {
   this._showAll();
   const completedArr = Array.from(
      document.querySelectorAll(".todolist-item__toggle_active")
    );
    completedArr.forEach((element) => {
      element.parentElement.classList.toggle("todolist-item_inactive");
    });
  };

  _toggleVisibilityNotCompleted = () => {
    this._showAll();
    const notCompletedArr = Array.from(
      document.querySelectorAll(".todolist-item_active")
    );
    notCompletedArr.forEach((element) => {
      element.classList.toggle("todolist-item_inactive");
    });
  };

  _showAll = () => {
    const allItems = Array.from(document.querySelectorAll(".todolist-item"));
    allItems.forEach((element) => {
      element.classList.contains("todolist-item_inactive") &&
      element.classList.remove("todolist-item_inactive");
    });
  };

  render(container) {
    this._view = TodoListCounter._template.content.cloneNode(true).children[0];
    this._setEventListener();
    container.append(this._view);
  }
}
