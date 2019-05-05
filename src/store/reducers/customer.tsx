import { 
    GET_CUSTOMERS,
    GET_CUSTOMER,
    UPDATE_CUSTOMER,
    SAVE_NEW_CUSTOMER,
    DELETE_CUSTOMER,
    RESET_UI_STATE,
    SEARCH,
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
            errorMessage: '',
            action: ''
        },
        customer: {
            state: 'LOADING',
            errorMessage: '',
            action: ''
        },
        newCustomer: {
            state: 'LOADING',
            errorMessage: '',
            action: ''
        }
    }
}

const getCustomers = (
    state: CustomerState, 
    action: CustomerActionTypes
) => {
    global.console.log('getCust', state)
    return state;
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
    const trimmedfirstName = firstName.trim();
    const trimmedlastName = lastName.trim();
    let newState = JSON.parse(JSON.stringify(state));

    let errorMessage = '';
    if(trimmedfirstName.length === 0){
        errorMessage = 'Firstname can not be empty.';
    } else if (trimmedlastName.length === 0){
        errorMessage = 'Lastname can not be empty.';
    }

    if(errorMessage.length === 0){
        newState.ui.customer.action = 'UPDATE';
        const customerExists = newState.customers.allIds.includes(id);
        if(customerExists){
            newState.customers.byId[id] = {
                id: id,
                firstName: firstName,
                lastName: lastName,
                dateOfBirth: dateOfBirth
            };
            newState.ui.customer.state = 'COMPLETED';
            newState.ui.customer.errorMessage = '';
        } else {
            newState.ui.customer.state = 'ERROR';
            newState.ui.customer.errorMessage = 'User not found. Please try again.';
        }
    } else {
        newState.ui.customer.state = 'ERROR';
        newState.ui.customer.errorMessage = errorMessage;
    }
        
global.console.log('update newState',newState)
    return newState;
}

const saveNewCustomer = (
    state: CustomerState, 
    firstName: string, 
    lastName: string, 
    dateOfBirth: Date
) => {

    const trimmedfirstName = firstName.trim();
    const trimmedlastName = lastName.trim();
    let newState = JSON.parse(JSON.stringify(state));

    let errorMessage = '';
    if(trimmedfirstName.length === 0){
        errorMessage = 'Firstname can not be empty.';
    } else if (trimmedlastName.length === 0){
        errorMessage = 'Lastname can not be empty.';
    }

    if(errorMessage.length === 0){
        newState.ui.newCustomer.action = 'SAVE';
        const id = utilities.generateId();
        const customerExists = newState.customers.allIds.includes(id);

        if(!customerExists){
            newState.customers.allIds.push(id);
            newState.customers.byId[id] = {
                id: id,
                firstName: trimmedfirstName,
                lastName: trimmedlastName,
                dateOfBirth: dateOfBirth
            }
            newState.ui.newCustomer.state = 'COMPLETED';
            newState.ui.newCustomer.errorMessage = '';
        } else {
            newState.ui.newCustomer.state = 'ERROR';
            newState.ui.newCustomer.errorMessage = 'Please try again. Unexpected error has occured';
        }
    } else {
        newState.ui.newCustomer.state = 'ERROR';
        newState.ui.newCustomer.errorMessage = errorMessage;
    }

    return newState;
}

const deleteCustomer = (
    state: CustomerState, 
    id: string
) => {
    let newState = utilities.copySimpleObject(state);
    newState.ui.customer.action = 'DELETE';

    const exists = newState.customers.allIds.includes(id);
    if(exists){
        delete newState.customers.byId[id];
        const indexToRemove = newState.customers.allIds.indexOf(id);
        newState.customers.allIds = newState.customers.allIds.splice(indexToRemove, 1)
        newState.ui.customer.state = 'COMPLETED';
        newState.ui.customer.errorMessage ='';
    }

    return newState;
}

const resetUIState = (
    state: CustomerState, 
    target: string
) => {
    const uiStateToReset:{[key:string]:boolean} = {
        'newCustomer': true,
        'customer': true,
        'customerList': true
    }
    if(uiStateToReset[target]){
        let newState = utilities.copySimpleObject(state);
        const initialPageUIState = utilities.copySimpleObject(initialState.ui[target]);
        newState.ui[target] = initialPageUIState;
        return newState;
    } else {
        return state;
    }
}

const search = (
    state: CustomerState, 
    searchText: string
) => {
    return state;
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
        case RESET_UI_STATE: 
            return resetUIState( state, action.payload.target );
        case SEARCH: 
            return search( state, action.payload.searchText );
            default: return state;
    }
}

export default reducer;