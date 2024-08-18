import { useSelector } from "react-redux";
import "./favorites.css";
import Movie from "../movie/Movie";
function Favorites() {
  const fav = useSelector((state) => state.favorites.favorites);
  // console.log(fav);

  return (
    <div className="favorites py-5">
      <div className="container text-center mb-5">
        <h3>Favorite Movies</h3>
      </div>
      <div className="container">
        <div className="row g-3">
          {fav.map((movie) => (
            <Movie key={movie.id} movie={movie} />
          ))}
        </div>
      </div>
    </div>
  );
}

export default Favorites;
