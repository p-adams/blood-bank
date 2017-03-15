import React, {Component} from 'react'
import {observer} from 'mobx-react'


@observer
class Search extends Component {
  
    render(){
        const store = this.props.store
        const results = store.showFilteredResults.map( (result,index) => {
           return(
               <tbody key={index}>
                    <tr className="searchData">
                        <td>{result.id}</td>
                        <td>{result.lastname}</td>
                        <td>{result.firstname}</td>
                        <td>{result.contact}</td>
                        <td>{result.age}</td>
                        <td>{result.type}</td>
                        <td>{result.rh}</td>
                    </tr>
               </tbody>
           )
       })
        return(
            <div>
             <form className="form-group">
                <label htmlFor="search">Search donor by name</label>
                <input
                    type="text"
                    className="form-control"
                    placeholder="search..."
                    value={store.searchValue}
                    onChange={this.getSearch}
                    />
            </form>
            <table className="table">
                <thead>
                    <tr>
                        <th>Donor ID</th>
                        <th>Lastname</th>
                        <th>Firstname</th>
                        <th>Contact</th>
                        <th>Age</th>
                        <th>Blood type</th>
                        <th>RH Factor</th>
                    </tr>
                </thead>
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