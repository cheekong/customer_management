import { 
    GET_CUSTOMERS,
    GET_CUSTOMER,
    UPDATE_CUSTOMER,
    SAVE_NEW_CUSTOMER,
    DELETE_CUSTOMER,
    RESET_UI_STATE,
    CustomerActionTypes, 
    SEARCH
} from '../reducers/types';


export const getCustomers = ():CustomerActionTypes => {
    return {
        type: GET_CUSTOMERS
    }
};

//TODO: remove. pass state instead
export const getCustomer = (id: string):CustomerActionTypes => {
    return {
        type: GET_CUSTOMER,
        payload: {
            id: id
        }
    }
};

export const updateCustomer = (
    id: string, 
    firstName: string, 
    lastName: string, 
    dateOfBirth: Date
):CustomerActionTypes => {
    return {
        type: UPDATE_CUSTOMER,
        payload: {
            id: id,
            firstName: firstName,
            lastName: lastName,
            dateOfBirth: dateOfBirth
        }
    }
};

//TODO: look into redux-thunk typescript
export const saveNewCustomer = (
    firstName: string, 
    lastName: string, 
    dateOfBirth: Date
):CustomerActionTypes => {
    return {
        type: SAVE_NEW_CUSTOMER,
        payload: {
            firstName: firstName,
            lastName: lastName,
            dateOfBirth: dateOfBirth
        }
    }
};

export const deleteCustomer = (
    id: string
):CustomerActionTypes => {
    return {
        type: DELETE_CUSTOMER,
        payload: {
            id: id
        }
    }
};

export const resetUIState = (
    target: string
): CustomerActionTypes => {
    return {
        type: RESET_UI_STATE,
        payload: {
            target: target
        }
    }
};

export const search = (
    searchText: string
): CustomerActionTypes => {
    return {
        type: SEARCH,
        payload: {
            searchText: searchText
        }
    }
}