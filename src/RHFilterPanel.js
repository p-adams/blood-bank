import React, {Component} from 'react'
import {observer} from 'mobx-react'

class RHFilterPanel extends Component {
    render() {
        return (
        <div className="filter-panel">
            <input type="radio" value="neg" name="opt"/><label htmlFor="neg"> Negative</label>
            <input type="radio" value="pos" name="opt"/><label htmlFor="neg"> Positive</label>
        </div>
        )
    }
}

export default RHFilterPanel
