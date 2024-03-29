import React from 'react';
import ReactDOM from 'react-dom';
import { createStore, applyMiddleware, compose} from 'redux';
import { Provider } from 'react-redux';
import reduxThunk from 'redux-thunk';


import App from './components/App';
import reducers from './reducers';
//this line of code for redux extension!!
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(
  reducers,
  composeEnhancers(applyMiddleware(reduxThunk))
);

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.querySelector('#root')
);




//import React from 'react';
//import ReactDOM from 'react-dom';
//the Provider is high order component some have to be the component some rapp everything!! where our store(data) live
//import { Provider } from 'react-redux';
//this is the function some are biuld inn with redux!!
//import { createStore, applyMiddleware } from 'redux';
//when we get use of a middleware we have to import thunk and applyMiddleware!!
//import thunk from 'redux-thunk';


//import App from './components/App';

//ReactDOM.render(<App />, document.getElementById('root'));


