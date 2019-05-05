import React from 'react';
import { RouteComponentProps } from 'react-router-dom';
import { connect } from 'react-redux'

import Modal from '../../../components/Modal/Modal';
import Form from '../../../components/UI/Form/Form';
import Input from '../../../components/UI/Input/Input';
import DateInput from '../../../components/UI/Input/DateInput/DateInput';
import Button from '../../../components/UI/Button/Button';
import * as actionCreators from '../../../store/actions/index';

interface MyProps extends RouteComponentProps<any>{
    //FIXME: find out the real return.
    uiState: string;
    pageAction: string;
    errorMessage: string;
    saveNewCustomer(
        arg1: string, 
        arg2: string, 
        arg3: Date
    ):  any;
    resetUIState(
        target: string
    ): any;

}

type MyState = {
    firstName: string,
    lastName: string,
    dateOfBirth: Date
}

class NewCustomer extends React.Component<MyProps, MyState> {
    state = {
        firstName: '',
        lastName: '',
        dateOfBirth: new Date()
    }

    handleFirstNameOnChange = (e: React.ChangeEvent<HTMLInputElement>, target: string) => {
        const value = e.target.value;
        let newState = {...this.state};
        newState.firstName = value;
        this.setState(newState);
    }

    handleLastNameOnChange = (e: React.ChangeEvent<HTMLInputElement>, target: string) => {
        const value = e.target.value;
        let newState = {...this.state};
        newState.lastName = value;
        this.setState(newState);
    }

    handleDateOnChange = (e: any, target: string) => {
        let newState = {...this.state};
        newState.dateOfBirth = e;
        this.setState(newState);

    }

    handleSubmit = (e: React.MouseEvent<HTMLButtonElement>) => {
        e.preventDefault();
        this.props.saveNewCustomer(
            this.state.firstName, 
            this.state.lastName, 
            this.state.dateOfBirth
        );
    }

    handleCancel = (e: React.MouseEvent<HTMLButtonElement>) => {
        e.preventDefault();
        this.props.history.push('/list');
    }
    

    componentDidMount() {
        this.props.resetUIState('newCustomer');
    }

    render(){
        let modalConfig = {
            show: false,
            message: '',
            title: ''
        };
        let warning = null;

        if(this.props.uiState === 'COMPLETED'){
            modalConfig.show = true;
            modalConfig.title = 'Success';

            if(this.props.pageAction === 'SAVE'){
                modalConfig.message = 'Successfully saved a new  customer.'
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
                <Form title='Add New Customer'>
                {warning}
                <Input 
                        type='text' 
                        label='Fistname' 
                        value={this.state.firstName}
                        placeholder='Firstname'
                        onChange={(e: React.ChangeEvent<HTMLInputElement> ) => this.handleFirstNameOnChange(e, 'firstName')}
                    />
                <Input 
                        type='text' 
                        label='Lastname' 
                        value={this.state.lastName}
                        placeholder='Lastname'
                        onChange={(e: React.ChangeEvent<HTMLInputElement> ) => this.handleLastNameOnChange(e, 'lastName')}
                    />
                    <DateInput 
                        label='Date of Birth'
                        value={this.state.dateOfBirth}
                        onChange={(e: any ) => this.handleDateOnChange(e, 'lastName')}
                    />
                    
                
                <Button 
                    type='submit'
                    variant='default' 
                    color='primary'
                    onClick={this.handleSubmit}
                >
                    Submit
                </Button>
                <Button 
                    variant='outline' 
                    color='primary' 
                    onClick={this.handleCancel}
                >
                    Cancel
                </Button>
                </Form>
            </>
          );
    }
}

const mapStateToProps = (state: any) => {
    return {
      uiState: state.customer.ui.newCustomer.state,
      pageAction: state.customer.ui.newCustomer.action,
      errorMessage: state.customer.ui.newCustomer.errorMessage
    }
  }

const mapDispatchToProps = (dispatch: any) => ({
    saveNewCustomer: (
        firstName: string, 
        lastName: string, 
        dateOfBirth: Date
    ) => dispatch(actionCreators.saveNewCustomer(
        firstName, 
        lastName, 
        dateOfBirth
    )),
    resetUIState: (
        target: string
    ) => dispatch(actionCreators.resetUIState(
        target
    ))
})

export default connect(mapStateToProps, mapDispatchToProps)(NewCustomer)