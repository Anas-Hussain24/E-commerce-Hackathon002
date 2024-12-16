"use client";

import { Card, CardContent } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { Star, Check } from "lucide-react";

interface CustomerReview {
  id: number;
  name: string;
  review: string;
  rating: number;
}

const review: string =
  " ''Thank you for your trust in our service! We continually strive to improve our offerings and provide an outstanding experience for every customer. Your feedback is invaluable to us.''";

const reviews: CustomerReview[] = [
  { id: 1, name: "Sarah M.", review: review, rating: 5 },
  { id: 2, name: "Alex K.", review: review, rating: 5 },
  { id: 3, name: "James L.", review: review, rating: 5 },
  { id: 4, name: "Michael T", review: review, rating: 5 },
  { id: 5, name: "Anna K", review: review, rating: 5 },
  { id: 6, name: "David L", review: review, rating: 5 },
];

export default function HappyCustomers() {
  return (
    <Carousel className="relative py-20 px-16">
      {/* Heading with Controls */}
      <div className="flex justify-between items-center mb-8">
        <h2 className="text-4xl font-extrabold">OUR HAPPY CUSTOMERS</h2>
        {/* Carousel Navigation */}
        <div className="absolute right-28 flex">
          <CarouselPrevious className="bg-white hover:bg-gray-200 text-black p-2 border-none" />
          <CarouselNext className="bg-white hover:bg-gray-200 text-black p-2 border-none" />
        </div>
      </div>

      {/* Carousel Content */}
      <CarouselContent className="flex gap-3">
        {reviews.map((review) => (
          <CarouselItem
            key={review.id}
            className="md:basis-1/3 lg:basis-1/3 ml-[1]"  // 3 cards visible at a time
          >
            <Card className="p-4 shadow-md rounded-2xl">
              <CardContent className="p-3 border border-none rounded-lg bg-white">
                {/* Star Ratings */}
                <div className="flex gap-1 mb-4">
                  {[...Array(review.rating)].map((_, index) => (
                    <Star key={index} className="text-amber-400 fill-amber-400 w-5 h-5" />
                  ))}
                </div>
                {/* Customer Info */}
                <div className="flex items-center gap-2 mb-2">
                  <p className="text-lg font-bold text-gray-800">{review.name}</p>
                  {/* Updated tick icon */}
                  <div className="w-5 h-5 bg-green-600 rounded-full flex items-center justify-center">
                    <Check className="text-white w-3 h-3" />
                  </div>
                </div>
                {/* Review Text */}
                <p className="text-sm text-gray-600 leading-relaxed mb-4">
                  {review.review}
                </p>
              </CardContent>
            </Card>
          </CarouselItem>
        ))}
      </CarouselContent>
    </Carousel>
  );
}
