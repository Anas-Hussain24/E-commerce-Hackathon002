"use client";

import { Star, SlidersHorizontal, Check, ChevronDown } from "lucide-react";
import { useState } from "react";

// Type definition for a review
interface Review {
  id: number;
  rating: number;
  name: string;
  verified: boolean;
  review: string;
  date: string;
}

const Ratings = () => {
  const [activeTab, setActiveTab] = useState("Rating & Reviews");
  const reviews: Review[] = [
    {
      id: 1,
      rating: 5,
      name: "Samantha D.",
      verified: true,
      review:
        "The product quality is amazing. Totally worth the price! I would recommend it to everyone looking for quality and value.You can try this for my recommendation and It will gives you great experience",
      date: "Posted on August 14, 2023",
    },
    {
      id: 2,
      rating: 4,
      name: "Michael T.",
      verified: true,
      review:
        "Very comfortable and stylish. Would recommend to friends and family for sure. Great purchase overall.You can try this for my recommendation and It will gives you great experience",
      date: "Posted on July 10, 2023",
    },
    {
      id: 3,
      rating: 3,
      name: "Anna K.",
      verified: true,
      review:
        "Good quality but the size was a bit off for me. Maybe it’s better to check the sizing chart carefully.You can try this for my recommendation and It will gives you great experience",
      date: "Posted on June 25, 2023",
    },
    {
      id: 4,
      rating: 5,
      name: "John L.",
      verified: true,
      review:
        "Exceeded my expectations. Great product! Definitely a value for money purchase.You can try this for my recommendation and It will gives you great experience",
      date: "Posted on May 18, 2023",
    },
    {
      id: 5,
      rating: 4,
      name: "Emily R.",
      verified: true,
      review:
        "Beautiful design and very comfortable to wear. A perfect fit for my needs. I love it! .You can try this for my recommendation and It will gives you great experience",
      date: "Posted on April 22, 2023",
    },
    {
      id: 6,
      rating: 3,
      name: "David H.",
      verified: true,
      review:
        "Average product. Delivery was a bit delayed, but overall it was okay. Might buy again.You can try this for my recommendation and It will gives you great experience",
      date: "Posted on March 15, 2023",
    },
  ];

  return (
    <div className="px-24 py-16 bg-white">
      {/* Navigation Tabs */}
      <div className="flex justify-evenly items-center border-b border-gray-300 mb-6">
        {["Product Review", "Rating & Reviews", "FAQs"].map((tab) => (
          <button
            key={tab}
            className={`px-12 py-2 text-base font-semibold border-b-2 transition-colors duration-200 ${
              activeTab === tab
                ? "text-black border-black"
                : "text-gray-400 border-transparent"
            }`}
            onClick={() => setActiveTab(tab)}
          >
            {tab}
          </button>
        ))}
      </div>

      {/* Heading Section */}
      <div className="flex justify-between items-center mb-6">
        <div className="flex items-baseline gap-2">
          <h2 className="text-xl font-bold">All Reviews</h2>
          <p className="text-gray-500">(451)</p>
        </div>

        <div className="flex items-center gap-4">
            <div className="bg-gray-100 rounded-full p-1">
          <SlidersHorizontal size={22}/>
            </div>
          <div className="relative">
            <button className="flex items-center gap-2 px-4 py-2 bg-gray-100 text-sm rounded-full">
              <span>Latest</span>
              <ChevronDown size={16} />
            </button>
          </div>

          {/* Write a Review Button */}
          <button className="px-4 py-2 bg-black text-gray-200 rounded-full text-sm hover:bg-white hover:text-gray-500 hover:border hover:border-gray-500">
            Write a Review
          </button>
        </div>
      </div>

      {/* Reviews Section */}
      <div className="grid grid-cols-2 gap-6 mb-8 w-[1130px] h-[650px] p-2 ml-3">
        {reviews.map((review) => (
          <div
            key={review.id}
            className="p-6 border border-gray-300 rounded-2xl bg-white"
          >
            {/* Rating Stars and Circles */}
            <div className="flex items-center justify-between mb-2">
              <div className="flex text-amber-500">
                {Array.from({ length: review.rating }, (_, i) => (
                  <Star key={i} size={16} fill="currentColor" />
                ))}
              </div>
              <div className="flex gap-1">
                <div className="w-1 h-1 bg-gray-400 rounded-full"></div>
                <div className="w-1 h-1 bg-gray-400 rounded-full"></div>
                <div className="w-1 h-1 bg-gray-400 rounded-full"></div>
              </div>
            </div>

            {/* Customer Info */}
            <div className="flex items-center gap-2 mb-2">
              <p className="font-bold text-md text-gray-800">
                {review.name}
              </p>
              {review.verified && (
                <div className="flex items-center justify-center w-5 h-5 rounded-full bg-green-600">
                  <Check size={12} className="text-white" />
                </div>
              )}
            </div>

            {/* Review Text */}
            <p className="text-xs text-gray-500 mb-4 w-[400px]">
              {review.review}
            </p>

            {/* Review Date */}
            <p className="text-xs text-gray-500">{review.date}</p>
          </div>
        ))}
      </div>

      {/* Load More Reviews Button */}
      <div className="text-center">
        <button className="px-8 py-3 bg-white border border-gray-300 text-sm text-gray-500 rounded-full hover:bg-black hover:text-gray-200">
          Load More Reviews
        </button>
      </div>
    </div>
  );
};

export default Ratings;
