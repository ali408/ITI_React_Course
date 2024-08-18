import { NavLink } from "react-router-dom";
import "./navbar.css";
function Navbar() {
  return (
    <div className="navbar">
      <div className="logo">Movies</div>
      <ul>
        <li>
          <NavLink to="/">Home</NavLink>
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
