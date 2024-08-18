import { Link } from "react-router-dom";
import "./movie.css";
import { useSelector, useDispatch } from "react-redux";
import {
  addToFavorites,
  removefromFavorites,
} from "../../redux/Actions/FavoriteAction";
function Movie({ movie }) {
  const fav = useSelector((state) => state.favorites.favorites);
  const dispatch = useDispatch();

  const isFav = fav.find((ele) => ele.id === movie.id) ? true : false;
  const addFav = (movie) => {
    dispatch(addToFavorites(movie));
  };
  const removeFav = (movie) => {
    dispatch(removefromFavorites(movie));
  };

  // console.log(fav);
  return (
    <div className="col-lg-2 col-md-3 col-sm-4" key={movie.id}>
      <div className="movie-box">
        <Link className="link-movie" to={`/movies/${movie.id}`}>
          <img
            src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
            alt=""
          />
        </Link>
        <div className="p-3">
          <h3>{movie.title.slice(0, 25)}</h3>
          <p className="m-0">{movie.vote_average}⭐</p>
          {isFav ? (
            <button className="fav-btn" onClick={() => removeFav(movie)}>
              <i className="fa-solid fa-heart"></i>
            </button>
          ) : (
            <button className="fav-btn" onClick={() => addFav(movie)}>
              <i className="fa-regular fa-heart"></i>
            </button>
          )}
        </div>
      </div>
    </div>
  );
}

export default Movie;
// {movie.title.slice(0, 25)}
