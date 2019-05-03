import * as actionTypes from '../actions/actionTypes';

type action = {
    type: string,
    id?: string,
    firstName?: string,
    lastName? :string
}

const initialState = {
    entities: {
        customers: {
            byId: {},
            allIds: []
        }
    },
    ui: {
        customerList: {
            state: 'LOADING'
        },
        customer: {
            state: 'LOADING'
        },
        newCustomer: {
            state: 'LOADING'
        }
    }
}

const getCustomers = (state: object, action: object) => {
    return({});
}

const getCustomer = (state: object, action: object) => {
    return({});
}

const saveCustomer = (state: object, action: object) => {
    return({});
}

const deleteCustomer = (state: object, action: object) => {
    return({});
}

const reducer = (state:object = initialState, action: action) => {
    switch( action.type) {
        case actionTypes.GET_CUSTOMERS: return getCustomers( state, action );
        case actionTypes.GET_CUSTOMER: return getCustomer( state, action );
        case actionTypes.SAVE_CUSTOMER: return saveCustomer( state, action );
        case actionTypes.DELETE_CUSTOMER: return deleteCustomer( state, action );
        default: return state;
    }
}

export default reducer;