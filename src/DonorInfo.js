import React, {Component} from 'react'

class DonorInfo extends Component {
  render(){
    const donorInfo = this.props.store.donors.map(function(donor, index){
        return(
            <ul key={index}className="list-group">
                <label>Donor {index += 1}</label>
                <li className="list-group-item">Donor ID: <span className="dnr-info">{donor.id}</span></li>
                <li className="list-group-item">Firstname: <span className="dnr-info">{donor.firstname}</span></li>
                <li className="list-group-item">Lastname: <span className="dnr-info">{donor.lastname}</span></li>
                <li className="list-group-item">Age: <span className="dnr-info">{donor.age}</span></li>
                <li className="list-group-item">Contact: <span className="dnr-info">{donor.contact}</span></li>
                <li className="list-group-item">Blood type: <span className="dnr-info">{donor.type}</span></li>
                <li className="list-group-item">RH Factor: <span className="dnr-info">{donor.rh}</span></li>
            </ul>
        )
    })
    return (
      <ul>
        {donorInfo}
      </ul>
    )
  }
}

export default DonorInfo
