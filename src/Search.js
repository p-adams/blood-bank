import React, {Component} from 'react'
import {observer} from 'mobx'

class Search extends Component {
    render(){
        return(
             <form className="form-group">
                    <label htmlFor="search"/>
                    <input type="text" className="form-control" placeholder="search..."/>
                    <button type="submit" className="btn btn-submit">Search</button>
            </form>
        )
    }
}

export default Search