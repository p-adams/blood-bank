import { observable } from 'mobx';

class AppState {
  @observable timer = 0;
  @observable loggedIn = false;
  @observable search = false;
  @observable create = false;
  @observable viewAll = false;
  @observable filterByRH = false;
  @observable filterByBT = false;
  @observable donors = [
        {id: 1, firstname: "John", lastname: "Smith", age: 43, contact: 7777777, type: 'O', rh: 'Positive'},
        {id: 2, firstname: "Mary", lastname: "Smith", age: 25, contact: 7777447, type: 'AB', rh: 'Negative'}
  ]
  @observable userInfo = {
    firstname: '',
    lastname: '',
    contact: '',
    bloodType: 'A',
    rhFactor: 'neg'
  }
   
  login = () => this.loggedIn = true 
  toggleSearch = () => this.search = !this.search
  toggleCreate = () => this.create = !this.create
  toggleViewAll = () => this.viewAll = !this.viewAll
  searchByRH = () => {
     this.filterByRH = !this.filterByRH
      console.log(`RH: ${this.filterByRH}`)
  }
  searchByBT = () => {
    this.filterByBT = !this.filterByBT
    console.log(`BT: ${this.filterByBT}`)
  }
  /*
  getFirstName = name => userInfo.firstname = name
  getLastName = name => userInfo.lastname = name
  getContact = contact => userInfo.contact = contact
  getBloodType = type => userInfo.bloodType = type
  getRhFactor = rh => userInfo.rhFactor = rh
  createNewUser = () => console.log('create new user')*/
 
}

export default AppState;
