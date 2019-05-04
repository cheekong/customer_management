import * as actionTypes from './actionTypes';
import { CustomerActionTypes } from '../reducers/types';

export const getCustomers = ():CustomerActionTypes => {
    return {
        type: actionTypes.GET_CUSTOMERS
    }
}

export const getCustomer = (id: string):CustomerActionTypes => {
    return {
        type: actionTypes.GET_CUSTOMER,
        payload: {
            id: id
        }
    }
}

export const saveCustomer = (
    id: string, 
    firstName: 
    string, 
    lastName: string, 
    dateOfBirth: Date
):CustomerActionTypes => {
    global.console.log('test');
    return {
        type: actionTypes.SAVE_CUSTOMER,
        payload: {
            id: id,
            firstName: firstName,
            lastName: lastName,
            dateOfBirth: dateOfBirth
        }
    }
}

//TODO: look into redux-thunk typescript
export const saveNewCustomer = (
    firstName: string, 
    lastName: string, 
    dateOfBirth: Date
):CustomerActionTypes => {
    return {
        type: actionTypes.SAVE_CUSTOMER,
        payload: {
            id: Math.random().toString(),
            firstName: firstName,
            lastName: lastName,
            dateOfBirth: dateOfBirth
        }
    }
}

export const deleteCustomer = (id: string):CustomerActionTypes => {
    return {
        type: actionTypes.DELETE_CUSTOMER,
        payload: {
            id: id
        }
    }
}