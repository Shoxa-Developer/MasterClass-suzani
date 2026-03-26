import React, { useState } from "react";
import { Menu, X } from "lucide-react";

const Navbar = () => {
  const [open, setOpen] = useState(false);

  return (
    <nav className="bg-[#f5f3ef] sticky top-0 left-0 z-50 w-full border-b bg-white shadow-sm">
      <div className="max-w-7xl mx-auto flex justify-between items-center px-3 py-3">
        {/* Logo */}
        <div className="flex items-center">
          <img src={"/logo.png"} alt="logo" className="w-[140px]" />
        </div>

        {/* Desktop Menu */}
        <ul className="hidden md:flex gap-8 text-[18px] font-semibold">
          <li className="cursor-pointer hover:text-orange-500 transition">
            <a href="#home">Home</a>
          </li>
          <li className="cursor-pointer hover:text-orange-500 transition">
            <a href="#products">Experience</a>
          </li>
          <li className="cursor-pointer hover:text-orange-500 transition">
            <a href="#project">Exhibition</a>
          </li>
          <li className="cursor-pointer hover:text-orange-500 transition">
            <a href="#contact">Contact</a>
          </li>
        </ul>

        {/* Mobile Button */}
        <div
          className="md:hidden cursor-pointer"
          onClick={() => setOpen(!open)}
        >
          {open ? <X size={28} /> : <Menu size={28} />}
        </div>
      </div>

      {/* Mobile Menu */}
      {open && (
        <div className="md:hidden bg-white border-t">
          <ul className="flex flex-col items-center gap-6 py-6 text-lg font-semibold">
            <li className="hover:text-orange-500">
              <a href="#home">Home</a>
            </li>
            <li className="hover:text-orange-500">
              <a href="#products">Experience</a>
            </li>
            <li className="hover:text-orange-500">
              <a href="#project">Exhibition</a>
            </li>
            <li className="hover:text-orange-500">
              <a href="#contact">Contact</a>
            </li>
          </ul>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
