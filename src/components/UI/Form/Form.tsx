import React, { ReactNode } from 'react';

import StyledForm from './Styled';

type MyProps = {
  title: string,
  children: ReactNode
    //TODO: ADJUST FOR TYPE SUBMIT
  //onSubmit?: any
}

const Form: React.SFC<MyProps>  = (props) => {
  return (
    <StyledForm onSubmit={(e) =>{e.preventDefault();}}>
        <h1>{props.title}</h1>
        {props.children}
    </StyledForm>
  );
}
  
export default Form;
  