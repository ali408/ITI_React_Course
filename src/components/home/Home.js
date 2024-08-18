import { useEffect, useState } from "react";
import "./home.css";
import axios from "axios";
import Movie from "../movie/Movie";
import Pagination from "../pagination/Pagination";
function Home() {
  const [page, setPage] = useState(2);
  const [movies, setMovies] = useState([]);
  const [movieName, setMovieName] = useState("");
  let API;

  if (movieName.length > 0) {
    API = `https://api.themoviedb.org/3/search/movie?api_key=29cf44b93ca83bf48d9356395476f7ad&query=${movieName}&page=${page}`;
  } else {
    API = `https://api.themoviedb.org/3/movie/popular?api_key=29cf44b93ca83bf48d9356395476f7ad&query=${movieName}&page=${page}`;
  }

  useEffect(() => {
    axios
      .get(API)
      .then((res) => {
        setMovies(res.data.results);
      })
      .catch((err) => {
        console.log(err);
      });
  }, [page, movieName]);
  return (
    <div className="home">
      <input
        className="search-input"
        type="text"
        value={movieName}
        onChange={(e) => setMovieName(e.target.value)}
      />
      <div className="container">
        <div className="row g-3">
          {movies.map((movie) => (
            <Movie key={movie.id} movie={movie} />
          ))}
        </div>
      </div>
      <Pagination setPage={setPage} />
    </div>
  );
}

export default Home;
