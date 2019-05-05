import React, {ReactNode} from 'react';

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
  