import React from 'react';

import Button from '../../../components/UI/Button/Button';

type MyProps = {
    message: string
}

type  MyState = {
    customers: object
}

class CustomerList extends React.Component<MyProps, MyState> {
    render(){
        return (
            <div className="App">
               customer list obj
               <Button>Add New Customer</Button>
            </div>
          );
    }
}
  
  export default CustomerList;
