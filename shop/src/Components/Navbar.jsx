import React, { useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

const Navbar = ({ setProducts }) => {
  const [search, setSearch] = useState("");

  const searchProduct = async () => {
    const responce = await axios.get(`https://dummyjson.com/products/search?q=${search}`,);
    const data = responce.data;
    console.log(data);
    setProducts(data.products);
  };

  // const goHome = async () => {
  //   setSearch(""); // search box bhi clear ho jaye
  //   const responce = await axios.get("https://dummyjson.com/products");
  //   setProducts(responce.data.products);
  // };
  return (
    <nav className="flex justify-evenly items-center shadow-md py-4">
      <h3 className="font-extrabold text-2xl">E-COMM</h3>
      <div>
        <input
          className="px-3 py-2 rounded-md outline-none border w-[40vw] hover:border-purple-500"
          type="search"
          placeholder="search..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />

        <button
          onClick={searchProduct}
          className="px-3 py-1 bg-gray-500 text-white rounded-md ml-2 hover:bg-purple-300"
        >
          Search
        </button>
      </div>

      <ul className="flex gap-5 text-xl font-bold">
        <Link to={"/"}>Home</Link>

        {/* <Link to={"/"} onClick={goHome}>Home</Link> */}
        <Link to={"/card"}>Cart</Link>
      </ul>
    </nav>
  );
};

export default Navbar;
