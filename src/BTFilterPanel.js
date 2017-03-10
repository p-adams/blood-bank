import React, {Component} from 'react'
import {observer} from 'mobx-react'
class BTFilterPanel extends Component {
    render() {
        return (
        <form>
            <label className="radio-inline">
                <input type="radio" name="opt1"/> A
            </label>
            <label className="radio-inline">
                <input type="radio" name="opt2"/> B 
            </label>
            <label className="radio-inline">
                <input type="radio" name="opt3"/> AB
            </label>
            <label className="radio-inline">
                <input type="radio" name="opt4"/> O
            </label>
        </form>
        )
    }
}

export default BTFilterPanel
