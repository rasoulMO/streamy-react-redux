//in this reducer we impoeted types and we passet as a veribal to the reducer!!

import { SIGN_IN, SIGN_OUT } from '../actions/types';
//here we provide an INTIAL_STATE to get the default value when first component render on the screen!! 
const INTIAL_STATE = {
  isSignedIn: null,
  userId: null
};

export default (state = INTIAL_STATE, action) => {
  switch (action.type) {
    case SIGN_IN:
      return { ...state, isSignedIn: true, userId: action.payload };
    case SIGN_OUT:
      return { ...state, isSignedIn: false, userId: null };
    default:
      return state;
  }
};
