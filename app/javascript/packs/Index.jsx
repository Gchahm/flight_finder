import React from "react";
import { render } from "react-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import App from "../react/App";
import {BrowserRouter as Router} from 'react-router-dom'
import configureStore from "../react/redux/configureStore";
import {Provider} from 'react-redux';

const store = configureStore();

document.addEventListener("DOMContentLoaded", () => {
  render(
      <Provider store={store}>
        <Router>
          <App/>
        </Router>
      </Provider>,
      document.getElementById('root')
  );
});
