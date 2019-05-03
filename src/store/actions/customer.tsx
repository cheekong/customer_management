import * as actionTypes from './actionTypes';

export const getCustomers = () => {
    return {
        type: actionTypes.GET_CUSTOMERS
    }
}

export const getCustomer = (id: string) => {
    return {
        type: actionTypes.GET_CUSTOMERS,
        id: id
    }
}

export const saveCustomer = (id: string, firstName: string, lastName: string, dateOfBirth: Date) => {
    return {
        type: actionTypes.SAVE_CUSTOMER,
        id: id
    }
}

export const deleteCustomer = (id: string) => {
    return {
        type: actionTypes.DELETE_CUSTOMER,
        id: id
    }
}