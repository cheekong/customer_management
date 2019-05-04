import React from 'react';
import { Route, Switch, withRouter, Redirect, RouteComponentProps } from 'react-router-dom';

import Layout from './containers/Layout/Layout';
import Customer from './containers/Customer/Customer';
import NewCustomer from './containers/Customer/NewCustomer/NewCustomer';
import CustomerList from './containers/Customer/CustomerList/CustomerList';

type PathParamsType = {
  param1: string,
}

type PropsType = RouteComponentProps<PathParamsType> & {
  someString: string,
}

class App extends React.Component<PropsType> {
  render(){
    let routes = (
      <Switch>
        <Route path="/new" component={NewCustomer} />
        <Route path="/list" exact component={CustomerList} />
        <Route path="/customer" exact component={Customer} />
        <Route path="/" exact component={CustomerList} />
        <Redirect to="/" />
      </Switch>
    );

    return (
      <div className="App">
        <Layout>
          {routes}
        </Layout>
      </div>
    );
  }
}

export default withRouter(App);
