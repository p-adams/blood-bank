import React, { Component } from 'react'
import { observer } from 'mobx-react'
import DevTools from 'mobx-react-devtools'
import BloodBank from './BloodBankApp'
import './App.css';

class App extends Component {
  render() {
      return (
        <div>
          <BloodBank store={this.props.store}></BloodBank>
          <DevTools />
        </div>
      )
  }
}

export default App;
