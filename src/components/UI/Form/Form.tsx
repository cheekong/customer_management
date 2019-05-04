import React, { ReactNode } from 'react';

import StyledForm from './styled';

type MyProps = {
  title: string,
  children: ReactNode
    //TODO: ADJUST FOR TYPE SUBMIT
  //onSubmit?: any
}

const Form: React.SFC<MyProps>  = (props) => {
  return (
    <StyledForm>
        <h1>{props.title}</h1>
        {props.children}
    </StyledForm>
  );
}
  
export default Form;
  