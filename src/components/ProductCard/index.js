import React from "react";

const ProductCard = () => {
  return (
    <div className=" flex grad  min-h-screen w-full justify-center items-center">
      <div className="w-[250px] rounded hover:shadow-2xl shadow-black  bg-slate-400 flex flex-col items-center p-2  ">
        <h1 className="font-semibold mb-3 text-center">Wireless Headphones</h1>
        <div
          className="bg-cover h-[200px] w-full hover:scale-105 transion duration-500 ease-in-out"
          style={{
            backgroundImage: `url(https://img.drz.lazcdn.com/static/pk/p/4f430aa1bc9c1e9b17f3dded84593be6.jpg_720x720q80.jpg_.webp)`,
          }}
        ></div>
        <p className="p-1 font-normal ">
          Experience the best sound quality with our wireless headphones
        </p>
        <div className="flex w-full items-center justify-between p-1">
          <h2 className="font-bold">Price : $99.99</h2>
          <button className="hover:text-white hover:bg-green-600 duration-300 transition hover:scale-105 bg-green-500 p-2 rounded-lg">
            Buy Now
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
