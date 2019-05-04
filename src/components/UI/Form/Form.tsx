import React, { ReactNode } from 'react';
import styled from 'styled-components'

type MyProps = {
  title: string,
  children: ReactNode
    //TODO: ADJUST FOR TYPE SUBMIT
  onSubmit?: any
}

const Form: React.SFC<MyProps>  = (props) => {

  const StyledForm = styled.form `
  
  `

  return (
    <StyledForm>
        <h1>{props.title}</h1>
        {props.children}
    </StyledForm>
  );
}
  
export default Form;
  