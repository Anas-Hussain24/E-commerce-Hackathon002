import { ShoppingCart, CircleUserRound , Search, ChevronDown } from "lucide-react";
import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="bg-white text-black flex items-center justify-around px-12 py-5">
      {/* Logo */}
      <div className="text-3xl font-extrabold">
        <Link href={"/"}>SHOP.CO</Link></div>

      {/* Navigation Links */}
      <ul className="flex items-center space-x-7 ">
        {/* Dropdown Menu */}
        <li className="relative group">
          <button className="flex items-center space-x-1">
            <span>Shop</span>
            <ChevronDown className="w-4 h-4" />
          </button>
          <div className="absolute left-0 mt-2 hidden group-hover:block bg-white border shadow-md">
            <ul className="py-2">
              <li className="px-4 py-2 hover:bg-gray-100"> <Link href={"/casual"}>Men{`'`}s</Link></li>
              <li className="px-4 py-2 hover:bg-gray-100"> <Link href={"/"}>Women{`'`}s</Link></li>
              <li className="px-4 py-2 hover:bg-gray-100"> <Link href={"/productdetails"}>Products</Link></li>
            </ul>
          </div>
        </li>
        <li><Link href={"/productdetails"}>On Sale</Link></li>
        <li><Link href={"/casual"}>New Arrivals</Link> </li>
        <li><Link href={"/productdetails"}>Brands</Link></li>
      </ul>

      {/* Search Bar */}
      <div className="flex items-center space-x-6">
        <div className="flex items-center bg-gray-100 rounded-full px-4 py-3 w-[500]">
          <Search className="w-5 h-5 text-gray-400" />
          <input
            type="text"
            placeholder="Search for products..."
            className="bg-transparent flex-1 outline-none pl-2 text-sm"
          />
        </div>

        {/* Icons */}
        <div className="flex items-center space-x-3">
          <Link href={"/cart"}><ShoppingCart className="w-5 h-5 cursor-pointer" /></Link>
          <CircleUserRound className="w-5 h-5 cursor-pointer" />
        </div>
      </div>
    </nav>
  );
}
