import React from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { connect } from "react-redux";
import { landing } from '../../components/landing';
import { thunkLoadProducts } from '../../thunks/index';

interface AppProps {
  thunkLoadProducts: any;
}

class Routing extends React.Component<AppProps> {

  componentDidMount() {
    this.props.thunkLoadProducts();
  }

  render() {
    return (
      <Router>
        <Switch>
          <Route exact path="/" name="landing" component={landing} />
        </Switch>
      </Router>
    );
  }
}

export default connect(
  null,
  { thunkLoadProducts }
)(Routing);
