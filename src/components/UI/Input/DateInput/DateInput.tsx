import React from 'react';
import DatePicker from "react-datepicker";
import '../../../../../node_modules/react-datepicker/dist/react-datepicker.css'; //Seems to have trouble with the css. had to manually import it.
import { StyledWrapper, StyledLabel, StyledDatePicker} from './Styled'

type DateProps = {
    label: string;
    value: Date;
    onChange: any
}

const Input: React.SFC<DateProps> = (props) => {
    const id = props.label;
    const StyledDatePicker2 = StyledDatePicker(DatePicker);
    return (
        <StyledWrapper>
            <StyledLabel 
                htmlFor={id}
            >
                {props.label}
            </StyledLabel>
            <StyledDatePicker2 
                maxDate={new Date()}
                selected={props.value}
                onChange={props.onChange}
            />
        </StyledWrapper>
        
    );
  }
  
  export default Input;
  