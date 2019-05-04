import React from 'react';
import { RouteComponentProps } from 'react-router-dom';
import { connect } from 'react-redux'

import Form from '../../components/UI/Form/Form';
import Input from '../../components/UI/Input/Input';
import DateInput from '../../components/UI/Input/DateInput';
import Button from '../../components/UI/Button/Button';
import * as actionCreators from '../../store/actions/index';

interface MyProps extends RouteComponentProps<any>{
    id: string; 
    firstName: string;
    lastName: string;
    dateOfBirth: Date;
    //FIXME: find out the real return.
    updateCustomer(arg1: string, arg2: string, args3: string, arg4: Date):  any
}

type MyState = {
    edit: boolean;
    customer: {
        id: string;
        firstName: string;
        lastName: string;
        dateOfBirth: Date;
    }
}

class Customer extends React.Component<MyProps, MyState> {
    state = {
        edit: false,
        customer: {
            id: '',
            firstName: '',
            lastName: '',
            dateOfBirth: new Date()
        }
    }

    handleFirstNameOnChange = (e: React.ChangeEvent<HTMLInputElement>, target: string) => {
        const value = e.target.value;
        let newCustomerState = {...this.state.customer};
        newCustomerState.firstName = value;
        this.setState({customer: newCustomerState});
    }

    handleLastNameOnChange = (e: React.ChangeEvent<HTMLInputElement>, target: string) => {
        const value = e.target.value;
        let newCustomerState = {...this.state.customer};
        newCustomerState.lastName = value;
        this.setState({customer: newCustomerState});
    }

    handleDateOnChange = (e: any, target: string) => {
        global.console.log('e',e);

        let newCustomerState = {...this.state.customer};
        newCustomerState.dateOfBirth = e;
        this.setState({customer: newCustomerState});

    }

    handleSubmit = (e: React.MouseEvent<HTMLButtonElement>) => {
        e.preventDefault();
        this.props.updateCustomer(
            this.state.customer.id,
            this.state.customer.firstName, 
            this.state.customer.lastName, 
            this.state.customer.dateOfBirth
        );
    }

    handleCancel = (e: React.MouseEvent<HTMLButtonElement>) => {
        e.preventDefault();
        this.props.history.push('/list');
    }

    handleModeChange = (e: React.MouseEvent<HTMLButtonElement>) => {
        e.preventDefault();
        this.setState({edit: !this.state.edit})
    }

    componentDidMount() {
        global.console.log('props', this.props.history.location.state)
        const customer = this.props.history.location.state.customer;
        let newCustomerState = {...this.state.customer};
        newCustomerState = {
            id: customer.id,
            firstName: customer.firstName,
            lastName: customer.lastName,
            dateOfBirth: new Date(customer.dateOfBirth)
        }
        this.setState({customer: newCustomerState});
    }

    render(){
global.console.log('state', this.state);
        let content = (
            <Form title='View Customer'>
                <p>Firstname: {this.state.customer.firstName}</p>
                <p>Lastname: {this.state.customer.lastName}</p>
                <p>Date of Birth: {this.state.customer.dateOfBirth.toDateString()}</p>
                <Button 
                    type='button'
                    variant='default' 
                    color='primary'
                    onClick={this.handleModeChange}
                >
                    Edit
                </Button>
               <Button 
                    variant='default' 
                    color='primary' 
                    onClick={this.handleCancel}
                >
                    Cancel
                </Button>
            </Form>
        )
        if(this.state.edit){
            content = (
                <Form title='Edit Customer'>
               <Input 
                    type='text' 
                    label='Fistname' 
                    value={this.state.customer.firstName}
                    placeholder='firstName'
                    onChange={(e: React.ChangeEvent<HTMLInputElement> ) => this.handleFirstNameOnChange(e, 'firstName')}
                />
               <Input 
                    type='text' 
                    label='Lastname' 
                    value={this.state.customer.lastName}
                    placeholder='Lastname'
                    onChange={(e: React.ChangeEvent<HTMLInputElement> ) => this.handleLastNameOnChange(e, 'lastName')}
                />
                <DateInput 
                    label='Date of Birth'
                    value={this.state.customer.dateOfBirth}
                    onChange={(e: any ) => this.handleDateOnChange(e, 'lastName')}
                />
                <Button 
                    type='button'
                    variant='default' 
                    color='primary'
                    onClick={this.handleSubmit}
                >
                    Save
                </Button>
               <Button 
                    variant='default' 
                    color='primary' 
                    onClick={this.handleCancel}
                >
                    Cancel
                </Button>
            </Form>
            )
        }
        return content;
    }
}

const mapStateToProps = (state: any) => {
    return {
      uiState: state.customer.ui.customer.state,
      error: state.customer.ui.customer.errorMessage
    }
  }

const mapDispatchToProps = (dispatch: any) => ({
    updateCustomer: (
        id: string,
        firstName: string, 
        lastName: string, 
        dateOfBirth: Date
    ) => dispatch(actionCreators.updateCustomer(id, firstName, lastName, dateOfBirth))
})

export default connect(mapStateToProps, mapDispatchToProps)(Customer)