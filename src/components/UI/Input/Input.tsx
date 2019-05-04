import React from 'react';
import styled from 'styled-components'

type MyProps = {
    type: string,
    label: string,
    placeholder?: string,
    value?: string | number | boolean,
    onChange?: (e: React.FormEvent<HTMLInputElement>) => void
}

const Input: React.SFC<MyProps> = (props) => {

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

    const StyledInput = styled.input `

    `

    //unlikely in this app but still good to prevent collision.
    const id = props.label  + '_' + Math.random().toString();

    return (
        <Wrapper>
            <StyledLabel htmlFor={id}>{props.label}</StyledLabel>
            <StyledInput id={id} type={props.type} placeholder={props.placeholder} onChange={props.onChange}/>
        </Wrapper>
        
    );
  }
  
  export default Input;
  