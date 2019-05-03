import React from 'react';
import styled from 'styled-components'

type MyProps = {
  children: string
}

const Button: React.SFC  = (props) => {
    return (
      <div className="App">
         {props.children}
      </div>
    );
  }
  
  export default Button;
  