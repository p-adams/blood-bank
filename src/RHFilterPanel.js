import React, {Component} from 'react'
import {observer} from 'mobx-react'

class RHFilterPanel extends Component {
    render() {
        return (
        <form className="filter-panel">
            <label className="radio-inline">
                <input type="radio" name="opt5"/> Negative
            </label>
            <label className="radio-inline">
                <input type="radio" name="opt6"/> Positive
            </label>
        </form>
        )
    }
}

export default RHFilterPanel
