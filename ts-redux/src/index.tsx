import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { store } from './state';

import App from './components/App';
ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.querySelector('#root')
);
