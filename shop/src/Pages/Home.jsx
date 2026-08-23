// yaha axios use kiya ha data ko use kar ne se pehele but axios use kar ne  ke liye bhi 'useState' use karna hoga kyoki data ko store karne kiye
// const [products, setProducts] = useState([]);

import React, { useEffect, useState } from "react";
import axios from "axios";

const Home = () => {
  const [products, setProducts] = useState([]);

  const getProducts = async () => {
    const response = await axios("https://dummyjson.com/products");
    setProducts(response.data.products);
    console.log(response.data);
  };
  useEffect(() => {
    getProducts();
  }, []);

  return (
    <div>
      {products.map((item, index) => {
        return (
          <div className="bg-gray-300 w-[20vw] rounded-md overflow-hidden shadow-md">
            <img
              className="rounded-md hover:scale-105 transition-all"
              src={item.thumbnail}
              alt="img"/>

            <div className="p-2">
              <h2 className="font-bold uppercase">{item.title}</h2>

              <p className="text-sm text-gray-600">{item.description}</p>

              <div className="flex justify-between my-1 items-center justify-between">
                <span className="font-bold text-gray-700">
                  price:{item.price} ₹
                </span>
                <button className="px-3 py-1  bg-gray-500 text-white font-bold rounded-md hover:bg-black text-white border-2 cursor-pointer">
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
