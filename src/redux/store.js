import { applyMiddleware, createStore } from "redux";
// import FavoriteReducer from "./Reducers/FavoriteReducer";
// import { thunk } from "redux-thunk";
import { thunk } from "redux-thunk";
import CombineReducers from "./Reducers/CombineReducers";

const myStore = createStore(CombineReducers, applyMiddleware(thunk));

export default myStore;
