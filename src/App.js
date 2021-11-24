import "./App.css";
import Title from "./components/Title";
import Nav from "./components/Nav";
import Reviews from "./components/Reviews";
import Categories from "./components/Categories";
import Login from "./components/Login";
import { Routes, Route } from "react-router-dom";
import { useState, useEffect } from "react";
import SingleReview from "./components/SingleReview";
import { getCategories } from "./Utils/api";

function App() {
  const [categories, setCategories] = useState([]);
  const [user, setUser] = useState("");
  useEffect(() => {
    getCategories().then((categoriesFromServer) => {
      setCategories(categoriesFromServer);
    });
  }, []);
  return (
    <div className="App">
      <Title />
      <Nav />
      <Routes>
        <Route path="/" element={<Reviews categories={categories} />} />
        <Route
          path="/reviews"
          element={
            <Reviews categories={categories} setCategories={setCategories} />
          }
        ></Route>
        <Route
          path="/categories"
          element={
            <Categories categories={categories} setCategories={setCategories} />
          }
        />
        <Route path="/reviews/:review_id" element={<SingleReview />} />
        <Route
          path="/login"
          element={<Login user={user} setUser={setUser} />}
        />
      </Routes>
    </div>
  );
}

export default App;
