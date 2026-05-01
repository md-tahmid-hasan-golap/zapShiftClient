import { Link, NavLink } from "react-router";
import Logo from "./Logo";
import { useContext } from "react";
import { AuthContext } from "../firebase/FirebaseAuthProvider";
import Swal from "sweetalert2";

const Navbar = () => {
  const { user, logoutUser } = useContext(AuthContext);

  const handelLogout = () => {
    // Confirm korar jonno prothome ekta alert dekhabe
    Swal.fire({
      title: "Are you sure?",
      text: "You will be logged out from your account!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#CAEB66", // Apnar theme color
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, logout!",
    }).then((result) => {
      if (result.isConfirmed) {
        // Jodi user 'Yes' click kore, tokhon logout hobe
        logoutUser()
          .then(() => {
            Swal.fire({
              title: "Logged Out!",
              text: "See you again soon.",
              icon: "success",
              confirmButtonColor: "#CAEB66",
            });
          })
          .catch((error) => {
            Swal.fire({
              title: "Error!",
              text: "Something went wrong.",
              icon: "error",
            });
            console.log(error);
          });
      }
    });
  };
  const links = (
    <>
      <li className="mr-1">
        <NavLink
          className={({ isActive }) =>
            isActive
              ? "text-[#CAEB66] font-bold bg-black"
              : "text-gray-600 font-bold"
          }
          to="/services"
        >
          Services
        </NavLink>
      </li>
      <li className="mr-1">
        <NavLink
          className={({ isActive }) =>
            isActive
              ? "text-[#CAEB66] font-bold bg-black"
              : "text-gray-600 font-bold"
          }
          to="/coverage"
        >
          Coverage
        </NavLink>
      </li>
      <li className="mr-1">
        <NavLink
          className={({ isActive }) =>
            isActive
              ? "text-[#CAEB66] font-bold bg-black"
              : "text-gray-600 font-bold"
          }
          to="/aboutUs"
        >
          About Us
        </NavLink>
      </li>
      <li className="mr-1">
        <NavLink
          className={({ isActive }) =>
            isActive
              ? "text-[#CAEB66] font-bold bg-black"
              : "text-gray-600 font-bold"
          }
          to="/sendParcel"
        >
          Send Parcel
        </NavLink>
      </li>
      <li className="mr-1">
        <NavLink
          className={({ isActive }) =>
            isActive
              ? "text-[#CAEB66] font-bold bg-black"
              : "text-gray-600 font-bold"
          }
          to="dashboard/myParcels"
        >
          My Parcels
        </NavLink>
      </li>
    </>
  );

  return (
    <div className="navbar bg-base-100 shadow-sm">
      <div className="navbar-start">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              {" "}
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />{" "}
            </svg>
          </div>
          <ul
            tabIndex="-1"
            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow"
          >
            {links}
          </ul>
        </div>
        <a className="btn btn-ghost text-xl">
          <Logo></Logo>
        </a>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">{links}</ul>
      </div>
      <div className="navbar-end gap-5">
        {user ? (
          <div className="navbar-end gap-5">
            <button
              onClick={handelLogout}
              className="text-white bg-red-500 btn"
            >
              LogOut
            </button>
          </div>
        ) : (
          <div className="navbar-end gap-5">
            {" "}
            <Link to="/login" className="btn">
              Sign In
            </Link>
            <Link to="/register" className="btn">
              Sign Up
            </Link>
          </div>
        )}
      </div>
    </div>
  );
};

export default Navbar;
