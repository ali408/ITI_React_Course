import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import "./single-movie.css";
import { useSelector, useDispatch } from "react-redux";
import {
  addToFavorites,
  removefromFavorites,
} from "../../redux/Actions/FavoriteAction";

function SingleMovie() {
  const { id } = useParams();
  const [movie, setMovie] = useState({});
  const [genres, setGenres] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  const fav = useSelector((state) => state.favorites.favorites);
  const dispatch = useDispatch();

  const isFav = fav.find((ele) => ele.id === movie.id) ? true : false;
  const addFav = (movie) => {
    dispatch(addToFavorites(movie));
  };
  const removeFav = (movie) => {
    dispatch(removefromFavorites(movie));
  };

  useEffect(() => {
    axios
      .get(
        `https://api.themoviedb.org/3/movie/${id}?api_key=29cf44b93ca83bf48d9356395476f7ad`
      )
      .then((res) => {
        setIsLoading(false);
        setMovie(res.data);
        console.log(res.data);
        setGenres(res.data.genres);
      })
      .catch((err) => console.log(err));
  }, [id]);
  return (
    <div className="single-movie">
      <div className="container">
        {isLoading ? (
          <div className="text-center p-5">
            <span className="loader"></span>
          </div>
        ) : (
          <div className="single">
            <div className="image-box">
              <img
                src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
                alt=""
              />
            </div>

            <div className="info">
              <h3>{movie.title}</h3>
              <p>{movie.overview}</p>
              <p>{movie.vote_average}⭐</p>
              <div className="genres mb-3">
                {genres.map((ele) => (
                  <span className="tag" key={ele.id}>
                    {ele.name}
                  </span>
                ))}
              </div>
              <p>Release Date: {movie.release_date}</p>
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
        )}
      </div>
    </div>
  );
}

export default SingleMovie;
