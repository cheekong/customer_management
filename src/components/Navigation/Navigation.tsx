import React, {ReactNode} from 'react';
import styled from 'styled-components'

type MyProps = {
  children: ReactNode
}

const Navigation: React.SFC<MyProps> = (props) => {
    return (
      <div className="App">
         {props.children}
      </div>
    );
  }
  
  export default Navigation;
  