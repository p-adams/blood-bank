import React, {Component} from 'react'
import {observer} from 'mobx'

class Search extends Component {
  
    render(){
      
        if(this.props.store.filterByRH && this.props.store.filterByBT) {
            console.log('both checked')
          
        }
      
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
               <input
                    type="text"
                    className="form-control"
                    placeholder="search..."
                    />
                <button type="submit" className="btn btn-submit">Search</button>
            </form>
        )
    }
    handleSearchFilter = (e) => {
        const target = e.target.value
        if (target==='bt') 
            this.props.store.searchByBT()
        if (target==='rh') 
            this.props.store.searchByRH()
        
    }
}

export default Search