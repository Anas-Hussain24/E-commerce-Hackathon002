"use client";
import Image from "next/image";
import { Facebook, Instagram, Github, Twitter, Copyright } from "lucide-react";
import PreFooter from "./prefooter";

const Footer = () => {
  return (
    <div className="relative bg-white pt-16">
      {/* PreFooter */}
      <div className="absolute top-[-10px] left-20 right-0 z-20">
        <PreFooter />
      </div>

      {/* Footer */}
      <footer className="relative z-0 bg-[#F0F0F0] text-black py-28 px-20 mt-6">
        <div className="container mx-6 grid grid-cols-1 md:grid-cols-5 gap-1">
          {/* Column 1 */}
          <div className="pr-8">
            <h1 className="text-3xl font-extrabold mb-4">SHOP.CO</h1>
            <p className="text-sm leading-relaxed mb-6">
              We have clothes that suit your style and
              which youre proud to wear. From
              women to men.
            </p>
            <div className="flex gap-4">
              <a href="#" aria-label="Twitter" className="text-black hover:text-white bg-white hover:bg-black rounded-xl p-1">
                <Twitter size={15} />
              </a>
              <a href="#" aria-label="Facebook" className="text-black hover:text-white bg-white hover:bg-black rounded-xl p-1">
                <Facebook size={15} />
              </a>
              <a href="#" aria-label="Instagram" className="text-black hover:text-white bg-white hover:bg-black rounded-xl p-1">
                <Instagram size={15} />
              </a>
              <a href="#" aria-label="Github" className="text-black hover:text-white bg-white hover:bg-black rounded-xl p-1">
                <Github size={15} />
              </a>
            </div>
          </div>

          {/* Columns 2-5 */}
          {[
            { title: "COMPANY", links: ["About", "Features", "Works", "Careers"] },
            { title: "HELP", links: ["Customer Support", "Delivery Details", "Terms & Conditions", "Privacy Policy"] },
            { title: "FAQ", links: ["Account", "Manage Deliveries", "Orders", "Payments"] },
            { title: "RESOURCES", links: ["Free E-books", "Development Tutorial", "How to - Blog", "YouTube Playlist"] },
          ].map((column, index) => (
            <div key={index}>
              <h4 className="text-lg font-semibold mb-4">{column.title}</h4>
              <ul className="space-y-4">
                {column.links.map((link, idx) => (
                  <li key={idx}>
                    <a href="#" className="text-sm text-gray-600 hover:text-black">
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Divider */}
        <div className="border-t border-gray-300 my-12 w-[1060px] ml-7"></div>

        {/* Bottom Row */}
        <div className="flex flex-col md:flex-row justify-between items-center text-sm px-20">
          {/* Left Side */}
          <div className="text-gray-600 flex items-center ml-[-60px]">
            Shop.co <Copyright size={16} className="mx-1" /> Made by Anas 🤍
          </div>

          {/* Right Side */}
          <div className="flex gap-4 mt-4 md:mt-0">
            {["visa", "mastercard", "paypal", "G Pay", "pay"].map((payment, idx) => (
              <div
                key={idx}
                className="w-10 h-6 flex items-center justify-center bg-white rounded shadow-md"
              >
                <Image
                  src={`/${payment}.jpg`}
                  alt={`${payment} logo`}
                  width={30}
                  height={15}
                  className="object-contain"
                />
              </div>
            ))}
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
