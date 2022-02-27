class TodoListForm {
  static _template = document.querySelector("#todolist-form-template");

  constructor(addItem) {
      this._adItem = addItem;
  }

  _submitHandler = (evt) => {
    evt.preventDefault();
    const text = document.querySelector('.todolist-form_input').value;
    this._adItem(text);
    //console.log(text);
  };

  render(container) {
    this._view = TodoListForm._template.content.cloneNode(true).children[0];
    this._view.addEventListener("submit", this._submitHandler);
    container.append(this._view);
  }
}
