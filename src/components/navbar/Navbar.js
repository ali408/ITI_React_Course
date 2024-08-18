import { NavLink } from "react-router-dom";
import "./navbar.css";
import { useSelector } from "react-redux";
function Navbar() {
  const fav = useSelector((state) => state.favorites);
  return (
    <div className="navbar">
      <div className="logo">Movies</div>
      <ul>
        <li>
          <NavLink to="/">Home</NavLink>
        </li>
        <li>
          <NavLink to="/favorites">favorites ( {fav.length}⭐)</NavLink>
        </li>
        <li>
          <NavLink to="/register">register</NavLink>
        </li>
        <li>
          <NavLink to="/login">login</NavLink>
        </li>
      </ul>
    </div>
  );
}

export default Navbar;
