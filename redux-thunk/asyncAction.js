import { createStore, applyMiddleware } from "redux";
import { thunk } from "redux-thunk";
import axios from "axios";

// Initial State
const initialState = {
  loading: false,
  posts: [],
  error: "",
};

// Action Types
const FETCH_POSTS = "FETCH_POSTS";
const FETCH_POSTS_SUCCESS = "FETCH_POSTS_SUCCESS";
const FETCH_POSTS_FAILURE = "FETCH_POSTS_FAILURE";

// Action Creators
const fetchPostRequest = () => ({ type: FETCH_POSTS });
const fetchPostRequestSuccess = (data) => ({
  type: FETCH_POSTS_SUCCESS,
  payload: data,
});
const fetchPostRequestFailure = (error) => ({
  type: FETCH_POSTS_FAILURE,
  payload: error,
});

// Async Action (Thunk)
const fetchPosts = () => {
  return function (dispatch) {
    dispatch(fetchPostRequest());
    axios
      .get("https://jsonplaceholder.typicode.com/posts")
      .then((response) => {
        // console.log(response);
        const posts = response.data.map((post) => post.title);
        dispatch(fetchPostRequestSuccess(posts));
      })
      .catch((error) => {
        dispatch(fetchPostRequestFailure(error.message));
      });
  };
};

// Reducer
const reducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_POSTS:
      return { ...state, loading: true };
    case FETCH_POSTS_SUCCESS:
      return { ...state, loading: false, posts: action.payload, error: "" };
    case FETCH_POSTS_FAILURE:
      return { ...state, loading: false, posts: [], error: action.payload };
    default:
      return state;
  }
};

// Store
const store = createStore(reducer, applyMiddleware(thunk));

// Subscribe & Dispatch
store.subscribe(() => console.log(store.getState()));
store.dispatch(fetchPosts());
