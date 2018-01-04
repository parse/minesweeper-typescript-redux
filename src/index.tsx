import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import configureStore from './redux/store';

const store = configureStore();

import App from './containers/App';
import './index.css';
import 'font-awesome/css/font-awesome.css';

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root') as HTMLElement
);
