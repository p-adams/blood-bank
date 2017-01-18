import React, {Component} from 'react'
import DonorInfo from './DonorInfo'
import CreateDonor from './CreateDonor'
import Search from './Search'
class MainPage extends Component {
    render(){
        return(
            <div className="main-page">
                <h1>Blood Bank Management</h1><hr/>
                <div className="search">
                    <Search/>
                </div>
                <div className="create-donor">
                    <CreateDonor/>
                </div>
                <div className="donor-info">
                    <DonorInfo store={this.props.store}/>
                </div>
            </div>
        )
    }
}

export default MainPage
