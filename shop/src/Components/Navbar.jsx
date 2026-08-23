import React, { useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

const Navbar = ({ setProducts }) => {
  const [search, setSearch] = useState("");

  const searchProduct = async () => {
    const response = await axios(
      `https://dummyjson.com/products/search?q=${search}`,
    );

    const data = response.data.products;
    setProducts(data);
  };

  return (
    <nav className="flex items-center justify-evenly shadow-md py-3 mb-5">
      <h3 className="text-2xl font-extrabold">Shop</h3>

      <div>
        <input
          className="border-2 outline-none px-3 py-1 rounded-md border-gray-500 w-[40vw] hover:border-purple-400 mt-4"
          type="search"
          placeholder="search here..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}/>

        <button
          onClick={searchProduct}
          className="px-3 py-1 bg-gray-500 text-white rounded-md mx-2 hover:bg-purple-400">
          search
        </button>
      </div>

      <ul className="flex gap-3 text-xl font-bold">
        <li><Link to="/">Home</Link></li>
        <li><Link to="/card">Cart</Link></li>
      </ul>
    </nav>
  );
};

export default Navbar;
