import React, { Component } from 'react'
import { observer } from 'mobx-react'
import DevTools from 'mobx-react-devtools'
import BloodBank from './BloodBankApp'

@observer
class App extends Component {
  render() {
    return (
      <div>
        <BloodBank></BloodBank>
        <DevTools />
      </div>
    );
  }
};

export default App;
