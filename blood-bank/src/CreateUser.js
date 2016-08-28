import React from 'react'

var CreateUser = React.createClass({
    render: function(){
        return(
            <div className="create-user">
                <form>
                    <input onChange={this.props.getFirst} placeholder="firstname..."/>
                    <input onChange={this.props.getLast} placeholder="lastname..."/>
                    <input onChange={this.props.getContact} placeholder="phone number or email"/>
                    <label>Blood Group</label>
                    <select>
                        <option>A</option>
                        <option>B</option>
                        <option>AB</option>
                        <option>O</option>
                    </select>
                    <label>RH Factor</label>
                     <input type="radio" name="rh-factor" value="negative"/>Negative<br/>
                     <input type="radio" name="rh-factor" value="positive"/>Positive<br/>
                    <span>Already a user? <a href="#" onClick={this.props.login}>Login</a></span>
                    <button onClick={this.props.storeUser}>Create User</button>
                </form>
            </div>
        )
    }
})
export default CreateUser;