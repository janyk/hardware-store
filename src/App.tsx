import React from 'react';
import { Provider } from "react-redux";
import { PersistGate } from 'redux-persist/integration/react'
import Routing from './containers/routing';
import configureStore from "./store";
import './App.css';

const { store, persistor } = configureStore();

const App: React.FC = () => {
  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <Routing />
      </PersistGate>
    </Provider>
  );
}

export default App;
