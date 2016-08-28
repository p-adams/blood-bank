import React from 'react'

var CreateUser = React.createClass({
    render: function(){
        return(
            <div className="create-user">
                <form>
                    <input onChange={this.props.getFirst} placeholder="firstname..."/>
                    <input onChange={this.props.getLast} placeholder="lastname..."/>
                    <span>Already a user? <a href="#" onClick={this.props.login}>Login</a></span>
                    <button onClick={this.props.storeUser}>Create User</button>
                </form>
            </div>
        )
    }
})
export default CreateUser;