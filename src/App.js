import "./App.css";
import Title from "./components/Title";
import Nav from "./components/Nav";
import Reviews from "./components/Reviews";
import Categories from "./components/Categories";
import { Routes, Route } from "react-router-dom";
import { useState } from "react";

function App() {
  const [category, setCategory] = useState("");
  return (
    <div className="App">
      <Title />
      <Nav />
      <Routes>
        <Route path="/" element={<Reviews />} />
        <Route path="/reviews" element={<Reviews />} />
        <Route path="/categories" element={<Categories />} />
      </Routes>
    </div>
  );
}

export default App;
