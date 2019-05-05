import React from 'react';
import styled from 'styled-components'

interface MyProps {
  type?: 'submit' | 'button' | 'reset',
  width?: string;
  height?: string;
  size?: string;
  children: string; //TODO: string is one but need to find what's for <i>
  variant: string;
  color: string;
  //TODO: ADJUST FOR TYPE SUBMIT
  onClick: (e: React.MouseEvent<HTMLButtonElement>) => void;
}

const Button: React.SFC<MyProps> = ({type='button', ...props}) => {
  
  let styles = null;
  let widthStyles = null;
  let sizeStyles = null;
  let heightStyles = null;

  if (props.variant === 'outline'){
    styles = `
      border: 1px solid palevioletred;
      background-color: white;
      color: palevioletred;
    `
  } else if (props.variant === 'warning'){
    styles  = `
      background: #ff0000bd;
      border: none;
      color: white;
    `
  } else {
    styles  = `
      background: palevioletred;
      border: none;
      color: white;
    `
  }

  if(props.width !== undefined){
    widthStyles = `width: ${props.width}`;
  } else {
    widthStyles = `width: 100%`;
  }

  if(props.size !== undefined && props.size === 'small'){
    sizeStyles = `
      padding: 5px 5px; 
      margin: 0 5px;
    `;
  } else {
    sizeStyles = `
      padding: 15px 40px;
      margin-top:10px;
      margin-bottom:10px;
    `;
  }

  if(props.height !== undefined){
    heightStyles = `
      height: ${props.height};
    `
  }

  
  const StyledButton = styled.button`
    
    border-radius: 4px;
    font-size:1em;
    cursor: pointer;
    ${styles}
    ${widthStyles}
    ${sizeStyles}
    ${heightStyles}

    :hover {
      opacity: 0.25
     }
  `;
    return (
      <StyledButton type={type} onClick={(e) => props.onClick(e)}>
         {props.children}
      </StyledButton>
    );
  }
  
export default Button;
  