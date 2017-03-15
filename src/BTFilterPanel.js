import React, {Component} from 'react'
import {observer} from 'mobx-react'
class BTFilterPanel extends Component {
    render() {
        return (
        <div className="filter-panel">
            <input type="radio" value="a" name="opt"/><label htmlFor="a"> A</label>
            <input type="radio" value="b" name="opt"/><label htmlFor="b"> B</label> 
            <input type="radio" value="ab" name="opt"/><label htmlFor="ab"> AB</label>
            <input type="radio" value="o" name="opt"/><label htmlFor="o"> O</label>
        </div>
        )
    }
}

export default BTFilterPanel
