import React from 'react'

var MainPage = React.createClass({
    render: function(){
        var donorInfo = this.props.donor.map(function(d){
            return(
                <ul>
                    <li>{d.firstname}</li>
                    <li>{d.lastname}</li>
                    <li>{d.contact}</li>
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