import styled from 'styled-components'

export const StyledWrapper = styled.div `
        width: 100%;
        margin-top:10px;
        margin-bottom:10px;
        border: 1px solid lightgray;
        height: 60px;
        display: flex;
        border-radius: 4px;
    `

export const StyledLabel = styled.label `
    margin-top:auto;
    margin-bottom: auto;
    width: 30%;
    font-size: 1em;
`

export const StyledInput = styled.input `

    
    margin: 0;
    padding: 0
    border: 0;
    width: 70%;
    font-size: 1em;
    background-color: #f5f5f5;
`
export const StyledDatePickerWrapper = styled.div `
    font-size: 1em;
    width: 70%;
    background-color: #f5f5f5;
`;

export const StyledDatePicker = (datePicker: any) => styled(datePicker) `
    font-size: 1em;
    width: 100%;
    text-indent:  10px;
    margin-top: 10%;
    text-align: center;
`;