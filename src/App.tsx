import React from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { landing } from './components/landing';


import './App.css';

const App: React.FC = () => {
  return (
    <Router>
      <Switch>
        <Route exact path="/" name="Login" component={landing} />
      </Switch>
    </Router>
  );
}

export default App;
