import React from 'react';
import { RouteComponentProps } from 'react-router-dom';
import { connect } from 'react-redux'

import Modal from '../../components/Modal/Modal';
import Form from '../../components/UI/Form/Form';
import DisplayField from '../../components/DisplayField/DisplayField';
import Input from '../../components/UI/Input/Input';
import DateInput from '../../components/UI/Input/DateInput/DateInput';
import Button from '../../components/UI/Button/Button';
import * as actionCreators from '../../store/actions/index';

interface MyProps extends RouteComponentProps<any>{
    uiState: string;
    pageAction: string;
    errorMessage: string;
    id: string; 
    firstName: string;
    lastName: string;
    dateOfBirth: Date;
    //FIXME: find out the real return.
    updateCustomer(
        arg1: string, 
        arg2: string, 
        args3: string, 
        arg4: Date
    ):  any;
    resetUIState(
        target: string
    ): any;
    deleteCustomer(
        id: string
    ): any;
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

    handleEditCancel = (e: React.MouseEvent<HTMLButtonElement>) => {
        e.preventDefault();
        this.initCustomerState();
    }

    initCustomerState = () => {
        if(this.props.history.location.state.customer){
        const customer = this.props.history.location.state.customer;
            let newCustomerState = {...this.state.customer};
            newCustomerState = {
                id: customer.id,
                firstName: customer.firstName,
                lastName: customer.lastName,
                dateOfBirth: new Date(customer.dateOfBirth)
            }
            this.setState({customer: newCustomerState});
        } else {
            this.props.history.push('/list')
        }
    }

    handleModeChange = (e: React.MouseEvent<HTMLButtonElement>) => {
        e.preventDefault();
        this.setState({edit: !this.state.edit})
    }

    handleDelete = (e: React.MouseEvent<HTMLButtonElement>) => {
        e.preventDefault();
        this.props.deleteCustomer(this.props.history.location.state.customer.id);
    }

    componentDidMount() {
        this.props.resetUIState('customer');
        this.initCustomerState();
    }

    render(){
        let content = (
            <>
                <DisplayField 
                    label='Firstname'
                    pararapgh={this.state.customer.firstName}
                />
                <DisplayField 
                    label='Lastname'
                    pararapgh={this.state.customer.lastName}
                />
                <DisplayField 
                    label='Date of Birth'
                    pararapgh={this.state.customer.dateOfBirth.toLocaleDateString()}
                />
                <Button 
                    type='button'
                    variant='default' 
                    color='primary'
                    onClick={this.handleModeChange}
                >
                    Edit
                </Button>
               <Button 
                    variant='outline' 
                    color='primary' 
                    onClick={this.handleCancel}
                >
                    Cancel
                </Button>
                <Button 
                    variant='warning' 
                    color='primary' 
                    onClick={this.handleDelete}
                >
                    Delete
                </Button>
            </>
        )
        if(this.state.edit){
            content = (
                <>
                    <Input 
                        type='text' 
                        label='Fistname' 
                        value={this.state.customer.firstName}
                        placeholder='FirstName'
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
                        variant='outline' 
                        color='primary' 
                        onClick={this.handleEditCancel}
                    >
                        Cancel
                    </Button>
                </>
            )
        }

        let modalConfig = {
            show: false,
            message: '',
            title: ''
        };
        let warning = null;
        if(this.props.uiState === 'COMPLETED'){
            modalConfig.show = true;
            modalConfig.title = 'Success';
            if(this.props.pageAction === 'DELETE'){
                modalConfig.message = 'Successfully deleted ' + this.state.customer.firstName + ' ' + this.state.customer.lastName;
            } else if (this.props.pageAction === 'SAVE'){
                modalConfig.message = 'Successfully updated ' + this.state.customer.firstName + ' ' + this.state.customer.lastName;
            }
        } else if (this.props.uiState === 'ERROR'){
            warning = <p>{this.props.errorMessage}</p>
        }

        return (
            <>
            <Modal 
                title={modalConfig.title}  
                show={modalConfig.show} 
            >
                <p>{modalConfig.message}</p>
                <Button 
                    variant='default' 
                    color='primary' 
                    onClick={this.handleCancel}
                >
                    OK
                </Button>
            </Modal>
            <Form title={this.state.edit? 'Edit Customer' : 'View Customer'}>
                {warning}
                {content}
            </Form>
            </>
        );
    }
}

const mapStateToProps = (state: any) => {
    return {
      uiState: state.customer.ui.customer.state,
      pageAction: state.customer.ui.customer.action,
      errorMessage: state.customer.ui.customer.errorMessage
    }
  }

const mapDispatchToProps = (dispatch: any) => ({
    updateCustomer: (
        id: string,
        firstName: string, 
        lastName: string, 
        dateOfBirth: Date
    ) => dispatch(actionCreators.updateCustomer(
        id, 
        firstName, 
        lastName, 
        dateOfBirth
    )),
    resetUIState: (
        target: string
    ) => dispatch(actionCreators.resetUIState(
        target
    )),
    deleteCustomer: (
        id: string
    ) => dispatch(actionCreators.deleteCustomer(
        id
    ))
})

export default connect(mapStateToProps, mapDispatchToProps)(Customer)