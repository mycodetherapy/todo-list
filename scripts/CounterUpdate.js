class CounterUpdate {
  //static _template = document.querySelector("#todolist-counter-template");

  constructor(element) {
    this._element = element;

    //this._view = CounterUpdate._template.content.cloneNode(true).children[0];
    this._counterSelector = document.querySelector(
      ".todolist-counter__all-count"
    );
    this._completedSelector = document.querySelector(
      ".todolist-counter__completed-count"
    );
    this._notCompletedSelector = document.querySelector(
      ".todolist-counter__not-completed-count"
    );
    this._activeSelector = document.querySelector(
      ".todolist-item__icon_active"
    );

    this._classActive = this._element.querySelector(
      ".todolist-item__icon_active"
    );
  }

  increaseCounter = () => {
    let counter = Number(this._counterSelector.textContent) + 1;
    this._counterSelector.textContent = counter;
  };

  decreaseCounter = () => {
    let counter = Number(this._counterSelector.textContent) - 1;
    this._counterSelector.textContent = counter;

    if (this._element.contains(this._classActive)) {
      let completedCounter = Number(this._completedSelector.textContent);
      this._completedSelector.textContent = completedCounter - 1;
    } else {
      let notComplitedCounter = Number(this._notCompletedSelector.textContent);
      this._notCompletedSelector.textContent = notComplitedCounter - 1;
    }
  };

  increasenotComplitedCounter = () => {
    let notComplitedCounter = Number(this._notCompletedSelector.textContent);
    this._notCompletedSelector.textContent = notComplitedCounter + 1;
  };

  updateCompletedCounter = () => {
    const counter = Number(this._counterSelector.textContent);

    let completedCounter = Number(this._completedSelector.textContent);

    if (this._element.contains(this._classActive)) {
      completedCounter++;
      this._completedSelector.textContent = completedCounter;
      this._notCompletedSelector.textContent = counter - completedCounter;

    } else {
      completedCounter--;
      this._completedSelector.textContent = completedCounter;
      this._notCompletedSelector.textContent = counter - completedCounter;
    }
  };
}
