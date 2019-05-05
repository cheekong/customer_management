import React from 'react';
import {StyledSpan, StyledLabel, StyledParagraph} from './Styled'

interface MyProps {
  label: string;
  pararapgh: string
}

const CustomerList: React.SFC<MyProps> = (props) => {
    return (
      <StyledSpan>
        <StyledLabel>
          {props.label}
        </StyledLabel>
        <StyledParagraph>
          {props.pararapgh}
        </StyledParagraph>
      </StyledSpan>
    );
  }
  
  export default CustomerList;
  