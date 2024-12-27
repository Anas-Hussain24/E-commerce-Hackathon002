"use client";
import { Mail } from "lucide-react";

const PreFooter = () => {
  return (
    <section className="bg-black text-white py-10 px-20 rounded-3xl w-[1120] ml-6">
      <div className="container mx-auto flex flex-col md:flex-row items-center justify-between">
        {/* Left Section */}
        <div className="md:w-1/1 mb-6 md:mb-0 pr-4">
          <h2 className="text-4xl font-extrabold leading-tight">
            STAY UPTO DATE ABOUT OUR LATEST OFFERS
          </h2>
        </div>

        {/* Right Section */}
        <div className="md:w-1/2 flex flex-col items-center md:items-end">
          {/* Input Field */}
          <div className="flex items-center justify-end w-full mb-4">
            <div className="bg-white flex items-center px-4 w-80 rounded-full">
              <Mail className="text-gray-500" size={20} />
              <input
                type="email"
                placeholder="Enter your email address"
                className="w-full py-2 px-3 text-gray-700 bg-transparent outline-none"
              />
            </div>
          </div>

          {/* Button */}
          <button className="bg-white text-black font-semibold w-80 py-2 rounded-full">
            Subscribe to Newsletters
          </button>
        </div>
      </div>
    </section>
  );
};

export default PreFooter;
