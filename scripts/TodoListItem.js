class TodoListItem {
  static _template = document.querySelector("#todolist-item-template");

  constructor(text) {
    this._text = text;
  }

  _setEventListener = () => {
    this._view.querySelector('.todolist-item__del').addEventListener('click', this._delete);
  }

  _setEventListener = () => {
    this._view.querySelector('.todolist-item__toggle').addEventListener('click', this._switchTask);
  }

  _delete = () => {
      this._view.remove();
  }

  _switchTask() {
    this._likeButton.classList.toggle("todolist-item__icon_active");
  }

  render (container) {
    this._view = TodoListItem._template.content.cloneNode(true).children[0];
    this._view.querySelector('.todolist-item__text').textContent = this._text;
    this._setEventListener();
    container.append( this._view);
  }
}
