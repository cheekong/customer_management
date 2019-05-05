import React, { ReactNode } from 'react';
import {StyledList} from './Styled';

interface MyProps {
  children: ReactNode;
}

const List: React.SFC<MyProps> = (props) => {
    return (
      <StyledList>
         {props.children}
      </StyledList>
    );
  }
  
  export default List;
  