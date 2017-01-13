import React, {Component} from 'react'
import DonorInfo from './DonorInfo'
class MainPage extends Component {
    render(){
        return(
            <div className="main-page">
                <h1>Blood Bank Management</h1><hr/>
                <form className="form-group">
                  <label htmlFor="search"/>
                  <input type="text" className="form-control" placeholder="search..."/>
                  <button type="submit" className="btn btn-submit">Search</button>
                </form>
                <div className="Donor-info">
                  <DonorInfo store={this.props.store}/>
                </div>
            </div>
        )
    }
}

export default MainPage
