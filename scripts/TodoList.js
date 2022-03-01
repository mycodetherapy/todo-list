class TodoList {
  static _template = document.querySelector("#todolist-template");

  constructor(items, createTodoListForm, createTodolistCounter, createTodoListItem, updateTodoListCounter) {
    this._items = items;
    this._createTodoListForm = createTodoListForm;
    this._createTodolistCounter = createTodolistCounter;
    this._createTodoListItem = createTodoListItem;
    this._updateTodoListCounter = updateTodoListCounter;

    //this._selector = document.querySelector('.todolist-item');
  }

  _countItem = (count) => {
    this._createTodolistCounter(count).render(this._view);
    //this._items.length ++;
  }

  _addItem = (text) => {
    this._createTodoListItem(text, this._updateTodoListCounter).render(this._view);
    //console.log(this._count);
    //this._counter ++;
    //console.log(this._items.length);
  }

  // _count = (long) => {
  //   this._updateTodoListCounter.this._updateCount(long);
  // }


  render(container) {
    this._view = TodoList._template.content.cloneNode(true).children[0];
    this._createTodoListForm(this._addItem, this._updateTodoListCounter).render(this._view);
    //this._createTodolistCounter(this._countItem).render(this._view);
    this._countItem();
    //this._items.forEach(this._addItem);

    container.append(this._view);
  }
}
