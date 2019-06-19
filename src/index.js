import React from "react";
import { render } from "react-dom";
import { Provider } from "react-redux";
import App from "../src/components/App";
import logger from "redux-logger";
import reducer from "../src/reducers/mall";
import { createStore, applyMiddleware } from "redux";
import {getAllItems} from '../src/actions/mall'
import thunk from 'redux-thunk'
import '../styles/index.css'
import 'antd/dist/antd.css'

let middleware = [thunk, logger]
const store = createStore(reducer, applyMiddleware(...middleware));
store.dispatch(getAllItems())
const rootElement = document.getElementById("app");



render(
  <Provider store={store}>
    <App />
  </Provider>,
  rootElement
);
