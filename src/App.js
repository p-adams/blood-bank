import React, { Component } from 'react'
import { observer } from 'mobx-react'
import DevTools from 'mobx-react-devtools'
import BloodBank from './BloodBankApp'

@observer
class App extends Component {
  render() {
      return (
        <div>
          <h3>Blood Bank Manager</h3><hr/>
           <div className="app">
            <BloodBank store={this.props.store}></BloodBank>
          </div>
          <DevTools />
        </div>
      )
  }
}

export default App;
