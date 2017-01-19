import React, {Component} from 'react'
import {observer} from 'mobx'

class Menu extends Component{
    render(){
        return (
            <table className="table borderless">         
            <tbody>
                <tr>
                    <th></th>
                    <th className="main-menu">Main Menu</th>
                    <th></th>
                </tr>
                <tr>
                    <td><a href="#" onClick={this.toggleSearch}>Search records</a></td>
                    <td><a href="#">Create new donor</a></td>
                    <td><a href="#">View all donors</a></td>
                </tr>
            </tbody>
            </table>
        )
    }
     toggleSearch = () => {
         this.props.store.toggleSearch()
     }
}

export default Menu