import { createStore, applyMiddleware } from "redux";
// Combined Reducers
import combinedReducers from "./reducers";
// Create Store
let store = createStore(combinedReducers, applyMiddleware());

console.log(store.getState());

export default store;
