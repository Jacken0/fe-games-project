import { Link } from "react-router-dom";

export default function Categories({ categories }) {
  return (
    <main className="Categories">
      <h2>Categories</h2>
      <ul>
        <li key="all categories">
          <Link to={"/reviews"}>
            <h3>All Categories</h3>
          </Link>
        </li>
        {categories.map((catData) => {
          return (
            <li key={catData.slug}>
              <Link to={`/reviews?category=${catData.slug}`}>
                <h3>{catData.slug}</h3>
                <p>{catData.description}</p>
              </Link>
            </li>
          );
        })}
      </ul>
    </main>
  );
}
