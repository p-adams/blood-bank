import React, {Component} from 'react'
import {observer} from 'mobx'

class Login extends Component{
    render(){
        return(
            <div className="container">
                <form>
                    <div className="form-group">
                        <label htmlFor="username">Username:</label>
                        <input type="text" className="form-control" placeholder="username..."/>
                    </div>   
                    <div className="form-group">
                        <label htmlFor="password">Password: </label>
                        <input type="password" className="form-control" placeholder="password..."/>
                    </div>
                    <button className="btn btn-primary">Login</button>
                </form>
            </div>
        )
    }
    login(){
        this.props.store.login()
    }
}

export default Login;