import React from 'react';

type MyProps = {
    message: string
}

type MyState = {
    customer: object
}

class Customer extends React.Component<MyProps, MyState> {
    render(){
        return (
            <div className="App">
               customer obj
            </div>
          );
    }
}
  
  export default Customer;
