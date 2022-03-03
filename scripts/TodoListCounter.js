class TodoListCounter {
  static _template = document.querySelector("#todolist-counter-template");

  constructor() {
    // this._completedArr = Array.from(
    //   document.querySelectorAll(".todolist-item__icon_active")
    // );
    // this._notCompletedArr = Array.from(
    //   document.querySelectorAll(".todolist-item_active")
    // );
     //this._allItems = Array.from(document.querySelectorAll(".todolist-item"));
  }

  _submitHandler = (evt) => {
    evt.preventDefault();
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
   const completedArr = Array.from(
      document.querySelectorAll(".todolist-item__icon_active")
    );
    completedArr.forEach((element) => {
      element.parentNode.classList.toggle("todolist-item_inactive");
    });
  };

  _toggleVisibilityNotCompleted = () => {
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
    this._view.addEventListener("submit", this._submitHandler);
    container.append(this._view);
  }
}
