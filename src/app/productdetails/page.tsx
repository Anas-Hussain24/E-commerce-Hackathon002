"use client";

import { useState } from "react";
import Image from "next/image";
import { Star, Check, Minus, Plus } from "lucide-react";
import Ratings from "../components/ratings";
import Alsolike from "../components/alsolike";

const ProductDetail = () => {
  const [quantity, setQuantity] = useState(1);

  const incrementQuantity = () => {
    setQuantity((prev) => prev + 1);
  };

  const decrementQuantity = () => {
    if (quantity > 1) {
      setQuantity((prev) => prev - 1);
    }
  };

  return (
    <>
    <div className="px-24 py-16 flex gap-8 bg-white">
      {/* Left Section - Thumbnails */}
      <div className="flex flex-col gap-4">
        {["/selected.png", "/pro2.png", "/pro3.png"].map((image, index) => (
          <div
            key={index}
            className="w-32 rounded-lg overflow-hidden cursor-pointer ml-10"
          >
            <Image
              src={image}
              alt={`Product ${index + 1}`}
              width={112}
              height={128}
              className="object-cover w-full h-full"
            />
          </div>
        ))}
      </div>

      {/* Center Section - Large Image */}
      <div className="flex-1 h-[450px]">
        <div className="w-full h-full rounded-lg overflow-hidden">
          <Image
            src="/pro1.png"
            alt="Selected Product"
            width={400}
            height={400}
            className="object-contain w-full h-full"
          />
        </div>
      </div>

      {/* Right Section - Details */}
      <div className="flex-1 h-[400px] flex flex-col justify-between">
        <div>
          <h1 className="text-3xl font-extrabold mb-4">ONE LIFE GRAPHIC T-SHIRT</h1>
          <div className="flex items-center mb-1">
            <div className="flex text-amber-500">
              {[...Array(5)].map((_, i) => (
                <Star key={i} size={16} fill="currentColor" />
              ))}
            </div>
            <span className="ml-2 text-gray-600">4.5/5</span>
          </div>
          <div className="flex items-center mb-4">
            <span className="text-2xl font-semibold mr-2">$260</span>
            <span className="text-gray-500 line-through mr-2 text-2xl font-semibold">$300</span>
            <span className="text-rose-500 bg-red-100 px-2 rounded-full h-6 font-base">-40%</span>
          </div>
          <p className="text-gray-500 mb-4 text-sm">
            The graphic T-shirt which gives A premium quality t-shirt that provides comfort and wear for everyday style.
          </p>
          <div className="border-t border-gray-300 my-4"></div>

          {/* Solid Colors */}
          <p className="font-semibold mb-2 text-gray-500">Solid Colors</p>
          <div className="flex gap-4 mb-4">
            {["#4F4631", "#314F4A", "#31344F"].map((color, index) => (
              <div
                key={index}
                className={`w-8 h-8 rounded-full border-2 flex items-center justify-center cursor-pointer ${
                  color === "#4F4631" ? "border-black" : "border-gray-300"
                }`}
                style={{ backgroundColor: color }}
              >
                {color === "#4F4631" && <Check size={16} className="text-white" />}
              </div>
            ))}
          </div>
          <div className="border-t border-gray-300 my-4"></div>

          {/* Sizes */}
          <p className="font-semibold mb-2 text-gray-500">Choose Size</p>
          <div className="flex gap-4 mb-4">
            {["Small", "Medium", "Large", "X-Large"].map((size, index) => (
              <div
                key={index}
                className="px-4 py-2 border text-gray-500 bg-gray-100 rounded-full cursor-pointer hover:bg-black hover:text-gray-300"
              >
                {size}
              </div>
            ))}
          </div>
        </div>

        {/* Quantity and Add to Cart */}
        <div className="flex items-center gap-4">
          <div className="flex items-center border bg-gray-100 rounded-full">
            <button
              onClick={decrementQuantity}
              className="px-4 py-2"
            >
              <Minus size={16} />
            </button>
            <span className="px-4 py-2">{quantity}</span>
            <button
              onClick={incrementQuantity}
              className="px-4 py-2"
            >
              <Plus size={16} />
            </button>
          </div>
          <button className="px-28 py-2 bg-black text-gray-200 rounded-full hover:bg-white hover:text-gray-500 hover:border-gray-500">
            Add to Cart
          </button>
        </div>
      </div>
    </div>
          <Ratings/>
          <Alsolike/>
</>
  );
};

export default ProductDetail;
