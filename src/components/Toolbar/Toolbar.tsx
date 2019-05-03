import React, {ReactNode} from 'react';
import styled from 'styled-components'

type MyProps = {
  children: ReactNode
}

const Toolbar: React.SFC<MyProps> = (props) => {
    return (
      <div className="toolbar">
         {props.children}
      </div>
    );
  }
  
  export default Toolbar;
  