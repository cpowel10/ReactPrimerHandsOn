import React from 'react';
import CustomerDetail from './customerDetail';
import CustomerForm from './CustomerForm';
import Customers from './customers.json';

class CustomerList extends React.Component{
    constructor(){
        super();
        this.addCustomer = this.addCustomer.bind(this);
        this.state = {
            customers : Customers,
            selectedCustomer : ''
        }
    }
    onCustomerSelect(i,customer){
        this.setState({
            selectedCustomer : customer
        });
    }
    
    tabRow(){
        const tableRows = this.state.customers.map((customer,i)=>{
            return(
                <tr onClick={e => this.onCustomerSelect(e,customer)} key={i}>
                    <td>{customer.id}</td>
                    <td>{customer.firstName}</td>
                    <td>{customer.lastName}</td>
                    <td>{customer.email}</td>
                </tr>
            );
        });
        return tableRows;
    }
    showCustomer(){
        this.setState({
            selectedCustomer: this.state.selectedCustomer
        });
    }

    addCustomer(newCustomer){
        const totalCustomers = this.state.customers.length;
        newCustomer.id = totalCustomers+1;
        const newList = [...this.state.customers, newCustomer]
        this.setState(
            {
                customers: newList
            }
        );
    }
    render(){
        return(
            <div className='container-fluid'>
                <h2>Customers List</h2>
                <table className='table table-sm table-bordered table-hover'>
                    <thead className='table-dark'>
                        <tr onSelect={this.showCustomer}>
                            <th>ID</th>
                            <th>FirstName</th>
                            <th>LastName</th>
                            <th>Email</th>
                        </tr>
                    </thead>
                    <tbody>
                        {this.tabRow()}
                    </tbody>
                </table>
                <div className='row'>
                    <div className='col-md-4'>
                        <CustomerForm addCustomer={this.addCustomer}/>
                    </div>
                    <div className='col-md-4'></div>
                    <div className='col-md-4'>
                        <CustomerDetail customer={this.state.selectedCustomer}/>
                    </div>
                </div>
            </div>
        );
    }
}

export default CustomerList;