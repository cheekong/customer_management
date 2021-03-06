import React from 'react';

import {StyledWrapper, StyledInput, StyledLabel} from './Styled';

interface TextProps {
    type: string;
    label: string;
    placeholder: string;
    value: string;
    onChange: any;
}

const Input: React.SFC<TextProps> = (props) => {
    return (
        <StyledWrapper>
            <StyledLabel htmlFor={props.label}>
                {props.label}
            </StyledLabel>
            <StyledInput 
                data-lpignore='true' 
                id={props.label} 
                type={props.type}
                value={props.value}
                placeholder={props.placeholder} 
                onChange={props.onChange}
            />
        </StyledWrapper>
        
    );
  }
  
  export default Input;
  