import Image from "next/image";
import NewArrivals from "./components/newarrivals";
import TopSellings from "./components/topsellings";
import DressStyles from "./components/dressstyles";
import HappyCustomers from "./components/happycustomers";
import Link from "next/link";

export default function Home() {
  return (
    <div className="overflow-hidden">
      {/* First Section */}
      <section className="flex items-center justify-between px-24 py-4 relative">
        {/* Left Side Content */}
        <div className="w-1/2">
          <h1 className="text-6xl font-extrabold leading-none">
            FIND CLOTHES <br />
            THAT MATCHES <br />
            YOUR STYLE
          </h1>
          <div className="w-[490px]">
            <p className="text-gray-500 mt-4 text-sm">
              Browse through our diverse range of meticulously crafted garments,
              designed to bring out your individuality and cater to your sense
              of style.
            </p>
          </div>
          <button className="bg-black text-gray-300 px-12 py-3 mt-6 text-sm rounded-full">
            <Link href={"/cart"}>
            Shop Now
            </Link>
          </button>
          <div className="mt-8 space-x-6 flex">
            <div>
              <h2 className="text-4xl font-medium">200+</h2>
              <p className="text-gray-400 text-xs">International Brands</p>
            </div>
            <div className="w-[1px] h-12 bg-gray-300 mt-2"></div>
            <div>
              <h2 className="text-4xl font-medium">2,000+</h2>
              <p className="text-gray-400 text-xs">High-Quality Products</p>
            </div>
            <div className="w-[1px] h-12 bg-gray-300 mt-2"></div>
            <div>
              <h2 className="text-4xl font-medium">30,000+</h2>
              <p className="text-gray-400 text-xs">Happy Customers</p>
            </div>
          </div>
        </div>

        {/* Hero Image Section */}
        <div className="w-1/2 relative h-[600px]">
          <div className="relative h-full">
            <div className="absolute top-72 left-[-37px]">
              <Image
                src="/star.png"
                alt="Small Star"
                width={40}
                height={50}
                className="object-contain"
              />
            </div>

            <div className="h-[800px] relative">
              <Image
                src="/hero.jpg"
                alt="Hero"
                className="object-cover"
                fill
                style={{
                  objectPosition: "center",
                }}
                priority
              />
            </div>

            <div className="absolute top-[60px] right-[-20px]">
              <Image
                src="/star.png"
                alt="Big Star"
                width={90}
                height={90}
                className="object-contain"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Brands Section */}
      <section className="bg-black py-6 relative mt-[-40px] z-10">
        <div className="flex space-x-10 items-center justify-evenly">
          <Image
            src="/ver.png"
            alt="Brand 1"
            width={130}
            height={90}
            className="object-contain"
          />
          <Image
            src="/zara.png"
            alt="Brand 2"
            width={80}
            height={40}
            className="object-contain"
          />
          <Image
            src="/gucci.png"
            alt="Brand 3"
            width={120}
            height={80}
            className="object-contain"
          />
          <Image
            src="/par.png"
            alt="Brand 4"
            width={130}
            height={90}
            className="object-contain"
          />
          <Image
            src="/cal.png"
            alt="Brand 5"
            width={130}
            height={90}
            className="object-contain"
          />
        </div>
      </section>

      {/* Red Div Positioned Directly After Brands Section */}
      <div className="bg-white w-full relative z-20">
        <div className="container mx-auto">
          <NewArrivals />
          <div className="w-[1100px] h-[1px] bg-gray-200 ml-20"></div>
          <TopSellings/>
          <DressStyles/>
          <HappyCustomers/>
        </div>
      </div>
    </div>
  );
}