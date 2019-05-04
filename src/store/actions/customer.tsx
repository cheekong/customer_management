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
    global.console.log('test');
    return {
        type: actionTypes.SAVE_CUSTOMER,
        id: id,
        firstName: firstName,
        lastName: lastName,
        dateOfBirth: dateOfBirth
    }
}

export const saveNewCustomer = (firstName: string, lastName: string, dateOfBirth: Date) => {
    return(dispatch: any, getState: any) =>  {
        //TODO: improve on this.
        const id = Math.random().toString();

        dispatch(saveCustomer(id, firstName, lastName, dateOfBirth));
    }


    return {
        type: actionTypes.SAVE_CUSTOMER,
        firstName: firstName,
        lastName: lastName,
        dateOfBirth: dateOfBirth
    }
}

export const deleteCustomer = (id: string) => {
    return {
        type: actionTypes.DELETE_CUSTOMER,
        id: id
    }
}