import React, {Component} from 'react'
import {observer} from 'mobx'

class Search extends Component {
    render(){
        return(
             <form className="form-group">
                <label htmlFor="filters">Search filters: </label>
                <div className="filters-group">
                    <div className="filter-menu">
                        <label htmlFor="blood-type">Blood type</label>
                        <input className="check" type="checkbox"/>
                    </div>
                    <div className="filter-menu">
                        <label htmlFor="rh-factor">Rh factor</label>
                        <input className="check" type="checkbox"/>
                    </div>
                </div>
                <input type="text" className="form-control" placeholder="search..."/>
                <button type="submit" className="btn btn-submit">Search</button>
            </form>
        )
    }
}

export default Search