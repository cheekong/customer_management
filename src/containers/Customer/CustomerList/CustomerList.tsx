import React from 'react';
import { RouteComponentProps } from 'react-router-dom';
import { connect } from 'react-redux'

import Button from '../../../components/UI/Button/Button';
import Form from '../../../components/UI/Form/Form';
import List from '../../../components/UI/List/List';
import ListItem from '../../../components/UI/List/ListItem/ListItem';
import * as actionCreators from '../../../store/actions/index';

interface MyProps extends RouteComponentProps<any> {
    getCustomers():  any;
    customers: any
}

type MyState = {
    customers: {
        [id: string]: {
            id: string;
            firstName: string;
            lastName: string;
            dateOfBirth: Date;
        }
    }
}

type Customers = {
    customers: {
        [id: string]: {
            id: string;
            firstName: string;
            lastName: string;
            dateOfBirth: Date;
        }
    }
}


class CustomerList extends React.Component<MyProps, MyState> {
    state = {
        customers: {},
        test: 'test'
    }

    handleAddNew = (e: React.MouseEvent<HTMLButtonElement>) => {
        e.preventDefault();
        this.props.history.push('/new');
    }

    handleViewCustomer = (id: string) => {
global.console.log('id',id);
global.console.log('this.props.customers.byId',this.props.customers.byId);
global.console.log('this.props.customers.byId[id]',this.props.customers.byId[id]);
        this.props.history.push({
            pathname: '/customer',
            state: {customer: this.props.customers.byId[id]}
        })
    }

    buildList = (dataSource:Customers ) => {
global.console.log('dataSource',dataSource);
        let content = null;
        let keys = Object.keys(dataSource);
        if(keys.length){
            let listItems = [];
            for(let key of keys){
                //@ts-ignore
                global.console.log('data', dataSource[key]);
                //@ts-ignore
                let customer = dataSource[key];
                listItems.push(
                    <ListItem onClick={() => this.handleViewCustomer(key)}>
                        <p>{customer.firstName + ' ' + customer.lastName} </p>
                    </ListItem>
                )
global.console.log('li item', listItems);
            }
            content = (
                <Form title='Customers'>
                    TEST
                    <List>
                        {listItems}
                    </List>
                </Form>
            )
        }
        global.console.log('content', content);
        return content;
    }

    componentDidMount(){
        const test = this.props.getCustomers();
        global.console.log('test',test);
    }
    
    render(){
global.console.log('customers', this.props.customers);
        const customerList = this.buildList(this.props.customers.byId)
        return (
            <div className="App">
                {customerList}
               <Button 
                    variant='default'
                    color='primary'
                    onClick={this.handleAddNew}
                >
                    Add New Customer
                </Button>
            </div>
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