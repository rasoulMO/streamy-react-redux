import _ from 'lodash';
import {
  FETCH_STREAM,
  FETCH_STREAMS,
  CREATE_STREAM,
  EDIT_STREAM,
  DELETE_STREAM
} from '../actions/types';

//here is our reducer for each action, just the delete & fetch_STREAMS is differnt!! and here we set STATE default value to an object insted of av array beccuse accessing and modifing data is more easy in object then array!!
export default (state = {}, action) => {
  switch (action.type) {
      case FETCH_STREAMS:
          //in this case we using lodash libary and we calling _.mapKeys function to turn the array to an object and take the id of each array and assign it to that new object!!
      return { ...state, ..._.mapKeys(action.payload, 'id') };
    case FETCH_STREAM:
      return { ...state, [action.payload.id]: action.payload };
    case CREATE_STREAM:
      return { ...state, [action.payload.id]: action.payload };
    case EDIT_STREAM:
      return { ...state, [action.payload.id]: action.payload };
      case DELETE_STREAM:
          //in this case we don't need to assign payload.id,, becuse payload is the id it self!!
      return _.omit(state, action.payload);
    default:
      return state;
  }
};
