import { observable } from 'mobx';

class AppState {
  @observable timer = 0;
  @observable loggedIn = false;
  @observable donors = [
        {firstname: "John", lastname: "Smith", contact: 7777777, type: 'O', rh: 'Positive'},
        {firstname: "Mary", lastname: "Smith", contact: 7777447, type: 'AB', rh: 'Negative'}
  ]
  @observable userInfo = {
    firstname: '',
    lastname: '',
    contact: '',
    bloodType: 'A',
    rhFactor: 'neg'
  }
  getFirstName = name => userInfo.firstname = name
  getLastName = name => userInfo.lastname = name
  getContact = contact => userInfo.contact = contact
  getBloodType = type => userInfo.bloodType = type
  getRhFactor = rh => userInfo.rhFactor = rh
  createNewUser = () => console.log('create new user')
  login = () => {
    this.loggedIn = true
  }
//page loads, allow for user to click login if account exists.
  alreadyUser = () => userInfo.isUser = true
  //if user goes to login and realizes they are not registered user.
  notUser = () => userInfo.isUser = false
}

export default AppState;
