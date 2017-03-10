import React, {Component} from 'react'
import {observer} from 'mobx'

class Search extends Component {
    handleSearchFilter(e){
        const target = e.target.value
        if (target==='bt'){
            
        }
        
    }
    setPlaceholder(){
        return this.props.store.filterByRH ? "enter rh factor" : "search"
    }
    render(){
        const store = this.props.store
        console.log(store)
        return(
             <form className="form-group">
                <label htmlFor="filters">Search filters: </label>
                <div className="filters-group">
                    <div className="filter-menu">
                        <label htmlFor="blood-type">Blood type</label>
                        <input
                            className="check"
                            type="checkbox"
                            value="bt"
                            onChange={this.handleSearchFilter}
                            />
                    </div>
                    filter by: {this.props.store.filterByRH}
                    <div className="filter-menu">
                        <label htmlFor="rh-factor">Rh factor</label>
                        <input
                            className="check"
                            type="checkbox"
                            value="rh"
                            onChange={this.handleSearchFilter}
                            />
                    </div>
                </div>
                <input type="text" className="form-control" placeholder="search..."/>
                <button type="submit" className="btn btn-submit">Search</button>
            </form>
        )
    }
}

export default Search