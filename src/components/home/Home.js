import { useContext, useEffect, useState } from "react";
import "./home.css";
import axios from "axios";
import Movie from "../movie/Movie";
import Pagination from "../pagination/Pagination";
import { getMovies } from "../../redux/Actions/Movies";
import { useDispatch, useSelector } from "react-redux";
import { LanguageContext } from "../../Context/LanguageContext";

function Home() {
  const [page, setPage] = useState(2);

  const langSetting = useContext(LanguageContext);
  // const [movies, setMovies] = useState([]);
  // const [movieName, setMovieName] = useState("");
  // let API;
  // arabic API https://api.themoviedb.org/3/tv/popular?api_key=592d5558fe91383c9979c4a7c357bfee&language=en&page=1
  // API = `https://api.themoviedb.org/3/movie/popular?api_key=29cf44b93ca83bf48d9356395476f7ad&page=${page}`;

  // if (movieName.length > 0) {
  //   API = `https://api.themoviedb.org/3/search/movie?api_key=29cf44b93ca83bf48d9356395476f7ad&query=${movieName}&page=${page}`;
  // } else {
  // }

  const dispatch = useDispatch();
  const movies = useSelector((state) => state.movies.movies);

  useEffect(() => {
    dispatch(getMovies());
  }, []);

  // useEffect(() => {
  //   axios
  //     .get(API)
  //     .then((res) => {
  //       setMovies(res.data.results);
  //     })
  //     .catch((err) => {
  //       console.log(err);
  //     });
  // }, [page /*movieName*/]);
  return (
    <div className="home">
      <h2 className="text-center mb-5">Language: {langSetting.lang}</h2>
      {/* <h1>{langSetting.lang}</h1>
      <button
        onClick={() =>
          langSetting.setLang(langSetting.lang === "EN" ? "AR" : "EN")
        }
      >
        LANG
      </button> */}
      {/* <input
        className="search-input"
        type="text"
        value={movieName}
        onChange={(e) => setMovieName(e.target.value)}
        placeholder="Serach by the name of movie"
      /> */}
      <div className="container">
        <div className="row g-3">
          {movies &&
            movies.map((movie) => <Movie key={movie.id} movie={movie} />)}
        </div>
      </div>
      <Pagination setPage={setPage} />
    </div>
  );
}

export default Home;
