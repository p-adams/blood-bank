import React, {Component} from 'react'
import {observer} from 'mobx-react'
import BloodTypeFilter from './BTFilterPanel'
import RHFilter from './RHFilterPanel'

@observer
class Search extends Component {
  
    render(){
        const rhFilt = this.props.store.filterByRH
        const btFilt = this.props.store.filterByBT
        const filterType = rhFilt && btFilt ?  <div><BloodTypeFilter/><RHFilter/></div> 
                            : rhFilt ? <RHFilter/>
                            : btFilt ? <BloodTypeFilter/>
                            : null
      
    
        return(
             <form className="form-group">
                <label htmlFor="filters">Filter by: </label>
                 {filterType}
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
                <button
                    type="submit"
                    className="btn btn-submit"
                    >Search</button>
            </form>
        )
    }
    handleSearchFilter = (e) => {
        const target = e.target.value
        if (target==='bt') 
            this.props.store.searchByBT()
        if (target==='rh') 
            this.props.store.searchByRH()
        console.log(`meow: ${this.props.store.filterByRH}`)
    }
}

export default Search