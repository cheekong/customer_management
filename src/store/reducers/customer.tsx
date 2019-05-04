import { Reducer } from 'redux';

import * as actionTypes from '../actions/actionTypes';
import { CustomerActionTypes, CustomerState } from './types';


const initialState: CustomerState = {
    customers: {
        byId: {},
        allIds: []
    },
    ui: {
        customerList: {
            state: 'LOADING',
            errorMessage: ''
        },
        customer: {
            state: 'LOADING',
            errorMessage: ''
        },
        newCustomer: {
            state: 'LOADING',
            errorMessage: ''
        }
    }
}

const getCustomers = (
    state: CustomerState, 
    action: CustomerActionTypes
) => {
    return(state);
}

const getCustomer = (
    state: CustomerState, 
    id: string
) => {
    return(state);
}


const saveCustomer = (
    state: CustomerState, 
    id: string, firstName: 
    string, lastName: 
    string, dateOfBirth: 
    Date) => {
    let newState = JSON.parse(JSON.stringify(state));
    const customerExists = newState.customer.allIds.filter((id: string) => id === id);
    if(customerExists){
        let targetCustomer = newState.customer.byId[id];
    }
    return({...state});
}

const deleteCustomer = (
    state: CustomerState, 
    id: string
) => {
    let newState = JSON.parse(JSON.stringify(state));
    const exists = newState.customers.allIds.filter((id: string) => id === id)
    if(exists){
        let {removedCustomer, ...rest} = newState.customers.byId;
        newState.customers.allIds = newState.customers.allIds.filter((id: string) => id !== id)
        newState.customers.byId = rest;
    }
    return newState;
}

const reducer = (
    state = initialState, 
    action: CustomerActionTypes
): CustomerState => {
    switch( action.type) {
        case actionTypes.GET_CUSTOMERS: 
            return getCustomers( state, action );
        case actionTypes.GET_CUSTOMER: 
            return getCustomer( state, action.payload.id );
        case actionTypes.SAVE_CUSTOMER: 
            return saveCustomer( state, action.payload.id, action.payload.firstName, action.payload.lastName, action.payload.dateOfBirth );
        case actionTypes.DELETE_CUSTOMER: 
            return deleteCustomer( state, action.payload.id );
        default: return state;
    }
}

export default reducer;