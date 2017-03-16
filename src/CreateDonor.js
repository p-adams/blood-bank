import React, {Component} from 'react'
import {observer} from 'mobx-react'

@observer
class CreateDonor extends Component{
    render(){
        return(
                <form>
                <div className="form-group">
                    <label htmlFor="firstname">Firstname: </label>
                    <input
                        className="form-control"
                        onChange={this.handleFirstname}
                        placeholder="firstname..."/>
                </div>
                <div className="form-group">
                    <label htmlFor="lastname">Lastname: </label>
                    <input
                        className="form-control"
                        onChange={this.handleLastname}
                        placeholder="lastname..."/>
                </div>
                <div className="form-group">
                    <label htmlFor="lastname">Preferred contact information: </label>
                    <input
                        className="form-control"
                        onChange={this.handleContact}
                        placeholder="phone number or email..."/>
                </div>
                 <div className="form-group">
                    <label htmlFor="age">Age: </label>
                    <input
                        className="form-control"
                        onChange={this.handleAge}
                        placeholder="age..."/>
                </div>
                <div className="form-group">
                    <label>Blood Group</label>
                    <select className="form-control" onChange={this.handleBloodType} >
                        <option>A</option>
                        <option>B</option>
                        <option>AB</option>
                        <option>O</option>
                    </select>
                </div>
                <label>RH factor: </label><br/>
                <label className="radio-inline">
                    <input
                        type="radio"
                        value="Negative"
                        onChange={this.handleRH}
                        name="optradio"/>Negative
                </label>
                <label className="radio-inline">
                    <input
                        type="radio"
                        value="Positive"
                        onChange={this.handleRH}
                        name="optradio"/>Positive
                </label>
                <button
                    id="storeDonor"
                    onClick={this.handleCreateDonor}
                    >Create Donor</button>
                </form>
        )
    }
    handleFirstname = e => this.props.store.setFirstname(e.target.value)
    handleLastname = e => this.props.store.setLastname(e.target.value)
    handleContact = e => this.props.store.setContact(e.target.value)
    handleAge = e => this.props.store.setAge(e.target.value)
    handleBloodType = e => this.props.store.setBloodType(e.target.value)
    handleRH = e => this.props.store.setRHFactor(e.target.value)
    handleCreateDonor = (e) => {
        e.preventDefault()
        this.props.store.createNewDonor()

    }

}

export default CreateDonor;
