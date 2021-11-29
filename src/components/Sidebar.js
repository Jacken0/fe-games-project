import { Link } from "react-router-dom";

export default function Sidebar({ categories, setCategories }) {
  return (
    <div className="Sidebar">
      <ul>
        <li key="all categories">
          <Link to={"/reviews"}>
            <h4>All Categories</h4>
          </Link>
        </li>

        {categories.categories.map((catData) => {
          return (
            <li key={catData.slug}>
              <Link to={`/reviews?category=${catData.slug}`}>
                <h4>{catData.slug}</h4>
              </Link>
            </li>
          );
        })}
      </ul>
    </div>
  );
}
