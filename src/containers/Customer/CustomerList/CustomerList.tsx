import React from 'react';
import { RouteComponentProps } from 'react-router-dom';
import { connect } from 'react-redux'

import Searchbar from '../../../components/Searchbar/Searchbar';
import Button from '../../../components/UI/Button/Button';
import Form from '../../../components/UI/Form/Form';
import List from '../../../components/UI/List/List';
import ListItem from '../../../components/UI/List/ListItem/ListItem';
import * as actionCreators from '../../../store/actions/index';
import * as utilities from '../../../utilities/utilities';

interface MyProps extends RouteComponentProps<any> {
    getCustomers():  any;
    customers: any
}

interface MyState {
    customers: {
        [id: string]: {
            id: string;
            firstName: string;
            lastName: string;
            dateOfBirth: Date;
        }
    },
    uiState: {
        searchText: string;
        searchStarted: boolean;
        searchResult: {
            [id: string]: {
                id: string;
                firstName: string;
                lastName: string;
                dateOfBirth: Date;
            }
        }
    }
}

interface Customers {
    [id: string]: {
        id: string;
        firstName: string;
        lastName: string;
        dateOfBirth: Date;
    }
}

class CustomerList extends React.Component<MyProps, MyState> {
    state = {
        customers: {},
        uiState: {
            searchText: '',
            searchResult: {},
            searchStarted: false
        }
    }

    handleAddNew = (e: React.MouseEvent<HTMLButtonElement>) => {
        e.preventDefault();
        this.props.history.push('/new');
    }

    handleViewCustomer = (id: string) => {
        this.props.history.push({
            pathname: '/customer',
            state: {customer: this.props.customers.byId[id]}
        })
    };

    handleSearchText = (e: React.ChangeEvent<HTMLInputElement>) => {
        const value = e.target.value;
        let newUIState = {...this.state.uiState};
        newUIState.searchText = value;
        this.setState({uiState: newUIState})
    }

    handleCancelSearch = (e: React.MouseEvent<HTMLButtonElement>) => {
        e.preventDefault();
        let newState = utilities.copySimpleObject(this.state);
        newState.uiState.searchText = '';
        newState.uiState.searchStarted = false;
        newState.uiState.searchResult = {};
        this.setState(newState);
    }

    searchCustomer = (e: React.ChangeEvent<HTMLInputElement>) => {
        const customers = this.props.customers.byId;
        const keys = Object.keys(customers);
        let matchedCustomers = {};
        
        for(let key of keys){
            const lowercaseSeachText = this.state.uiState.searchText.toLowerCase();
            let customer = customers[key];
            const fullname = customer.firstName + ' ' + customer.lastName;
            if(fullname.toLowerCase().includes(lowercaseSeachText)){
                //@ts-ignore
                matchedCustomers[key] = customer;
            }
        }

        let newState = utilities.copySimpleObject(this.state);
        newState.uiState.searchResult = matchedCustomers
        newState.uiState.searchStarted = true;
        this.setState(newState);
    }

    buildList = (dataSource:Customers ) => {
        let content = null;
        let keys = Object.keys(dataSource);
        if(keys.length){
            let listItems = [];
            for(let key of keys){
                //@ts-ignore
                let customer = dataSource[key];
                listItems.push(
                    <ListItem 
                        key={key} 
                        onClick={() => this.handleViewCustomer(key)}
                    >
                        <p>{customer.firstName + ' ' + customer.lastName} </p>
                    </ListItem>
                )
            }
            content = (
                <List>
                    {listItems}
                </List>
            )
        }
        return content;
    }
    
    render(){
        let customerList = null;
        const searchResult = this.state.uiState.searchResult;

        if(this.state.uiState.searchStarted ){
            customerList = this.buildList(searchResult);
        } else if (Object.entries(this.props.customers.byId).length > 0 && 
            this.props.customers.byId.constructor === Object)
        {
            customerList = this.buildList(this.props.customers.byId);
        } else {
            customerList = (<p>You have no customers</p>);
        }

        let searchbarComponent = null;
        if(Object.keys(this.props.customers.byId).length){
            searchbarComponent = (
                <Searchbar 
                    value={this.state.uiState.searchText}
                    placeholder='Search for customers by name'
                    onChange={this.handleSearchText}
                    onClick={this.searchCustomer}
                    onCancel={this.handleCancelSearch}
                />
            )
        }
        
        return (
            <Form title='Customers'>
                {searchbarComponent}
                {customerList}
               <Button 
                    variant='default'
                    color='primary'
                    onClick={this.handleAddNew}
                >
                    Add New Customer
                </Button>
            </Form>
          );
    }
}

const mapStateToProps = (state: any) => {
    return {
        customers: state.customer.customers,
        uiState: state.customer.ui.customerList.state,
        error: state.customer.ui.customerList.errorMessage
    }
  }

const mapDispatchToProps = (dispatch: any) => ({
    getCustomers: () => dispatch(actionCreators.getCustomers())
})

export default connect(mapStateToProps, mapDispatchToProps)(CustomerList)