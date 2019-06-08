import React from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { connect } from "react-redux";
import { landing } from '../../components/landing';
import { thunkLoadProducts } from '../../thunks/index';

interface AppProps {
  loadProducts: Function;
}

class Routing extends React.Component<AppProps> {

  componentDidMount() {
    // would want to do this after store creation but maybe not using reacts lifecycle hooks?
    this.props.loadProducts();
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

const mapDispatchToProps = ({
  loadProducts: thunkLoadProducts,
});

export default connect(
  null,
  mapDispatchToProps,
)(Routing);
