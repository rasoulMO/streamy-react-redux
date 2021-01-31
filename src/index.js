import React from 'react';
import ReactDOM from 'react-dom';
//the Provider is high order component some have to be the component some rapp everything!! where our store(data) live
import { Provider } from 'react-redux';
//this is the function some are biuld inn with redux!!
import { createStore, applyMiddleware } from 'redux';
//when we get use of a middleware we have to import thunk and applyMiddleware!!
import thunk from 'redux-thunk';


import App from './components/App';
import reducers from './reducers';

//here we just distruchar store propaty!!
const store = createStore(reducers, applyMiddleware(thunk));

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);

