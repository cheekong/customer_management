import React, {ReactNode} from 'react';

interface MyProps {
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
  