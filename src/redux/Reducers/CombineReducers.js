import { combineReducers } from "redux";
import FavoriteReducer from "./FavoriteReducer";
import MoviesReducer from "./MoviesReducer";
import LanguageReducer from "./LanguageReducer";
export default combineReducers({
  favorites: FavoriteReducer,
  movies: MoviesReducer,
  language: LanguageReducer,
});
