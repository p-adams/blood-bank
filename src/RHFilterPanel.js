import React, {Component} from 'react'
import {observer} from 'mobx-react'

class RHFilterPanel extends Component {
    render() {
        return (
        <div className="filter-panel">
            <input type="radio" name="opt5"/> Negative
            <input type="radio" name="opt6"/> Positive
        </div>
        )
    }
}

export default RHFilterPanel
