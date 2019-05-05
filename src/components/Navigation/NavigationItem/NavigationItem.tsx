import React, {ReactNode} from 'react';
import { NavLink } from 'react-router-dom';
import {StyledNavigationItem} from './Styled';

interface MyProps {
  to: string,
  children: ReactNode
}

const NavigationItem: React.SFC<MyProps> = (props) => {

    const StyledNavLink = StyledNavigationItem(NavLink);
    return (
      
        <StyledNavLink to={props.to}>
          {props.children}
        </StyledNavLink>

    );
  }
  
  export default NavigationItem;
  