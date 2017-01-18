import React, {Component} from 'react'
import DonorInfo from './DonorInfo'
import CreateDonor from './CreateDonor'
class MainPage extends Component {
    render(){
        return(
            <div className="main-page">
                <h1>Blood Bank Management</h1><hr/>
                <div className="search">
                    <form className="form-group">
                    <label htmlFor="search"/>
                    <input type="text" className="form-control" placeholder="search..."/>
                    <button type="submit" className="btn btn-submit">Search</button>
                    </form>
                </div>
                <div className="create-donor">
                    <CreateDonor/>
                </div>
                <div className="Donor-info">
                    <DonorInfo store={this.props.store}/>
                </div>
            </div>
        )
    }
}

export default MainPage
