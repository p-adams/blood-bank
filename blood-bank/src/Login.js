import React from 'react'

var Login = React.createClass({
    render: function(){
        return(
            <div className="container">
                <form>
                 <span>Not a user? <a href="#" onClick={this.props.createUser}>Create Account</a></span>
                    <div className="form-group">
                        <label for="username">Username:</label>
                        <input type="text" className="form-control" placeholder="username..."/>
                    </div>   
                    <div className="form-group">
                        <label for="password">Password: </label>
                        <input type="password" className="form-control" placeholder="password..."/>
                    </div>
                    <button className="btn btn-primary">Login</button>
                </form>
            </div>
        )
    }
})

export default Login;