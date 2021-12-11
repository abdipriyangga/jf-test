import React from 'react';
import { render } from 'react-dom';
import './index.css';
import { Provider } from "react-redux";
import reduxConfig from "./redux/store";
import { PersistGate } from "redux-persist/integration/react";
import Router from './pages/Router';
const redux = reduxConfig();

const rootElement = document.getElementById("root");
render(
  <Provider store={redux.store}>
    <PersistGate persistor={redux.persistor}>
      <Router />
    </PersistGate>
    {/* <Router /> */}
  </Provider>,
  rootElement
);