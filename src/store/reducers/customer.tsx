import { 
    GET_CUSTOMERS,
    GET_CUSTOMER,
    UPDATE_CUSTOMER,
    SAVE_NEW_CUSTOMER,
    DELETE_CUSTOMER,
    CustomerActionTypes, 
    CustomerState 
} from './types';
import * as utilities from '../../utilities/utilities';

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

const updateCustomer = (
    state: CustomerState, 
    id: string, 
    firstName: string, 
    lastName: string, 
    dateOfBirth: Date
) => {
    let newState = JSON.parse(JSON.stringify(state));
    const customerExists = newState.customers.allIds.filter((id: string) => id === id);
    if(customerExists){
        newState.customer.byId[id] = {
            firstName: firstName,
            lastName: lastName,
            dateOfBirth: dateOfBirth
        };
    } else {
        newState.ui.newCustomer.state = 'LOADED';
        newState.ui.newCustomer.errorMessage = 'User not found. Please try again.';
    }
    return newState;
}

const saveNewCustomer = (
    state: CustomerState, 
    firstName: string, 
    lastName: string, 
    dateOfBirth: Date
) => {
    let newState = JSON.parse(JSON.stringify(state));
    const id = utilities.generateId();

    const customerExists = newState.customers.allIds.filter((existingId: string) => existingId === id);
global.console.log('customerExists',customerExists);
global.console.log('customerExists',customerExists);
    if(customerExists.length === 0){
        newState.customers.allIds.push(id);
        newState.customers.byId[id] = {
            firstName: firstName,
            lastName: lastName,
            dateOfBirth: dateOfBirth
        }
    } else {
        newState.ui.newCustomer.state = 'LOADED';
        newState.ui.newCustomer.errorMessage = 'Please try again. Unexpected error has occured';
    }
    global.console.log('test state', newState);
    return newState;
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
        case GET_CUSTOMERS: 
            return getCustomers( state, action );
        case GET_CUSTOMER: 
            return getCustomer( state, action.payload.id );
        case SAVE_NEW_CUSTOMER: 
            return saveNewCustomer( state, action.payload.firstName, action.payload.lastName, action.payload.dateOfBirth );
        case UPDATE_CUSTOMER: 
            return updateCustomer( state, action.payload.id, action.payload.firstName, action.payload.lastName, action.payload.dateOfBirth );
        case DELETE_CUSTOMER: 
            return deleteCustomer( state, action.payload.id );
        default: return state;
    }
}

export default reducer;