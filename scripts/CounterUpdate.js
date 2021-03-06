class CounterUpdate {

  constructor(element) {
    this._element = element;

    this._counterSelector = document.querySelector(
      ".todolist-counter__all-count"
    );
    this._completedSelector = document.querySelector(
      ".todolist-counter__completed-count"
    );
    this._notCompletedSelector = document.querySelector(
      ".todolist-counter__not-completed-count"
    );

    this._classActive = this._element.querySelector(
      ".todolist-item__toggle_active"
    );
  }

  increaseCounter = () => {
    let counter = Number(this._counterSelector.value) + 1;
    this._counterSelector.value = counter;
  };

  decreaseCounter = () => {
    let counter = Number(this._counterSelector.value) - 1;
    this._counterSelector.value = counter;

    if (this._element.contains(this._classActive)) {
      let completedCounter = Number(this._completedSelector.value);
      this._completedSelector.value = completedCounter - 1;
    } else {
      let notComplitedCounter = Number(this._notCompletedSelector.value);
      this._notCompletedSelector.value = notComplitedCounter - 1;
    }
  };

  increaseNotComplitedCounter = () => {
    let notComplitedCounter = Number(this._notCompletedSelector.value);
    this._notCompletedSelector.value = notComplitedCounter + 1;
  };

  updateCompletedCounter = () => {
    const counter = Number(this._counterSelector.value);

    let completedCounter = Number(this._completedSelector.value);

    if (this._element.contains(this._classActive)) {
      completedCounter++;
      this._completedSelector.value = completedCounter;
      this._notCompletedSelector.value = counter - completedCounter;

    } else {
      completedCounter--;
      this._completedSelector.value = completedCounter;
      this._notCompletedSelector.value = counter - completedCounter;
    }
  };
}
