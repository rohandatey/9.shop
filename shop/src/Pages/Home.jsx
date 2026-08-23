// yaha axios use kiya ha data ko use kar ne se pehele but axios use kar ne  ke liye bhi 'useState' use karna hoga kyoki data ko store karne kiye  


// const [products, setProducts] = useState([]);

import React, { useEffect, useState } from "react";
import axios from "axios";

const Home = ({ products, setProducts }) => {
  const getProduct = async () => {
    const responce = await axios.get("https://dummyjson.com/products");
    console.log(responce.data);
    setProducts(responce.data.products);
  };

  useEffect(() => {
    getProduct();
  }, []);

  return (
    <div className="lg:w-[70vw] mx-auto grid grid-cols-1 lg:grid-cols-3 gap-10 justify-center items-center mt-10">
      {products.map((item, index) => {
        return (
          <div
            key={item.id}
            className="bg-gray-200 w-[80vw] lg:w-[20vw] rounded-md overflow-hidden shadow-md mx-auto"
          >
            <img
              className="rounded-md hover:scale-105 transition-all"
              src={item.thumbnail}
              alt="img"
            />
            <div className="p-2">
              <h2 className="font-bold">{item.title}</h2>
              <p className="font-sm">{item.description}</p>
              <div className="flex justify-between">
                <span className=" font-bold text-gray-400">
                  price:{item.price}$
                </span>

                <button className="px-3 py-1 border rounded-md hover:bg-gray-500 bg-black text-white">
                  Buy
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
