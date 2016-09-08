import React from 'react'

var MainPage = React.createClass({
    render: function(){
        return(
            <div className="main-page">
                <h1>Welcome to main page</h1>
                <h4>Firstname: {this.props.firstName}</h4>
            </div>
        )
    }
})

export default MainPage