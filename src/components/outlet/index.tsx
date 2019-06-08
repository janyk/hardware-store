import React from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import landing from '../landing';

const Outlet: React.FC = () => {
  return (
    <div className="outlet">
      <Router>
        <Switch>
          <Route exact path="/" name="landing" component={landing} />
        </Switch>
      </Router>
    </div>
  );
}

export default Outlet;
