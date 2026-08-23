import React, { useState } from "react";
import Navbar from "./Components/Navbar";
import Home from "./Pages/Home";
import Card from "./Pages/Card";
import { Routes, Route } from "react-router-dom";

const App = () => {
  const [products, setProducts] = useState([]);
  return (
    <div>
      <Navbar setProducts={setProducts} />
      <Home products={products} setProducts={setProducts} />
      <Card />
    </div>
  );
};

export default App;

// import React from "react";
// import Home from "./Pages/Home";
// import Card from "./Pages/Card";
// import Navbar from "./Components/Navbar";
// import { Routes, Route } from "react-router-dom";

// const App = () => {
//   return (
//     <>
//       <Navbar />
//       <Routes>
//         <Route path="/" element={<Home />} />
//         <Route path="/card" element={<Card />} />
//       </Routes>
//     </>
//   );
// };

// export default App;
