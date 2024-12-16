"use client"
import React, { useState } from 'react';
import { Trash2, Minus, Plus, Tag, ArrowRight } from 'lucide-react';
import Image from 'next/image';


const CartComponent = () => {
  const [quantities, setQuantities] = useState([1, 1, 1]);

  const updateQuantity = (index:unknown, change:unknown) => {
    const newQuantities = [...quantities];
    newQuantities[index] = Math.max(1, newQuantities[index] + change);
    setQuantities(newQuantities);
  };

  const products = [
    {
      name: "Gradient Graphic T-shirt",
      size: "Large",
      color: "White",
      price: 145,
      image: "/like1.png"
    },
    {
      name: "Classic T-shirt",
      size: "Medium",
      color: "Blue",
      price: 220,
      image: "/like2.png"
    },
    {
      name: "Plain Pink T-shirt",
      size: "42",
      color: "Black",
      price: 200,
      image: "/like3.png"
    }
  ];

  return (
    <div className="px-24 py-12 bg-white">
      <h1 className="text-3xl font-extrabold mb-8">YOUR CART</h1>
      
      <div className="flex space-x-8">
        {/* First Section: Product Details */}
        <div className="flex-grow bg-white border-2 border-gray-200 rounded-xl p-6 h-auto">
          {products.map((product, index) => (
            <div key={index}>
              <div className="flex items-center mb-6">
                {/* Product Image */}
                <Image
                  src={product.image} 
                  alt={product.name} 
                  className="w-32 h-32 object-cover mr-6 rounded-md"
                  width={144}
                  height={192}
                />
                
                {/* Product Details */}
                <div className="flex-grow">
                  <h3 className="text-xl font-semibold">{product.name}</h3>
                  <p className="text-gray-600">Size: {product.size}</p>
                  <p className="text-gray-600">Color: {product.color}</p>
                  <h4 className="text-lg font-bold mt-2">${product.price}</h4>
                </div>
                
                {/* Quantity and Delete */}
                <div className="items-center space-x-4 text-right">
                <button className="text-red-500 hover:bg-red-50 p-2 rounded-full mb-10">
                    <Trash2 size={20} />
                  </button>
                  <div className="flex items-center bg-gray-100 rounded-full">
                    
                    <button 
                      onClick={() => updateQuantity(index, -1)}
                      className="p-2 hover:bg-gray-200 rounded-l-full"
                    >
                      <Minus size={16} />
                    </button>
                    <span className="px-4">{quantities[index]}</span>
                    <button 
                      onClick={() => updateQuantity(index, 1)}
                      className="p-2 hover:bg-gray-200 rounded-r-full"
                    >
                      <Plus size={16} />
                    </button>
                  </div>
                </div>
              </div>
              
              {/* Separator */}
              {index < products.length - 1 && (
                <div className="border-t border-gray-200 my-6"></div>
              )}
            </div>
          ))}
        </div>
        
        {/* Second Section: Order Summary */}
        <div className="w-[440px] bg-white border-2 border-gray-200 rounded-2xl p-6 h-[450px]">
          <h2 className="text-2xl font-bold mb-6">Order Summary</h2>
          
          <div className="space-y-4">
            <div className="flex justify-between">
              <p className="text-gray-600">Subtotal</p>
              <h4 className="font-semibold">$565</h4>
            </div>
            <div className="flex justify-between">
              <p className="text-gray-600">Discount (-20%)</p>
              <h4 className="font-semibold text-red-500">-$113</h4>
            </div>
            <div className="flex justify-between">
              <p className="text-gray-600">Delivery Fee</p>
              <h4 className="font-semibold">$15</h4>
            </div>
            
            {/* Separator */}
            <div className="border-t border-gray-200 my-4"></div>
            
            <div className="flex justify-between mb-6">
              <h3 className="text-xl font-bold">Total</h3>
              <h4 className="text-xl font-bold">$467</h4>
            </div>
            
            {/* Promo Code Section */}
            <div className="flex items-center space-x-4 mb-4">
              <div className="flex-grow relative">
                <input 
                  type="text" 
                  placeholder="Add promo code" 
                  className="w-full pl-10 pr-5 py-2 bg-gray-100 rounded-full"
                />
                <Tag className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-500" size={20} />
              </div>
              <button className="bg-black text-white px-4 py-2 rounded-full text-sm">
                Apply
              </button>
            </div>
            
            {/* Checkout Button */}
            <button className="w-full bg-black text-white flex items-center justify-center py-3 rounded-full space-x-2">
              <span>Go to Checkout</span>
              <ArrowRight size={20} />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CartComponent;