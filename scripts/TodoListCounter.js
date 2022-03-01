class TodoListCounter {
  static _template = document.querySelector("#todolist-counter-template");

  constructor(lenght) {
    this._lenght = lenght;

    this._classCompleted = Array.from(
      document.querySelectorAll(".todolist-item__icon_active")
    );
  }

  _setEventListener = () => {
    //this._view.querySelector('.todolist-counter__all').addEventListener('click', );
    this._view
      .querySelector(".todolist-counter__completed")
      .addEventListener("click", this._hideNotCompleted);

      this._view.querySelector('.todolist-counter__not-completed').addEventListener('click', this._hideCompleted);
  };

  _hideCompleted = () => {
    const completedArr = Array.from(
      document.querySelectorAll(".todolist-item__icon_active")
    );
    completedArr.forEach((element) => {
      console.log(element.parentNode);
      element.parentNode.classList.toggle("todolist-item_inactive");
    });
  };

  _hideNotCompleted = () => {
    const notCompletedArr = Array.from(
      document.querySelectorAll(".todolist-item_active")
    );
    notCompletedArr.forEach((element) => {
      element.classList.toggle('todolist-item_inactive');
    });
    console.log(notCompletedArr);
  }

  render(container) {
    this._view = TodoListCounter._template.content.cloneNode(true).children[0];
    //this._view.querySelector(".todolist-counter__completed-count").textContent =
     // this._lenght;
    this._setEventListener();
    container.append(this._view);
  }
}
