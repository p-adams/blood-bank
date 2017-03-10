import React, {Component} from 'react'
import {observer} from 'mobx-react'
import DonorInfo from './DonorInfo'
import CreateDonor from './CreateDonor'
import Search from './Search'
import Menu from './Menu'
@observer
class MainPage extends Component {
    render(){
        return(
            <div className="main-page">
                <Menu store={this.props.store}/>
                {this.props.store.search
                    ?
                    <div className="search">
                        <Search store={this.props.store}/>
                    </div>
                    : null }
                {this.props.store.create
                    ?
                    <div className="create-donor">
                        <CreateDonor/>
                    </div>
                : null }
                {this.props.store.viewAll
                    ? 
                    <div className="donor-info">
                        <DonorInfo store={this.props.store}/>
                    </div>
                : null }
            </div>
        )
    }
}

export default MainPage
