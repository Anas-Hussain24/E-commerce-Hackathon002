import Image from "next/image";
import { Star } from "lucide-react";

interface Product {
  id: number;
  name: string;
  rating: number;
  price: string;
  previousPrice?: string;
  discount?: string;
  imageSrc: string;
}

const products: Product[] = [
  {
    id: 1,
    name: "Vertical Striped Shirt",
    rating: 5.0,
    price: "$212",
    previousPrice: "$232",
    discount: "-20%",
    imageSrc: "/image 11.png",
  },
  {
    id: 2,
    name: "Courage Graphic T-shirt",
    rating: 4.0,
    price: "$145",
    imageSrc: "/image 12.png",
  },
  {
    id: 3,
    name: "Loose Fit Bermuda Shorts",
    rating: 3.0,
    price: "$80",
    imageSrc: "/image 13.png",
  },
  {
    id: 4,
    name: "Faded Skinny Jeans",
    rating: 4.5,
    price: "$210",
    imageSrc: "/image 14.png",
  },
];

export default function TopSellings() {
  return (
    <section className="py-16 px-10 bg-white">
      <h2 className="text-4xl font-extrabold text-center mb-8">TOP SELLINGS</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {products.map((product) => (
          <div key={product.id} className="bg-white p-3 rounded-lg text-start">
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
                <Star key={index} className="text-amber-400 fill-amber-400 w-4 h-4" />
              ))}
              <p className="text-sm text-gray-500">{product.rating.toFixed(1)}/5</p>
            </div>
            <div className="mt-2">
              {product.previousPrice && product.discount ? (
                <div className="flex items-center gap-2">
                  <p className="text-xl font-bold">{product.price}</p>
                  <p className="text-xl text-gray-600 line-through">{product.previousPrice}</p>
                  <div className="bg-rose-100 text-rose-500 text-xs font-semibold px-3 py-1 rounded-full">
                    {product.discount}
                  </div>
                </div>
              ) : (
                <p className="text-xl font-bold">{product.price}</p>
              )}
            </div>
          </div>
        ))}
      </div>
      <div className="flex justify-center mt-8">
        <button className="border border-gray-300 text-gray-800 font-semibold px-16 py-3 rounded-full hover:bg-black hover:text-white transition-all">
          View All
        </button>
      </div>
    </section>
  );
}
