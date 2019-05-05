import React, { ReactNode } from 'react';

import {StyledForm, StyledFormContent, StyledFormTitle} from './Styled';

interface MyProps {
  title: string,
  children: ReactNode
    //TODO: ADJUST FOR TYPE SUBMIT
  //onSubmit?: any
}

const Form: React.SFC<MyProps>  = (props) => {
  return (
    <StyledForm onSubmit={(e) =>{e.preventDefault();}}>
      <StyledFormTitle>
        <h1>{props.title}</h1>
      </StyledFormTitle>
      <StyledFormContent>
        {props.children}
      </StyledFormContent>
    </StyledForm>
  );
}
  
export default Form;
  