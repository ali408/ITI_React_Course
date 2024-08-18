const INITIAL_STATE = {
  favorites: [],
};

export default function FavoriteReducer(state = INITIAL_STATE, action) {
  switch (action.type) {
    case "ADD_TO_FAV":
      return {
        ...state,
        favorites: [action.payload, ...state.favorites],
      };
    case "REMOVE_FROM_FAV":
      return {
        ...state,
        favorites: state.favorites.filter(
          (ele) => ele.id !== action.payload.id
        ),
      };
    default:
      return state;
  }
}
