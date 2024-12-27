import { X } from "lucide-react";

export default function Pre() {
  return (
    <div className="bg-black text-white flex items-center justify-between px-4 md:px-24 py-2 w-full top-0 z-50 h-10 whitespace-nowrap overflow-hidden">
      <p className="text-xs md:text-sm text-center flex-1">
        Sign up and get 20% off to your first order.
        <a href="#" className="font-semibold hover:underline ml-1 md:ml-2">
          <u>Sign Up Now</u>
        </a>
      </p>
      <button className="shrink-0 ml-2">
        <X className="w-4 h-4 md:w-5 md:h-5 md:mr-[-15px]" />
      </button>
    </div>
  );
}