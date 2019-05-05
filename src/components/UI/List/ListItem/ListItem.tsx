import React, {ReactNode} from 'react';
import {StyledListItem} from './Styled'

interface MyProps {
  children: ReactNode;
  onClick?: any
}

const ListItem: React.SFC<MyProps> = (props) => {
    return (
      <StyledListItem onClick={props.onClick}>
        {props.children}
      </StyledListItem>
    );
  }
  
  export default ListItem;
  