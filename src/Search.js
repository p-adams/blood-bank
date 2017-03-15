import React, {Component} from 'react'
import {observer} from 'mobx-react'
import BloodTypeFilter from './BTFilterPanel'
import RHFilter from './RHFilterPanel'

@observer
class Search extends Component {
  
    render(){
        const store = this.props.store
        const rhFilt = store.filterByRH
        const btFilt = store.filterByBT
        const filterType = rhFilt && btFilt ?  <div><BloodTypeFilter/><RHFilter/></div> 
                            : rhFilt ? <RHFilter/>
                            : btFilt ? <BloodTypeFilter/>
                            : null
       const results = store.showFilteredResults.map( (result,index) => {
           return(
               <tbody key={index}>
                    <tr className="searchData">
                        <td>{result.firstname}</td>
                        <td>{result.lastname}</td>
                    </tr>
               </tbody>
           )
       })
        return(
            <div>
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
                    value={store.searchValue}
                    onChange={this.getSearch}
                    />
            </form>
            <table className="table">
                {results}
            </table>
        </div>
        )
    }
    handleSearchFilter = (e) => {
        const target = e.target.value
        if (target==='bt') 
            this.props.store.searchByBT()
        if (target==='rh') 
            this.props.store.searchByRH()
    }
    getSearch = (e) => {
        this.props.store.getSearchValue(e.target.value)
    }
}

export default Search