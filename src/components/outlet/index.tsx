import React from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Cart from '../../containers/cart';

const Outlet: React.FC = () => {
  return (
    <div className="outlet">
      <Router>
        <Switch>
          <Route exact path="/" name="landing" component={Cart} />
        </Switch>
      </Router>
    </div>
  );
}

export default Outlet;
