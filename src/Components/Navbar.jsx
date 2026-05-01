import { useState } from "react";
import { Link, NavLink } from "react-router";
import Logo from "./Logo";
import { HiMenuAlt3, HiX } from "react-icons/hi"; // npm install react-icons install kora thakle

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const links = (
    <>
      <NavLink
        to="/services"
        className={({ isActive }) =>
          isActive ? "text-[#CAEB66] font-bold" : "hover:text-[#CAEB66]"
        }
      >
        Services
      </NavLink>
      <NavLink
        to="/coverage"
        className={({ isActive }) =>
          isActive ? "text-[#CAEB66] font-bold" : "hover:text-[#CAEB66]"
        }
      >
        Coverage
      </NavLink>
      <NavLink
        to="/aboutUs"
        className={({ isActive }) =>
          isActive ? "text-[#CAEB66] font-bold" : "hover:text-[#CAEB66]"
        }
      >
        About Us
      </NavLink>
    </>
  );

  return (
    <nav className="relative max-w-6xl mx-auto shadow-2xl bg-white mt-4 rounded-lg px-6 py-4">
      <div className="flex items-center justify-between">
        {/* 1. Logo Section */}
        <Logo />

        {/* 2. Desktop Menu (Hidden on Mobile) */}
        <div className="hidden lg:flex items-center gap-8 list-none">
          {links}
        </div>

        {/* 3. Action Buttons (Hidden on Mobile) */}
        <div className="hidden lg:flex items-center gap-5">
          <Link
            to="/login"
            className="border border-gray-400 px-5 py-2 rounded-md hover:bg-gray-50 transition"
          >
            Sign In
          </Link>
          <Link
            to="/register"
            className="bg-[#CAEB66] px-5 py-2 rounded-md font-semibold hover:brightness-95 transition"
          >
            Sign Up
          </Link>
        </div>

        {/* 4. Mobile Menu Button (Visible only on Mobile) */}
        <div className="lg:hidden flex items-center">
          <button onClick={() => setIsOpen(!isOpen)} className="text-3xl">
            {isOpen ? <HiX /> : <HiMenuAlt3 />}
          </button>
        </div>
      </div>

      {/* 5. Mobile Sidebar/Menu (Toggle on click) */}
      {isOpen && (
        <div className="lg:hidden absolute top-full left-0 w-full bg-white shadow-xl rounded-b-lg p-6 flex flex-col gap-4 z-50 animate-in fade-in slide-in-from-top-5">
          <div className="flex flex-col gap-4 list-none font-medium">
            {links}
          </div>
          <hr />
          <div className="flex flex-col gap-3">
            <Link
              to="/login"
              className="border border-gray-400 py-2 rounded-md text-center"
            >
              Sign In
            </Link>
            <Link
              to="/register"
              className="bg-[#CAEB66] py-2 rounded-md text-center font-semibold"
            >
              Sign Up
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
