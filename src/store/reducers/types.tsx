export const GET_CUSTOMERS = 'GET_CUSTOMERS';
export const GET_CUSTOMER = 'GET_CUSTOMER';
export const UPDATE_CUSTOMER = 'UPDATE_CUSTOMER';
export const SAVE_NEW_CUSTOMER = 'SAVE_NEW_CUSTOMER';
export const DELETE_CUSTOMER = 'DELETE_CUSTOMERS';
export const RESET_UI_STATE = 'RESET_UI_STATE';
export const SEARCH = 'SEARCH';


export interface PageState {
    state: string;
    errorMessage: string;
    action: string;
}

export interface Customer {
    [id: string]: {
        id: string;
        firstName: string;
        lastName: string;
        dateOfBirth: Date;
    }
}

export interface CustomerState {
    customers: {
        byId: Customer;
        allIds: string[];
    };
    ui: {
        [page: string]: PageState
    }
}

interface GetCustomersAction {
    type: typeof GET_CUSTOMERS;
}

interface GetCustomerAction {
    type: typeof GET_CUSTOMER;
    payload: {
        id: string;
    }
}

interface SaveNewCustomerAction {
    type: typeof SAVE_NEW_CUSTOMER;
    payload: {
        firstName: string;
        lastName :string;
        dateOfBirth: Date;
    }
}


interface UpdateCustomerAction {
    type: typeof UPDATE_CUSTOMER;
    payload: {
        id: string;
        firstName: string;
        lastName :string;
        dateOfBirth: Date;
    }
}

interface DeleteCustomerAction {
    type: typeof DELETE_CUSTOMER;
    payload: {
        id: string;
    }
}

interface ResetUIStateAction {
    type: typeof RESET_UI_STATE;
    payload: {
        target: string;
    }
}

interface SearchAction {
    type: typeof SEARCH;
    payload: {
        searchText: string;
    }
}

export type CustomerActionTypes = GetCustomersAction | 
    GetCustomerAction | 
    SaveNewCustomerAction | 
    UpdateCustomerAction |
    DeleteCustomerAction |
    ResetUIStateAction |
    SearchAction;