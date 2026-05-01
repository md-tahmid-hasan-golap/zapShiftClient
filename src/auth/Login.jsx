import { useContext } from "react";
import { useForm } from "react-hook-form";
import { Link, useNavigate } from "react-router";

import Swal from "sweetalert2";
import { AuthContext } from "../firebase/FirebaseAuthProvider";

const Login = () => {
  const { signInUser, signInWithGoogle } = useContext(AuthContext);
  const navigate = useNavigate();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const handleLogin = (data) => {
    signInUser(data.email, data.password)
      .then((result) => {
        Swal.fire({
          title: "Login Successful!",
          text: "Welcome back to ZapShift",
          icon: "success",
          confirmButtonColor: "#CAEB66",
        });
        console.log(result.user);
        navigate("/");
      })
      .catch((error) => {
        Swal.fire({
          title: "Login Failed",
          text: "Invalid email or password. Please try again.",
          icon: "error",
          confirmButtonColor: "#EF4444",
        });
        console.log(error.message);
      });
  };

  const handelGoogleLogin = () => {
    signInWithGoogle()
      .then((result) => {
        Swal.fire({
          title: "Login Successful!",
          text: "Welcome back to ZapShift",
          icon: "success",
          confirmButtonColor: "#CAEB66",
        });
        console.log(result.user);
        navigate("/");
      })
      .catch((error) => {
        Swal.fire({
          title: "Login Failed",
          text: "Something went wrong. Please try again.",
          icon: "error",
          confirmButtonColor: "#EF4444",
        });
        console.log(error.message);
      });
  };

  return (
    <div className="w-full">
      <form onSubmit={handleSubmit(handleLogin)} className="space-y-4">
        <div className="grid grid-cols-1 gap-4">
          {/* Email Field */}
          <div className="form-control w-full">
            <label className="label font-semibold text-gray-700">
              Email Address
            </label>
            <input
              type="email"
              {...register("email", { required: "Email is required" })}
              className="input input-bordered w-full focus:border-[#CAEB66] outline-none"
              placeholder="Enter your email"
            />
            {errors.email && (
              <p className="text-red-500 text-sm mt-1">
                {errors.email.message}
              </p>
            )}
          </div>

          {/* Password Field */}
          <div className="form-control w-full">
            <label className="label font-semibold text-gray-700">
              Password
            </label>
            <input
              type="password"
              {...register("password", {
                required: "Password is required",
                minLength: {
                  value: 6,
                  message: "Password must be at least 6 characters",
                },
              })}
              className="input input-bordered w-full focus:border-[#CAEB66] outline-none"
              placeholder="Enter your password"
            />
            {errors.password && (
              <p className="text-red-500 text-sm mt-1">
                {errors.password.message}
              </p>
            )}

            <div className="mt-2 text-right">
              <a className="link link-hover text-sm text-gray-500 font-medium">
                Forgot password?
              </a>
            </div>
          </div>

          {/* Login Button */}
          <button
            type="submit"
            className="btn bg-[#CAEB66] hover:bg-[#b8d65a] border-none text-gray-800 w-full mt-2 font-bold uppercase tracking-wider transition-colors"
          >
            Login
          </button>

          {/* Google Login Button */}
          <button
            type="button" // type="button" ensure korbe eta jeno form submit na kore
            onClick={handelGoogleLogin}
            className="btn bg-white text-black border-[#e5e5e5] hover:bg-gray-50 w-full flex items-center justify-center gap-2"
          >
            <svg
              aria-label="Google logo"
              width="20"
              height="20"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 512 512"
            >
              <g>
                <path d="m0 0H512V512H0" fill="#fff"></path>
                <path
                  fill="#34a853"
                  d="M153 292c30 82 118 95 171 60h62v48A192 192 0 0190 341"
                ></path>
                <path
                  fill="#4285f4"
                  d="m386 400a140 175 0 0053-179H260v74h102q-7 37-38 57"
                ></path>
                <path
                  fill="#fbbc02"
                  d="m90 341a208 200 0 010-171l63 49q-12 37 0 73"
                ></path>
                <path
                  fill="#ea4335"
                  d="m153 219c22-69 116-109 179-50l55-54c-78-75-230-72-297 55"
                ></path>
              </g>
            </svg>
            Login with Google
          </button>

          {/* Redirect to Register */}
          <p className="text-center text-sm text-gray-600 mt-2">
            Don't have an account?{" "}
            <Link to="/register" className="text-blue-600 font-bold link-hover">
              Register Now
            </Link>
          </p>
        </div>
      </form>
    </div>
  );
};

export default Login;
