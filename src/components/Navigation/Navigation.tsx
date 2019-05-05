import React, {ReactNode} from 'react';
import styled from 'styled-components'

type MyProps = {
  children: ReactNode
}

const Navigation: React.SFC<MyProps> = (props) => {
    return (
      <nav>
         {props.children}
      </nav>
    );
  }
  
  export default Navigation;
  