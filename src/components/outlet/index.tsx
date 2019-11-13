import React from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import FeedBackForm from '../feedback';

const Outlet: React.FC = () => {
  return (
    <div className="outlet">
      <Router>
        <Switch>
          <Route exact path="/" name="landing" component={FeedBackForm} />
        </Switch>
      </Router>
    </div>
  );
}

export default Outlet;
