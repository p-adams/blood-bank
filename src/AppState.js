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
    id: 2,
    firstname: '',
    lastname: '',
    contact: '',
    age: 0,
    type: 'A',
    rh: 'neg'
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
  setFirstname = name => this.donorInfo.firstname = name
  setLastname = name => this.donorInfo.lastname = name
  setContact = contact => this.donorInfo.contact = contact
  setAge = age => this.donorInfo.age = age
  setBloodType = type =>
    this.donorInfo.type = type
  setRHFactor = rh => this.donorInfo.rh = rh
  createNewDonor = () => {
    alert('create new user')
    this.donorInfo.id += 1
    this.donors.push(this.donorInfo)
  }

}


export default AppState;
