import React from "react";
import CustomerList from "./customerList";

class CustomerForm extends React.Component{
    constructor(props){
        super(props);
        this.handleFirstNameChange = this.handleFirstNameChange.bind(this);
        this.handleLastNameChange = this.handleLastNameChange.bind(this);
        this.handleEmailChange = this.handleEmailChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.state = {
            id : 0,
            firstName : '',
            lastName : '',
            email : ''
        }
    }

    handleFirstNameChange(evt){
        const firstName = evt.target.value;
        this.setState({
            firstName : firstName
        });
    }

    handleLastNameChange(evt){
        const lastName = evt.target.value;
        this.setState({
            lastName : lastName
        });
    }

    handleEmailChange(evt){
        const email = evt.target.value;
        this.setState({
            email : email
        });
    }

    handleSubmit(evt){
        // evt.preventdefault();
        const newCustomer = this.state;
        console.log(newCustomer.firstName);
        console.log(newCustomer.lastName);
        console.log(newCustomer.email);
        this.props.addCustomer(newCustomer);
        console.log(newCustomer.id);
    }

    render(){
        return(
            <div className="container-fluid">
                <h3>Add Customer</h3>
                <form className="ui form" onSubmit={this.handleSubmit}>
                    <div className="form-group">
                        <label>First Name</label>
                        <input type="text" name="firstName" className="form-control" value={this.state.firstName} onChange={this.handleFirstNameChange} required/>
                    </div>
                    <div className="form-group">
                        <label>Last Name</label>
                        <input type="text" name="lastName" className="form-control" value={this.state.lastName} onChange={this.handleLastNameChange} required/>
                    </div>
                    <div className="form-group">
                        <label>Email</label>
                        <input type="email" name="email" className="form-control" value={this.state.email} onChange={this.handleEmailChange} required/>
                    </div>
                    <div className="form-group">
                        <input type="submit" value="Add Customer" className="form-control btn btn-primary"/>
                    </div>
                </form>
            </div>
        );
    }
}

export default CustomerForm;