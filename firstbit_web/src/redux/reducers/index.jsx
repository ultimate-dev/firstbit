import { combineReducers } from "redux";
// Reducers
import testReducer from "./test.reducer";
import loadingReducer from "./loading.reducer";
import userReducer from "./user.reducer";

export default combineReducers({
  testReducer,
  loadingReducer,
  userReducer,
});
