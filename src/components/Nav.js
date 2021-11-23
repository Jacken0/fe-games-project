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
    </nav>
  );
}
