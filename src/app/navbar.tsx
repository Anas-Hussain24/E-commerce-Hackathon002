import { ShoppingCart, CircleUserRound, Search, ChevronDown } from "lucide-react";
import { AlignJustify } from 'lucide-react';
import {
    Sheet,
    SheetContent,
    SheetTrigger
} from "@/components/ui/sheet";
import Link from "next/link";

export default function Navbar() {
  return (
      <nav className="bg-white text-black flex items-center md:justify-around justify-between px-4 md:px-12 py-5 border-b-2 border-[#F2F0F1]">
        <div className="flex items-center gap-4">
          <Sheet>
            <SheetTrigger className="md:hidden">
              <AlignJustify className="h-6 w-6" />
            </SheetTrigger>
            <SheetContent side="left" className="bg-white w-[300px]">
              <div className="py-12">
                <ul className="space-y-6">
                  <li className="px-4 py-2 hover:bg-gray-100">
                    <a href="/menu" className="text-lg font-medium">Shop</a>
                  </li>
                  <li className="px-4 py-2 hover:bg-gray-100">
                    <a href="/menu" className="text-lg font-medium">On Sale</a>
                  </li>
                  <li className="px-4 py-2 hover:bg-gray-100">
                    <a href="/menu" className="text-lg font-medium">New Arrivals</a>
                  </li>
                  <li className="px-4 py-2 hover:bg-gray-100">
                    <a href="/menu" className="text-lg font-medium">Brands</a>
                  </li>
                </ul>
              </div>
            </SheetContent>
          </Sheet>
          
          <div className="text-2xl md:text-3xl font-extrabold">
            <Link href="/">SHOP.CO</Link>
          </div>
        </div>

        <ul className="hidden md:flex items-center space-x-7">
          <li className="relative group">
            <button className="flex items-center space-x-1">
              <span>Shop</span>
              <ChevronDown className="w-4 h-4" />
            </button>
            <div className="absolute left-0 mt-2 hidden group-hover:block bg-white border shadow-md">
              <ul className="py-2">
                <li className="px-4 py-2 hover:bg-gray-100"><Link href="/casual">Men{`'`}s</Link></li>
                <li className="px-4 py-2 hover:bg-gray-100"><Link href="/">Women{`'`}s</Link></li>
                <li className="px-4 py-2 hover:bg-gray-100"><Link href="/productdetails">Products</Link></li>
              </ul>
            </div>
          </li>
          <li><a href="/productdetails">On Sale</a></li>
          <li><a href="/casual">New Arrivals</a></li>
          <li><a href="/productdetails">Brands</a></li>
        </ul>

        <div className="flex items-center gap-4">
          <div className="hidden md:flex items-center bg-gray-100 rounded-full px-4 py-3 w-[500px]">
            <Search className="w-5 h-5 text-gray-400" />
            <input
              type="text"
              placeholder="Search for products..."
              className="bg-transparent flex-1 outline-none pl-2 text-sm"
            />
          </div>

          <div className="flex items-center space-x-3">
            <Search className="w-5 h-5 cursor-pointer md:hidden" />
            <a href="/cart"><ShoppingCart className="w-5 h-5 cursor-pointer" /></a>
            <CircleUserRound className="w-5 h-5 cursor-pointer" />
          </div>
        </div>
      </nav>
  );
}