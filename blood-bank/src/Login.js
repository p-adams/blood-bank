import React from 'react'

var Login = React.createClass({
    render: function(){
        return(
            <div>
                <form>
                    <input placeholder="username..."/>
                    <input placeholder="password..."/>
                    <span>Not a user? <a href="#" onClick={this.props.createUser}>Create Account</a></span>
                    <button>Login</button>
                </form>
            </div>
        )
    }
})

export default Login;