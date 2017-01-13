import React, {Component} from 'react'
import {observer} from 'mobx-react'
import CreateUser from './CreateUser'
import Login from './Login'
import MainPage from './MainPage'


@observer
class BloodBankApp extends Component{
  render() {
    const store = this.props.store
    console.log(`store: ${store}`)
    return (
      <div className="container">
      {/*<CreateUser/>
        <Login/>*/}
        <MainPage store={this.props.store}/>
      </div>
    );
  }
}

export default BloodBankApp;
