import React from 'react'
import CreateUser from './CreateUser'
import Login from './Login'
import MainPage from './MainPage'
//import Index from './index'

var BloodBankApp = React.createClass({
  getInitialState: function(){
    return({
      firstname: '',
      lastname: '',
      fullname: '',
      bloodType: 'A',
      rhFactor: 'neg',
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
    //var fullname = this.state.firstname +" "+ this.state.lastname
    //alert(fullname)
    this.setState({
      //fullname: fullname,
      firstname: this.state.firstname, 
      lastname: this.state.lastname,
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
            storeUserInfo={this.storeUser}
            getFirst={this.getFirst}
            getLast={this.getLast}
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
