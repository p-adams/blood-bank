import React from 'react'

var MainPage = React.createClass({
    render: function(){
        var donorInfo = this.props.donor.map(function(d, index){
            return(
                <ul className="list-group">
                    <label>Donor {index + 1}</label>
                    <li className="list-group-item">{d.firstname}</li>
                    <li className="list-group-item">{d.lastname}</li>
                    <li className="list-group-item">{d.contact}</li>
                    <li className="list-group-item">{d.type}</li>
                    <li className="list-group-item">{d.rh}</li>
                </ul>
            )
        })
        return(
            <div className="main-page">
                <h1>Welcome to main page</h1>
                <h4>Firstname: {this.props.firstName}</h4>
                {donorInfo}
            </div>
        )
    }
})

export default MainPage