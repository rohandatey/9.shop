import React, { useState } from "react";
import Navbar from "./Components/Navbar";
import Home from "./Pages/Home";
import Card from "./Pages/Card";
import { Routes, Route } from "react-router-dom";

const App = () => {
  const [products, setProducts] = useState([]);

  return (
    <>
      <Navbar setProducts={setProducts} />

      <Routes>
        <Route
          path="/"
          element={<Home products={products} setProducts={setProducts} />}
        />
        <Route path="/card" element={<Card />} />
      </Routes>
    </>
  );
};

export default App;
