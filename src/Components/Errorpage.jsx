import React from "react";
import { useNavigate } from "react-router";
import { FaHome, FaArrowLeft } from "react-icons/fa";

const Errorpage = () => {
  const navigate = useNavigate();

  return (
    <section className="min-h-screen bg-white flex items-center justify-center px-6 py-12">
      <div className="max-w-4xl w-full flex flex-col items-center text-center">
        {/* Visual 404 Header */}
        <div className="relative">
          <h1 className="text-[120px] md:text-[200px] font-black text-gray-100 leading-none select-none">
            404
          </h1>
          <p className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-2xl md:text-4xl font-bold text-[#0e4b4f] w-full">
            Oops! Page Not Found
          </p>
        </div>

        {/* Illustration or Delivery related icon (Optional) */}
        <div className="w-64 md:w-80 h-1.5 bg-[#CAEB66] rounded-full my-8 animate-pulse"></div>

        {/* Content Section */}
        <div className="max-w-md">
          <p className="text-gray-500 text-lg md:text-xl mb-10">
            The page you are looking for might have been removed, had its name
            changed, or is temporarily unavailable. Let's get you back on track!
          </p>

          {/* Action Buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <button
              onClick={() => navigate(-1)}
              className="w-full sm:w-auto flex items-center justify-center gap-2 border-2 border-[#0e4b4f] text-[#0e4b4f] px-8 py-3 rounded-full font-bold hover:bg-gray-50 transition-all active:scale-95"
            >
              <FaArrowLeft /> Go Back
            </button>

            <button
              onClick={() => navigate("/")}
              className="w-full sm:w-auto flex items-center justify-center gap-2 bg-[#0e4b4f] text-white px-8 py-3 rounded-full font-bold hover:bg-[#1a5d62] shadow-lg shadow-teal-900/20 transition-all active:scale-95"
            >
              <FaHome /> Back to Home
            </button>
          </div>
        </div>

        {/* Bottom Decorative Elements */}
        <div className="mt-16 flex gap-4 opacity-20">
          <div className="w-3 h-3 bg-blue-600 rounded-full animate-bounce"></div>
          <div className="w-3 h-3 bg-[#CAEB66] rounded-full animate-bounce [animation-delay:-0.3s]"></div>
          <div className="w-3 h-3 bg-blue-600 rounded-full animate-bounce [animation-delay:-0.5s]"></div>
        </div>
      </div>
    </section>
  );
};

export default Errorpage;
