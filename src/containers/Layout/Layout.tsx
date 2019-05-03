import React, {ReactNode} from 'react';

import Toolbar from '../../components/Toolbar/Toolbar';
import Navigation from '../../components/Navigation/Navigation';
import NavigationItem from '../../components/Navigation/NavigationItem/NavigationItem';

type MyProps = {
    children: ReactNode
}

type MyState = {
    customers: object
}

class Layout extends React.Component<MyProps, MyState> {
    render(){
        return (
            <div>
               <Toolbar>
                   <Navigation>
                        <NavigationItem to='/new'>New</NavigationItem>
                        <NavigationItem to='/list'>List</NavigationItem>
                    </Navigation >
                </Toolbar>
                <main>
                    {this.props.children}
                </main>
            </div>
          );
    }
}
  
  export default Layout;
