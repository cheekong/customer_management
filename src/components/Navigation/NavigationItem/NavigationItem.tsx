import React, {ReactNode} from 'react';
import { NavLink } from 'react-router-dom';
import styled from 'styled-components'

type MyProps = {
  to: string,
  children: ReactNode
}

const NavigationItem: React.SFC<MyProps> = (props) => {
    return (
      <NavLink to={props.to}>
         {props.children}
      </NavLink>
    );
  }
  
  export default NavigationItem;
  