import React from 'react';
import { Provider } from "react-redux";
import Routing from './containers/routing';
import configureStore from "./store";
import './App.css';

const store = configureStore();
const App: React.FC = () => {
  return (
    <Provider store={store}>
      <Routing />
    </Provider>
  );
}

export default App;
