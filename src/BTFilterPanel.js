import React, {Component} from 'react'
import {observer} from 'mobx-react'
class BTFilterPanel extends Component {
    render() {
        return (
        <div className="filter-panel">
            <input type="radio" value="a" name="opt"/><label for="a"> A</label>
            <input type="radio" value="b" name="opt"/><label for="b"> B</label> 
            <input type="radio" value="ab" name="opt"/><label for="ab"> AB</label>
            <input type="radio" value="o" name="opt"/><label for="o"> O</label>
        </div>
        )
    }
}

export default BTFilterPanel
