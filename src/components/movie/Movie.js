import { Link } from "react-router-dom";
import "./movie.css";
function Movie({ movie }) {
  return (
    <div className="col-2" key={movie.id}>
      <Link className="link-movie" to={`/movies/${movie.id}`}>
        <div className="movie-box">
          <img
            src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
            alt=""
          />
          <div className="p-3">
            <h3>{movie.title.slice(0, 25)}</h3>
            <p>{movie.vote_average}⭐</p>
          </div>
        </div>
      </Link>
    </div>
  );
}

export default Movie;
// {movie.title.slice(0, 25)}
