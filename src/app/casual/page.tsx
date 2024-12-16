"use client";

import {
  SlidersHorizontal,
  ChevronRight,
  ChevronUp,
  ChevronDown,
  Check,
  ArrowLeft,
  ArrowRight,
  Star,
} from "lucide-react";
import { useState } from "react";
import Image from "next/image";

interface Product {
  id: number;
  name: string;
  imageSrc: string;
  rating: number;
  price: string;
  previousPrice?: string;
  discount?: string;
}

const products: Product[] = [
    {
        id: 1,
        name: "Gradient Graphic T-shirt",
        rating: 3.5,
        price: "$145",
        imageSrc: "/like2.png"
      },
      {
        id: 2,
        name: "Polo with Tipping Details",
        rating: 4.5,
        price: "$180",
        imageSrc: "/like3.png",
      },
      {
        id: 3,
        name: "Black Striped T-shirt",
        rating: 5.0,
        price: "$120",
        previousPrice: "$150",
        discount: "-30%",
        imageSrc: "/like4.png",
      },
      {
        id: 4,
        name: "Skinny Fit Jeans",
        rating: 3.8,
        price: "$240",
        previousPrice: "$260",
        discount: "-20%",
        imageSrc: "/image 8.png",
      },
      {
        id: 5,
        name: "Checkered Shirt",
        rating: 4.2,
        price: "$180",
        imageSrc: "/image 9.png",
      },
      {
        id: 6,
        name: "Sleeve Striped T-shirt",
        rating: 3.6,
        price: "$130",
        previousPrice: "$160",
        discount: "-30%",
        imageSrc: "/image 10.png",
      },
      {
        id: 7,
        name: "Vertical Striped Shirt",
        rating: 5.0,
        price: "$212",
        previousPrice: "$232",
        discount: "-20%",
        imageSrc: "/image 11.png",
      },
      {
        id: 8,
        name: "Courage Graphic T-shirt",
        rating: 4.0,
        price: "$145",
        imageSrc: "/image 12.png",
      },
      {
        id: 9,
        name: "Loose Fit Bermuda Shorts",
        rating: 3.0,
        price: "$80",
        imageSrc: "/image 13.png",
      },
];

const CasualFilters = () => {
  const [selectedColor, setSelectedColor] = useState("red");
  const [activePage, setActivePage] = useState(1);

  const colors = ["red", "blue", "green", "yellow", "purple", "pink", "black", "white", "gray", "orange"];
  const sizes = [
    "XX-small",
    "X-small",
    "small",
    "medium",
    "large",
    "X-large",
    "XX-large",
    "3x-large",
    "4x-large",
  ];
  const dressStyles = ["Casual", "Formal", "Party", "Gym"];
  const categories = ["T-shirts", "Shorts", "Shirts", "Hoodie", "Jeans"];

  return (
    <div className="px-24 py-16 flex gap-8 bg-white">
      {/* Product Needs Section */}
      <div
  className="w-1/4 bg-white border border-gray-200 p-6 rounded-2xl"
  style={{
    height: "fit-content",
    padding: "20px", // Adjust top, bottom, left, and right spacing
    margin: "0 auto", // Center the content vertically if needed
  }}
>
  {/* Filters Heading */}
  <div className="flex justify-between items-center mb-4">
    <h2 className="text-lg font-bold">Filters</h2>
    <SlidersHorizontal size={20} className="text-gray-500" />
  </div>
  <hr className="border-gray-200 mb-4" />

  {/* Categories */}
  <div className="mb-6">
    {categories.map((category) => (
      <div key={category} className="flex justify-between items-center py-2 text-sm text-gray-500">
        <span>{category}</span>
        <ChevronRight size={16} className="text-gray-500" />
      </div>
    ))}
  </div>
  <hr className="border-gray-200 mb-4" />

  {/* Price Range */}
  <div className="mb-6">
    <div className="flex justify-between items-center mb-4">
      <span className="text-lg font-bold">Price</span>
      <ChevronUp size={16} className="text-gray-500" />
    </div>
    <input type="range" className="w-full" />
    <h4 className="text-black text-sm font-semibold">160$</h4>
  </div>
  <hr className="border-gray-200 mb-4" />

  {/* Colors */}
  <div className="mb-6">
    <div className="flex justify-between items-center mb-4">
      <span className="text-sm font-semibold">Color</span>
      <ChevronUp size={16} className="text-gray-500" />
    </div>
    <div className="grid grid-cols-5 gap-2">
      {colors.map((color) => (
        <div
          key={color}
          className={`w-8 h-8 rounded-full cursor-pointer flex items-center justify-center ring-1 ring-gray-300 ${
            selectedColor === color ? "ring-2 ring-gray-200" : ""
          }`}
          style={{ backgroundColor: color }}
          onClick={() => setSelectedColor(color)}
        >
          {selectedColor === color && <Check size={12} className="text-white" />}
        </div>
      ))}
    </div>
  </div>
  <hr className="border-gray-200 mb-4" />

  {/* Sizes */}
  <div className="mb-6">
    <div className="flex justify-between items-center mb-4">
      <span className="text-lg font-bold">Size</span>
      <ChevronUp size={16} className="text-gray-500" />
    </div>
    <div className="grid grid-cols-2 gap-2">
      {sizes.map((size) => (
        <div
          key={size}
          className="px-3 py-2 text-center text-sm cursor-pointer hover:bg-black hover:text-gray-100 bg-gray-100 rounded-full"
        >
          {size}
        </div>
      ))}
    </div>
  </div>
  <hr className="border-gray-200 mb-4" />
  <div className="mb-6">
          <div className="flex justify-between items-center mb-4">
            <span className="text-lg font-bold">Dress Style</span>
            <ChevronUp size={16} className="text-gray-500" />
          </div>
          {dressStyles.map((style) => (
            <div key={style} className="flex justify-between items-center py-2 text-sm text-gray-500">
              <span>{style}</span>
              <ChevronRight size={16} className="text-gray-500" />
            </div>
          ))}
        </div>

  {/* Apply Filter Button */}
  <button className="w-full py-3 bg-black text-gray-100 rounded-full text-sm hover:bg-white hover:text-black hover:ring-1 hover:ring-black">
    Apply Filter
  </button>
</div>


      {/* Casual Section */}
      <div className="w-3/4">
        {/* Heading Section */}
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-3xl font-bold ml-4">Casual</h2>
          <p className="text-sm text-gray-500">
            Showing 1-10 of 100 Products &nbsp;
            <span className="text-gray-900 font-semibold">Most Popular</span>
            <ChevronDown size={16} className="inline text-black ml-1" />
          </p>
        </div>

        {/* Product Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {products.map((product) => (
          <div key={product.id} className="bg-white p-4 rounded-lg text-start">
            <div className="w-full h-64 relative bg-gray-200 rounded-xl overflow-hidden">
              <Image
                src={product.imageSrc}
                alt={product.name}
                layout="fill"
                objectFit="cover"
              />
            </div>
            <h3 className="text-lg font-semibold mt-4">{product.name}</h3>
            <div className="flex items-center justify-start gap-2 mt-2">
              {[...Array(Math.floor(product.rating))].map((_, index) => (
                <Star
                  key={index}
                  className="text-amber-400 fill-amber-400 w-4 h-4"
                />
              ))}
              <p className="text-sm text-gray-500">
                {product.rating.toFixed(1)}/5
              </p>
            </div>
            <div className="mt-2">
              <p className="text-xl font-bold inline-block mr-2">
                {product.price}
              </p>
              {product.previousPrice && (
                <span className="text-gray-500 line-through text-xl mr-2">
                  {product.previousPrice}
                </span>
              )}
              {product.discount && (
                <span className="bg-rose-100 text-rose-500 text-xs font-semibold px-3 py-1 rounded-full">
                  {product.discount}
                </span>
              )}
            </div>
          </div>
        ))}
      </div>

        <hr className="border-gray-300 mb-6 mt-2" />

        {/* Pagination */}
        <div className="flex justify-between items-center">
          <button className="px-4 py-2 bg-white border border-gray-300 text-sm text-black rounded-xl flex items-center gap-2 hover:bg-black hover:text-gray-200 ">
            <ArrowLeft size={16} /> Previous
          </button>
          <div className="flex items-center gap-2">
            {[1, 2, 3, "...", 8, 9, 10].map((page : any, index) => (
              <button
                key={index}
                className={`px-4 py-2 rounded-xl text-sm ${
                  activePage === page
                    ? "bg-gray-100 text-black"
                    : "hover:bg-gray-100 text-gray-500"
                }`}
                onClick={() => setActivePage(page)}
              >
                {page}
              </button>
            ))}
          </div>
          <button className="px-4 py-2 bg-white border border-gray-300 text-sm text-black rounded-xl flex items-center gap-2 hover:bg-black hover:text-gray-200">
            Next <ArrowRight size={16} />
          </button>
        </div>
      </div>
    </div>
  );
};

export default CasualFilters;
