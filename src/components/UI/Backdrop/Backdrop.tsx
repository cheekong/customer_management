import React, { ReactNode } from 'react';
import { StyledBackdrop } from './Styled';

interface MyProps {
  children: ReactNode
}

const Backdrop: React.SFC<MyProps>  = (props) => {
    return (
      <StyledBackdrop>
         {props.children}
      </StyledBackdrop>
    );
  }
  
  export default Backdrop;
  