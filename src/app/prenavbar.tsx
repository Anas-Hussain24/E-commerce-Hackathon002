import { X } from "lucide-react";

export default function PreNavbar() {
  return (
    <div className="bg-black text-white flex items-center justify-between px-24 py-2 w-full top-0 z-50 h-10">
      <p className="text-sm text-center flex-1">
        Sign up and get 20% off to your first order.
        <a href="#" className="font-semi-bold hover:underline ml-2">
          <u>Sign Up Now</u>
        </a>
      </p>
      <div className="mr-[-12px]">
        <X className="w-5 h-5" />
      </div>
    </div>
  );
}
