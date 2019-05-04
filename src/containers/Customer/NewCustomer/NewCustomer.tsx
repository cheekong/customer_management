import React from 'react';
import { RouteComponentProps } from 'react-router-dom';
import { connect } from 'react-redux'


import Form from '../../../components/UI/Form/Form';
import Input from '../../../components/UI/Input/Input';
import Button from '../../../components/UI/Button/Button';
import * as actionCreators from '../../../store/actions/index';

interface MyProps extends RouteComponentProps<any>{
    message: string,
    //FIXME: find out the real return.
    saveNewCustomer(arg1: string, arg2: string, arg3: Date):  any
}

type MyState = {
    customer: {
        firstName: string,
        lastName: string,
        dateOfBirth: Date
    }
}

class NewCustomer extends React.Component<MyProps, MyState> {
    state = {
        customer: {
            firstName: '',
            lastName: '',
            dateOfBirth: new Date()
        }
    }
    
    handleSubmit = (e: React.MouseEvent<HTMLButtonElement>) => {
        e.preventDefault();
        this.props.saveNewCustomer(
            this.state.customer.firstName, 
            this.state.customer.lastName, 
            this.state.customer.dateOfBirth
        );
    }

    handleCancel = (e: React.MouseEvent<HTMLButtonElement>) => {
        e.preventDefault();
        this.props.history.push('/list');
    }

    render(){
        return (
            <Form title='Add New Customer' onSubmit={this.handleSubmit}>
               <Input type='text' label='Fistname' placeholder='firstName'/>
               <Input type='text' label='Lastname' placeholder='firstName'/>
               <Input type='date' label='Date of Birth' />
               <Button 
                    type='submit'
                    variant='default' 
                    color='primary'
                    onClick={this.handleSubmit}
                >
                    Submit
                </Button>
               <Button 
                    variant='default' 
                    color='primary' 
                    onClick={this.handleCancel}
                >
                    Cancel
                </Button>
            </Form>
          );
    }
}

const mapStateToProps = (state: any) => {
    return {
      uiState: state.customer.ui.newCustomer.state,
      error: state.customer.ui.newCustomer.errorMessage
    }
  }

const mapDispatchToProps = (dispatch: any) => ({
    saveNewCustomer: (firstName: string, lastName: string, dateOfBirth: Date) => dispatch(actionCreators.saveNewCustomer(firstName, lastName, dateOfBirth))
})

export default connect(mapStateToProps, mapDispatchToProps)(NewCustomer)