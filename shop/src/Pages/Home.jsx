// yaha axios use kiya ha data ko use kar ne se pehele but axios use kar ne  ke liye bhi 'useState' use karna hoga kyoki data ko store karne kiye
// const [products, setProducts] = useState([]);

import React, { useEffect, useState } from "react";
import axios from "axios";

const Home = ({ products, setProducts }) => {
const [loading, setLoading] = useState(false);

  const getProducts = async () => {
    setLoading(true);

    const response = await axios("https://dummyjson.com/products");

    setProducts(response.data.products);

    console.log(response.data);

    setLoading(false);
  };

  useEffect(() => {
    getProducts();
  }, []);

  if (loading) {
    return (
      <div className="flex justify-center items-center h-[50vh]">
        <div className="w-12 h-12 border-4 border-gray-300 border-t-purple-500 rounded-full animate-spin"></div>
      </div>
    );
  }

  return (
    <div className="grid grid-cols-1 lg:grid-cols-3 gap-10 justify-center items-center">
      {products.map((item, index) => {
        return (
          <div
            className="w-[70vw] mx-auto bg-gray-300 lg:w-[20vw] rounded-md overflow-hidden shadow-md"
            key={index}
          >
            <img
              className="rounded-md hover:scale-105 transition-all"
              src={item.thumbnail}
              alt="img"
            />

            <div className="p-2">
              <h2 className="font-bold uppercase">{item.title}</h2>

              <p className="text-sm text-gray-600">{item.description}</p>

              <div className="flex justify-between my-1 items-center">
                <span className="font-bold text-gray-700">
                  price: {item.price} ₹
                </span>

                <button className="px-3 py-1 bg-gray-500 text-white font-bold rounded-md hover:bg-black border-2 cursor-pointer">
                  buy
                </button>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default Home;