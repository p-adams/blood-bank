import React, {Component} from 'react'
import {observer} from 'mobx-react'
import CreateUser from './CreateUser'
import Login from './Login'
import MainPage from './MainPage'


@observer
class BloodBankApp extends Component{
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
}

export default BloodBankApp;
