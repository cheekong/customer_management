import React from 'react';
import { RouteComponentProps } from 'react-router-dom';

import Button from '../../../components/UI/Button/Button';

interface MyProps extends RouteComponentProps<any> {
    message: string
}

type  MyState = {
    customers: object
}


class CustomerList extends React.Component<MyProps, MyState> {
    handleAddNew = (e: React.MouseEvent<HTMLButtonElement>) => {
        e.preventDefault();
        this.props.history.push('/new');
    }
    
    render(){
        return (
            <div className="App">
               customer list obj
               <Button onClick={this.handleAddNew}>
                    Add New Customer
                </Button>
            </div>
          );
    }
}
  
  export default CustomerList;
