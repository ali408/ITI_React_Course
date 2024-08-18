import axios from "axios";

export const getMovies = () => (dispatch) => {
  return axios
    .get(
      "https://api.themoviedb.org/3/movie/popular?api_key=29cf44b93ca83bf48d9356395476f7ad&page=1"
    ) // middleware
    .then((response) => {
      dispatch({
        type: "GET_MOVIES",
        payload: response.data.results,
      });
    })
    .catch((err) => console.log(err));
};
