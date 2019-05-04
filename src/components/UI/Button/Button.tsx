import React from 'react';
import styled from 'styled-components'

type MyProps = {
  type?: 'submit' | 'button' | 'reset',
  children: string,
  variant: string,
  color: string,
  //TODO: ADJUST FOR TYPE SUBMIT
  onClick: (e: React.MouseEvent<HTMLButtonElement>) => void
}

const Button: React.SFC<MyProps> = ({type='button', ...props}) => {
  const StyledButton = styled.button`
    background: palevioletred;
    border-radius: 3px;
    border: none;
    color: white
  `
    return (
      <StyledButton type={type} onClick={(e) => props.onClick(e)}>
         {props.children}
      </StyledButton>
    );
  }
  
export default Button;
  