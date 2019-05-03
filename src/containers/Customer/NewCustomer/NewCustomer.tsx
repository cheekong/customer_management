import React from 'react';
import styled from 'styled-components'

type MyProps = {
    message: string
}

type MyState = {
    customers: object
}

class NewCustomer extends React.Component<MyProps, MyState> {
    render(){
        return (
            <div className="App">
               new customer obj
            </div>
          );
    }
}
  
  export default NewCustomer;
