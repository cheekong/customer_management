import React from 'react';
import DatePicker from "react-datepicker";
import '../../../../../node_modules/react-datepicker/dist/react-datepicker.css'; //Seems to have trouble with the css. had to manually import it.
import { 
    StyledWrapper, 
    StyledLabel, 
    StyledDatePicker,
    StyledDatePickerWrapper
} from './Styled'

interface DateProps {
    label: string;
    value: Date;
    onChange: any;
}

const DatePickerInput: React.SFC<DateProps> = (props) => {
    const id = props.label;
    const StyledDP = StyledDatePicker(DatePicker);
    return (
        <StyledWrapper>
            <StyledLabel 
                htmlFor={id}
            >
                {props.label}
            </StyledLabel>
            <StyledDatePickerWrapper>
                <StyledDP
                    data-lpignore='true' 
                    maxDate={new Date()}
                    selected={props.value}
                    onChange={props.onChange}
                />
            </StyledDatePickerWrapper>
            
        </StyledWrapper>
        
    );
  }
  
  export default DatePickerInput;
  