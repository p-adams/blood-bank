import { observable } from 'mobx';

class AppState {
  @observable timer = 0;
  @observable name = "meow";
  @observable DONORS = [
        {firstname: "John", lastname: "Smith", contact: 7777777, type: 'O', rh: 'Positive'},
        {firstname: "Mary", lastname: "Smith", contact: 7777447, type: 'AB', rh: 'Negative'}
  ]
  constructor() {
    setInterval(() => {
      this.timer += 1;
    }, 1000);
  }

  resetTimer() {
    this.timer = 0;
  }
}

export default AppState;
