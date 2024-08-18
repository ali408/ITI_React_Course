import { createStore } from "redux";
import FavoriteReducer from "./Reducers/FavoriteReducer";

const myStore = createStore(FavoriteReducer);

export default myStore;
