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
    name: "Polo with Contrast Trimes",
    rating: 4.0,
    price: "$212",
    previousPrice: "$242",
    discount: "-20%",
    imageSrc: "/like1.png",
  },
  {
    id: 2,
    name: "Gradient Graphic T-shirt",
    rating: 3.5,
    price: "$145",
    imageSrc: "/like2.png",
  },
  {
    id: 3,
    name: "Polo with Tipping Details",
    rating: 4.5,
    price: "$180",
    imageSrc: "/like3.png",
  },
  {
    id: 4,
    name: "Black Striped T-shirt",
    rating: 5.0,
    price: "$120",
    previousPrice: "$150",
    discount: "-30%",
    imageSrc: "/like4.png",
  },
];

export default function Alsolike() {
  return (
    <section className="py-24 px-20 bg-white mt-[-60px]">
      <h2 className="text-4xl font-extrabold text-center mb-8">YOU MIGHT ALSO LIKE</h2>
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
    </section>
  );
}
