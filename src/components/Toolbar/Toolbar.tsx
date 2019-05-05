import React, {ReactNode} from 'react';
import {StyledToolbar, StyledToolbarCenter} from './Styled'

type MyProps = {
  children: ReactNode
}

const Toolbar: React.SFC<MyProps> = (props) => {
    return (
      <StyledToolbar>
        <StyledToolbarCenter>
          {props.children}
        </StyledToolbarCenter>
      </StyledToolbar>
    );
  }
  
  export default Toolbar;
  