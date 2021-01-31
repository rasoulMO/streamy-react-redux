//here we import lodash some are JS libary!!
import _ from 'lodash';

//here we import an enstens from our axios api!!
import jsonPlaceholder from '../apis/jsonPlaceholder';
//here as always we have to use async & await syntax!! and we use that becuse of the rouls of the middeware(THUNK);
//export const fetchPosts = () => {
   // return async (dispatch, getState) {
    //    const response = await jsonPlaceholder.get('/posts');

     //   dispatch({type: 'FETCH_POSTS', payload: response})
   // }
//}

//this action going to do the request one time insted of calling fetchPosts and fetchUser and in this way we can make just one request at the time!! and here we get use of "lodash" JS libary some minomaze the request we make if it's sime!! 
export const fetchPostsAndUsers = () => async(dispatch, getState) => {
  await dispatch(fetchPosts());


  const userIds = _.uniq(_.map(getState().posts, 'userId'));
  userIds.forEach(id => dispatch(fetchUser(id)));

  //optinal!!
  //_.chain(getState().posts)
  //_.map('userId')
  //.forEach(id => dispatch(fetchUser(id)));
  //.value();
}

  


//here is the ultimet syntax some we going to use with the middleware!! and in the sime time we have to always remamber that is still an action/action creater!!
export const fetchPosts = () => async dispatch => {
    const response = await jsonPlaceholder.get('/posts');

  dispatch({ type: 'FETCH_POSTS', payload: response.data });
};


export const fetchUser = (id) => async dispatch => {
  const response = await jsonPlaceholder.get(`/users/${id}`);

dispatch({ type: 'FETCH_USER', payload: response.data });
};
