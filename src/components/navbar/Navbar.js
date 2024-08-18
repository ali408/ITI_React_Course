import { NavLink } from "react-router-dom";
import "./navbar.css";
import { useSelector } from "react-redux";
import { useContext } from "react";
import { LanguageContext } from "../../Context/LanguageContext";
function Navbar() {
  const fav = useSelector((state) => state.favorites.favorites);
  const language = useContext(LanguageContext);
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
        <select
          value={language.lang}
          onChange={(e) => language.setLang(e.target.value)}
        >
          <option value="EN">EN</option>
          <option value="AR">AR</option>
        </select>
      </ul>
    </div>
  );
}

export default Navbar;
