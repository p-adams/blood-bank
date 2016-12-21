import React from 'react'
import CreateUser from './CreateUser'
import Login from './Login'
import MainPage from './MainPage'

var BloodBankApp = React.createClass({
  getInitialState: function(){
    return({
      firstname: '',
      lastname: '',
      fullname: '',
      contact: '',
      bloodType: 'A',
      rhFactor: 'neg',
      newDonor: [],
      isUser: false,
      showMainPage: false
    })
  },
  getFirst: function(e){
    this.setState({
      firstname: e.target.value
    })
  },
  getLast: function(e){
    this.setState({
      lastname: e.target.value
    })
  },
  getContact: function(e){
    this.setState({
      contact: e.target.value
    })
  },
  getType: function(e){
    this.setState({
      bloodType: e.target.value
    })
  },
  getRh: function(e){
    this.setState({
      rhFactor: e.target.value
    })
  },
  storeUserInfo: function(e){
    e.preventDefault()
    this.props.donor.push({
      firstname: this.state.firstname,
      lastname: this.state.lastname,
      contact: this.state.contact,
      type: this.state.bloodType,
      rh: this.state.rhFactor
    })
    this.setState({
      newDonor: this.props.donor,
      showMainPage: true
      })
  },
  login: function(){
    this.setState({
      isUser: false,
      showMainPage: true});
  },
  //page loads, allow for user to click login if account exists.
  alreadyUser: function(){
    this.setState({isUser: true})
  },
  //if user goes to login and realizes they are not registered user.
  notUser: function(){
    alert('meow')
    this.setState({
      isUser: false
    })
  },
  render() {
   
    return (
      <div className="container">
      {!this.state.isUser && !this.state.showMainPage ? 
        <CreateUser
            storeUserInfo={this.storeUserInfo}
            getFirst={this.getFirst}
            getLast={this.getLast}
            getContact={this.getContact}
            getType={this.getType}
            getRh={this.getRh}
            bloodType={this.state.bloodType}
            rhFactor={this.state.rhFactor}
            alreadyUser={this.alreadyUser}
            />

      : null}

      {this.state.isUser && !this.state.showMainPage ?
        <Login 
          createAccount={this.notUser}
          login={this.login}
      /> : null}

      {this.state.showMainPage ?
        <MainPage donor={this.props.donor}
                  firstName={this.state.firstname}
                  /> : null}

      </div>
    );
  }
})

export default BloodBankApp;
