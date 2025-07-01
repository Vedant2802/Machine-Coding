import { createStore } from "redux";

// actions
const INCREMENT = "INCREMENT";
const DECREMENT = "DECREMENT";

// action creator functions
const incrementCounter = () => {
  return { type: INCREMENT };
};

const decrementCounter = () => {
  return { type: DECREMENT };
};

// initial state (move this above reducer!)
const initialState = {
  count: 0,
};

// reducer
const counterReducer = (state = initialState, action) => {
  //   console.log(`reducer Fn called with ${action.type}`);
  console.log(action);
  switch (action.type) {
    case INCREMENT:
      return { count: state.count + 1 };
    case DECREMENT:
      return { count: state.count - 1 };
    default:
      return state;
  }
};

// create store
const store = createStore(counterReducer);

// subscribe
const unsubscribeFn = store.subscribe(() => console.log(store.getState()));

// dispatch actions
store.dispatch(incrementCounter()); // 1
store.dispatch(incrementCounter()); // 2
store.dispatch(incrementCounter()); // 3
store.dispatch(decrementCounter()); // 2

// unsubscribe
unsubscribeFn();
