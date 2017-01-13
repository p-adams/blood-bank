import {React, Component} from 'react'

class MainPage extends Component {
    render(){
        const donorInfo = this.props.store.donors.map(function(donor, index){
            return(
                <ul key={index}className="list-group">
                    <label>Donor {index += 1}</label>
                    <li className="list-group-item">{donor.firstname}</li>
                    <li className="list-group-item">{donor.lastname}</li>
                    <li className="list-group-item">{donor.contact}</li>
                    <li className="list-group-item">{donor.type}</li>
                    <li className="list-group-item">{donor.rh}</li>
                </ul>
            )
        })
        return(
            <div className="main-page">
                <h1>Blood Bank Management</h1><hr/>
                <h4>Firstname: </h4>
                {donorInfo}
            </div>
        )
    }
}

export default MainPage
