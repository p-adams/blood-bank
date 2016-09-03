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
  storeUser: function(e){
    e.preventDefault()
    var fullname = this.state.firstname +" "+ this.state.lastname
    this.setState({
      fullname: fullname,
      firstname: '', 
      lastname: '',
      showMainPage: true
      })
  },
  login: function(){
    this.setState({isUser: false, showMainPage: true});
  },
  alreadyUser: function(){
    this.setState({isUser: true})
  },
  createUser: function(){
    this.setState({
      isUser: false
    })
  },
  render() {
    console.log(this.state.isUser)
    return (
      <div className="container">
      {!this.state.isUser && !this.state.showMainPage ? 
        <CreateUser
            storeUser={this.storeUser}
            getFirst={this.getFirst}
            getLast={this.getLast}
            alreadyUser={this.alreadyUser}
            />

      : null}

      {this.state.isUser && !this.state.showMainPage ? <Login 
          createUser={this.createUser}
          login={this.login}
      /> : null}

      {this.state.showMainPage ? <MainPage/> : null}

      </div>
    );
  }
})

export default BloodBankApp;
