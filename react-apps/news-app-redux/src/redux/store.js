import {
  legacy_createStore as createStore,
  applyMiddleware,
  compose,
  combineReducers,
} from "redux";
import { thunk } from "redux-thunk";
import newsReducer from "./newsReducer";

// const store = createStore(
//   newsReducer,
//   applyMiddleware(thunk),
//   window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
// );
// const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const rootReducer = combineReducers({
  news: newsReducer,
});
const store = createStore(
  //   newsReducer,
  rootReducer,
  composeEnhancers(applyMiddleware(thunk))
);

// In Redux:
// A thunk is a function returned by an action creator, which executes async logic.

export default store;
