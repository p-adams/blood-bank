import React, {Component} from 'react'
import {observer} from 'mobx'

class Menu extends Component{
    render(){
        let search = this.props.store.search
        let create = this.props.store.create
        let viewAll = this.props.store.viewAll
        return (
            <table className="table borderless">         
            <tbody>
                <tr>
                    <td>
                        <a  href="#"
                            className={create || viewAll ? "a" : null}
                            onClick={this.toggleSearch}
                            >Search records</a>
                    </td>
                    <td>
                        <a  href="#"
                            className={search || viewAll ? "b" : null}
                            onClick={this.toggleCreate}
                            >Create new donor</a>
                    </td>
                    <td>
                        <a  href="#"
                            className={search || create ? "c" : null}
                            onClick={this.toggleViewAll}
                            >View all donors</a>
                    </td>
                </tr>
            </tbody>
            </table>
        )
    }
     toggleSearch = () => {
         this.props.store.toggleSearch()
     }
     toggleCreate = () => {
         this.props.store.toggleCreate()
     }
     toggleViewAll = () => {
         this.props.store.toggleViewAll()
     }
}

export default Menu