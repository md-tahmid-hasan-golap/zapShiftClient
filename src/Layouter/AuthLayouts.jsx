import { Outlet } from "react-router";
import authImg from "../../src/assets/banner/authImage.png";

const AuthLayouts = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-base-200 p-4">
      {/* Container: Mobile-e Column, Large screen-e Row */}
      <div className="flex flex-col lg:flex-row items-center bg-base-100 shadow-xl rounded-2xl overflow-hidden max-w-5xl w-full">
        {/* Form Section (Outlet) */}
        <div className="w-full lg:w-1/2 p-8 md:p-12">
          <Outlet />
        </div>

        {/* Image Section */}
        <div className="w-full lg:w-1/2 bg-blue-50">
          <img
            src={authImg}
            alt="Authentication"
            className="w-full h-full object-cover max-h-[300px] lg:max-h-full"
          />
        </div>
      </div>
    </div>
  );
};

export default AuthLayouts;
