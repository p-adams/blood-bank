import React, {Component} from 'react'

class DonorInfo extends Component {
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
    return (
      <ul>
        {donorInfo}
      </ul>
    )
  }
}

export default DonorInfo
