export const addToFavorites = (payload) => {
  return {
    type: "ADD_TO_FAV",
    payload,
  };
};
export const removefromFavorites = (payload) => {
  return {
    type: "REMOVE_FROM_FAV",
    payload,
  };
};
