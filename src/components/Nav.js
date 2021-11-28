import { Link } from "react-router-dom";

export default function Nav() {
  return (
    <nav className="Nav">
      <Link to="/reviews" className="Nav__Link">
        Reviews
      </Link>
      <Link to="/categories" className="Nav__Link">
        Categories
      </Link>
      <Link to="/login" className="Nav__Link" id="Nav__Login">
        Login
      </Link>
      <Link to="/my_comments" className="Nav__Link" id="Nav__Comments">
        My Comments
      </Link>
    </nav>
  );
}
