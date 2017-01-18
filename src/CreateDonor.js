import React from 'react'


var CreateUser = React.createClass({
    render: function(){
        return(
            <div className="container">
                <form>
                <span>Already a user? <a href="#">Login</a></span><br/>
                <div className="form-group">
                    <label htmlFor="firstname">Firstname: </label>
                    <input className="form-control" placeholder="firstname..."/>
                </div>
                <div className="form-group">
                    <label htmlFor="lastname">Lastname: </label>
                    <input className="form-control" placeholder="lastname..."/>
                </div>
                <div className="form-group">
                    <label htmlFor="lastname">Preferred contact information: </label>
                    <input className="form-control" placeholder="phone number or email..."/>
                </div>
                <div className="form-group">
                    <label>Blood Group</label>
                    {this.props.bloodType}
                    <select className="form-control" >
                        <option>A</option>
                        <option>B</option>
                        <option>AB</option>
                        <option>O</option>
                    </select>
                </div>
                <label>RH factor: </label><br/>
                <label className="radio-inline">
                <input  type="radio" value="neg" name="optradio"/>Negative
                </label>
                <label className="radio-inline">
                <input type="radio" value="pos" name="optradio"/>Positive
                </label>
                <button id="storeUser">Create User</button>
                </form>
            </div>
        )
    }
})
export default CreateUser;
