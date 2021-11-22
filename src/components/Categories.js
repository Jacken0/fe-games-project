import { useEffect, useState } from "react";
import { getCategories } from "../Utils/api";

export default function Categories() {
  const [categories, setCategories] = useState([]);
  useEffect(() => {
    getCategories().then((categoriesFromServer) => {
      setCategories(categoriesFromServer);
    });
  }, []);

  return (
    <main className="Categories">
      <h2>Categories</h2>
      <ul>
        {categories.map((catData) => {
          return (
            <li key={catData.slug}>
              <h3>{catData.slug}</h3>
              <p>{catData.description}</p>
            </li>
          );
        })}
      </ul>
    </main>
  );
}
