import React from 'react';
import styled from 'styled-components'

type MyProps = {
  children: string,
  onClick: (ev: React.MouseEvent<HTMLButtonElement>) => void
}

const Button: React.SFC<MyProps> = (props) => {
  const StyledButton = styled.button`
    background: palevioletred;
    border-radius: 3px;
    border: none;
    color: white
  `
    return (
      <StyledButton onClick={(e) => props.onClick(e)}>
         {props.children}
      </StyledButton>
    );
  }
  
export default Button;
  