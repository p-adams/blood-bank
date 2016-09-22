import React from 'react'
import CreateUser from './CreateUser'
import Login from './Login'
import MainPage from './MainPage'
import Index from './Index'

var BloodBankApp = React.createClass({
  getInitialState: function(){
    return({
      firstname: '',
      lastname: '',
      fullname: '',
      meow: "Meow",
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
  storeUserInfo: function(e){
    e.preventDefault()
    var fullname = this.state.firstname +" "+ this.state.lastname
    alert(fullname)
    this.setState({
      fullname: fullname,
      firstname: this.state.firstname, 
      lastname: this.state.lastname,
      showMainPage: true
      })
  },
  login: function(){
    this.setState({isUser: false, showMainPage: true});
  },
  //page loads, allow for user to click login if account exists.
  alreadyUser: function(){
    this.setState({isUser: true})
  },
  //if user goes to login and realized they are not registered user.
  notUser: function(){
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
            alreadyUser={this.alreadyUser}
            />

      : null}

      {this.state.isUser && !this.state.showMainPage ? <Login 
          notUser={this.notUser}
          login={this.login}
      /> : null}

      {this.state.showMainPage ? <MainPage meow={this.state.meow} firstName={this.state.firstname}/> : null}

      </div>
    );
  }
})

export default BloodBankApp;
