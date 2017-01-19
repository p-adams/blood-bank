import React, {Component} from 'react'
import {observer} from 'mobx-react'
import CreateDonor from './CreateDonor'
import Login from './Login'
import MainPage from './MainPage'


@observer
class BloodBankApp extends Component{
  render() {
    const store = this.props.store
    return (
      <div className="container"> 
        <div className="jumbotron">
        {!this.props.store.loggedIn 
          ? <Login store={this.props.store}/> 
          : <MainPage store={this.props.store}/>} 
        </div>
      </div>
    );
  }
}

export default BloodBankApp;
