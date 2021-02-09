import { combineReducers } from 'redux';
//here we import reducer for redux-form, and we gived a name as formReducer!!
import {reducer as formReducer } from 'redux-form'
import authReducer from './authReducer';
import streamReducer from './streamReducer'

export default combineReducers({
  auth: authReducer,
  form: formReducer,
  streams: streamReducer
});
