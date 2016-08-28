import React from 'react'
import CreateUser from './CreateUser'
import Login from './Login'

var BloodBankApp = React.createClass({
  getInitialState: function(){
    return({
      firstname: '',
      lastname: '',
      fullname: '',
      isUser: false
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
    this.setState({fullname: fullname, firstname: '', lastname: ''})
  },
  login: function(){
    this.setState({isUser: !this.state.isUser})
  },
  createUser: function(){
    this.setState({
      isUser: false
    })
  },
  render() {
    console.log(this.state.isUser)
    return (
      <div className="App">
      {!this.state.isUser ? 
        <CreateUser
            storeUser={this.storeUser}
            getFirst={this.getFirst}
            getLast={this.getLast}
            login={this.login}
            />

      : <Login 
          createUser={this.createUser}
      />
      }
      </div>
    );
  }
})

export default BloodBankApp;
