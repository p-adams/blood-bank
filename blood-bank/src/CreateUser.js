import React from 'react'
import './index.js'

var CreateUser = React.createClass({
    render: function(){
        return(
            <div className="container">
                <form>
                <span>Already a user? <a href="#" onClick={this.props.alreadyUser}>Login</a></span><br/>
                <div className="form-group">
                    <label htmlFor="firstname">Firstname: </label>
                    <input className="form-control" onChange={this.props.getFirst} placeholder="firstname..."/>
                </div>
                <div className="form-group">
                    <label htmlFor="lastname">Lastname: </label>
                    <input className="form-control" onChange={this.props.getLast} placeholder="lastname..."/>
                </div>
                <div className="form-group">
                    <label htmlFor="lastname">Preferred contact information: </label>    
                    <input className="form-control" onChange={this.props.getContact} placeholder="phone number or email..."/>
                </div>
                <div className="form-group">
                    <label>Blood Group</label>
                    <select className="form-control">
                        <option>A</option>
                        <option>B</option>
                        <option>AB</option>
                        <option>O</option>
                    </select>
                </div>
                <label>RH factor: </label><br/>
                <label className="radio-inline">
                <input  type="radio" name="optradio"/>Negative
                </label>
                <label className="radio-inline">
                <input type="radio" name="optradio"/>Positive
                </label>
                <button id="storeUser" className="btn btn-default" onClick={this.props.storeUser}>Create User</button>
                </form>
            </div>
        )
    }
})
export default CreateUser;