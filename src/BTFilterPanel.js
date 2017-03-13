import React, {Component} from 'react'
import {observer} from 'mobx-react'
class BTFilterPanel extends Component {
    render() {
        return (
        <div className="filter-panel">
            <input type="radio" name="opt1"/> A
            <input type="radio" name="opt2"/> B 
            <input type="radio" name="opt3"/> AB
            <input type="radio" name="opt4"/> O
        </div>
        )
    }
}

export default BTFilterPanel
