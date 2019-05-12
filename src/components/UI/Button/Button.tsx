import React from 'react';
import styleButton from './Styled';

interface MyProps {
  type?: 'submit' | 'button' | 'reset';
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
global.console.log('button tsx size = ' +  props.size);
    let StyledButton = styleButton(
      props.variant, 
      props.width, 
      props.height,
      props.size
    );

    return (
      <StyledButton 
        type={type} 
        onClick={(e) => props.onClick(e)}
      >
         {props.children}
      </StyledButton>
    );
  }
  
export default Button;
  