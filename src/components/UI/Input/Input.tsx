import React from 'react';

import {StyledWrapper, StyledInput, StyledLabel} from './Styled';

type TextProps = {
    type: string;
    label: string;
    placeholder: string;
    value: string;
    onChange: any;
}

const Input: React.SFC<TextProps> = (props) => {

    //unlikely in this app but still good to prevent collision.
    const id = props.label;

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
  