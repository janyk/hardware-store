import React from 'react';
import { Provider } from "react-redux";
import { PersistGate } from 'redux-persist/integration/react'
import DefaultLayout from './containers/default-layout';
import configureStore from "./store";
import './App.css';

const { store, persistor } = configureStore();

const App: React.FC = () => {
  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <DefaultLayout />
      </PersistGate>
    </Provider>
  );
}

export default App;
