//import { formValues } from 'redux-form';
import streams from '../apis/streams';

import history from '../history';
//here we mport all of our types for types.js!!
import {
  SIGN_IN,
  SIGN_OUT,
  CREATE_STREAM,
  FETCH_STREAMS,
  FETCH_STREAM,
  DELETE_STREAM,
  EDIT_STREAM
} from './types';

export const signIn = userId => {
  return {
    type: SIGN_IN,
    payload: userId
  };
};

export const signOut = () => {
  return {
    type: SIGN_OUT
  };
};

//here we use asyncarst request with redux-thunk, so we have return an arrow function!!
//export const createStream = (formValues) => {
 // return (dispatch) => {

 // };
//};
//here is a shorter syntax!!
export const createStream = (formValues) => async (dispatch, getState) => {
  const { userId } = getState().auth;
  //here is who we make a requerst with axios!!
  const response = await streams.post('/streams',{ ...formValues, userId});


  dispatch({ type: CREATE_STREAM, payload: response.data });


  history.push('/');
  
};


export const fetchStreams = () => async dispatch => {
  const response = await streams.get('/streams');

  dispatch({ type: FETCH_STREAMS, payload: response.data });
};

export const fetchStream = (id) => async dispatch => {
  const response = await streams.get(`/streams/${id}`);

  dispatch({ type: FETCH_STREAM, payload: response.data });
};

export const editStream = (id, formValues) => async dispatch => {
  const response = await streams.patch(`/streams/${id}`, formValues);
  
  dispatch({ type: EDIT_STREAM, payload: response.data });
  history.push('/');
};

export const deleteStream = (id) => async dispatch => {
  await streams.delete(`/streams/${id}`); 

  dispatch({ type: DELETE_STREAM, payload: id });
  history.push('/')
}