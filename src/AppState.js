import {computed,observable} from 'mobx';

class AppState {
  @observable timer = 0;
  @observable loggedIn = false;
  @observable search = false;
  @observable create = false;
  @observable viewAll = false;
  @observable filterByRH = false;
  @observable filterByBT = false;
  @observable searchValue = "";
  @observable donors = [
        {id: 1, firstname: "John", lastname: "Smith", age: 43, contact: 7777777, type: 'O', rh: 'Positive'},
        {id: 2, firstname: "Mary", lastname: "Smith", age: 25, contact: 7777447, type: 'AB', rh: 'Negative'}
  ]
  @observable donorInfo = {
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
  searchByRH = () => this.filterByRH = !this.filterByRH
  searchByBT = () => this.filterByBT = !this.filterByBT
  getSearchValue = (val) => this.searchValue = val
  @computed get showFilteredResults () {
    return this.donors.filter(donor => {
      return donor.firstname.indexOf(this.searchValue) > -1
    })
  }
}

/*
  getFirstName = name => donorInfo.firstname = name
  getLastName = name => donorInfo.lastname = name
  getContact = contact => donorInfo.contact = contact
  getBloodType = type => donorInfo.bloodType = type
  getRhFactor = rh => donorInfo.rhFactor = rh
  createNewUser = () => console.log('create new user')*/

export default AppState;
