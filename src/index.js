import React from "react";
import { render } from "react-dom";
import { Provider } from "react-redux";
import App from "../src/components/App";
import logger from "redux-logger";
import reducer from "../src/reducers/mall";
import { createStore, applyMiddleware } from "redux";
import '../styles/index.css'

const store = createStore(reducer, applyMiddleware(logger));
const rootElement = document.getElementById("app");
render(
  <Provider store={store}>
    <App />
  </Provider>,
  rootElement
);
