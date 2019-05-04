import React from 'react';
import DatePicker from "react-datepicker";
import styled from 'styled-components'

type DateProps = {
    label: string;
    value: Date;
    onChange: any
}

const Input: React.SFC<DateProps> = (props) => {

    const Wrapper = styled.div `
        width: 100%;
        margin-top:10px;
        margin-bottom:10px;
        border: 1px solid lightgray;
        height:40px;
        text-indent: 20px;
    `

    const StyledLabel = styled.label `

    `

    const id = props.label;

    return (
        <Wrapper>
            <StyledLabel 
                htmlFor={id}
            >
                {props.label}
            </StyledLabel>
            <DatePicker 
                selected={props.value}
                onChange={props.onChange}
            />
        </Wrapper>
        
    );
  }
  
  export default Input;
  