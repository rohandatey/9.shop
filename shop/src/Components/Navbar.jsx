import React from "react";

const Navbar = () => {
  return (
    <nav className="flex items-center justify-evenly shadow-md py-3 mb-5">
      <h3 className="text-2xl font-extrabold">Shop</h3>
      <div>
        <input
          className="border-2 outline-none px-3 py-1 rounded-md border-gray-500 w-[40vw] hover:border-purple-400 mt-4"
          type="search"
          placeholder="search here..."/>

        <button className="px-3 py-1 bg-gray-500 text-white rounded-md mx-2 hover:bg-purple-400">
          search
        </button>
      </div>
      <ul className="flex gap-3 text-xl font-bold">
        <li>Home</li>
        <li>Cart</li>
      </ul>
    </nav>
  );
};

export default Navbar;
