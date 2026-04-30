import React from "react";
// React Icons theke logo (Lightning/Zap) import
import { RiFlashlightFill } from "react-icons/ri";
import { FaLinkedinIn, FaFacebookF, FaYoutube } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";

const Footer = () => {
  return (
    <footer className="bg-black text-white py-12 px-4">
      <div className="max-w-6xl mx-auto flex flex-col items-center text-center">
        {/* Logo Section */}
        <div className="flex items-center gap-0 group cursor-pointer mb-6">
          <RiFlashlightFill className="text-[#a3e635] text-4xl md:text-5xl" />
          <h2 className="text-2xl md:text-3xl font-bold tracking-tighter">
            Zap<span className="text-white">Shift</span>
          </h2>
        </div>

        {/* Description */}
        <p className="text-gray-400 text-sm md:text-base max-w-2xl mb-8 leading-relaxed">
          Enjoy fast, reliable parcel delivery with real-time tracking and zero
          hassle. From personal packages to business shipments — we deliver on
          time, every time.
        </p>

        {/* Navigation Links */}
        <nav className="flex flex-wrap justify-center gap-6 md:gap-10 text-sm font-medium text-gray-300 mb-10">
          <a href="#" className="hover:text-white transition-colors">
            Services
          </a>
          <a href="#" className="hover:text-white transition-colors">
            Coverage
          </a>
          <a href="#" className="hover:text-white transition-colors">
            About Us
          </a>
          <a href="#" className="hover:text-white transition-colors">
            Pricing
          </a>
          <a href="#" className="hover:text-white transition-colors">
            Blog
          </a>
          <a href="#" className="hover:text-white transition-colors">
            Contact
          </a>
        </nav>

        {/* Social Icons */}
        <div className="flex items-center gap-4">
          <a
            href="#"
            className="w-10 h-10 flex items-center justify-center rounded-full bg-[#0077b5] hover:opacity-80 transition-opacity"
          >
            <FaLinkedinIn className="text-white text-lg" />
          </a>
          <a
            href="#"
            className="w-10 h-10 flex items-center justify-center rounded-full bg-white hover:bg-gray-200 transition-colors"
          >
            <FaXTwitter className="text-black text-lg" />
          </a>
          <a
            href="#"
            className="w-10 h-10 flex items-center justify-center rounded-full bg-[#1877f2] hover:opacity-80 transition-opacity"
          >
            <FaFacebookF className="text-white text-lg" />
          </a>
          <a
            href="#"
            className="w-10 h-10 flex items-center justify-center rounded-full bg-[#ff0000] hover:opacity-80 transition-opacity"
          >
            <FaYoutube className="text-white text-lg" />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
