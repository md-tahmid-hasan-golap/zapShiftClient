import { useContext } from "react";
import { useForm } from "react-hook-form";
import { AuthContext } from "../firebase/FirebaseAuthProvider";
import Swal from "sweetalert2";
import { Link, useNavigate } from "react-router"; // useNavigate add kora hoyeche

const Register = () => {
  const { creatUser, signInWithGoogle } = useContext(AuthContext);
  const navigate = useNavigate(); // Navigation initialize korlam

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const handelRegister = (data) => {
    creatUser(data.email, data.password)
      .then((result) => {
        Swal.fire({
          title: "Registration Successful!",
          text: "Welcome to ZapShift",
          icon: "success",
          confirmButtonColor: "#CAEB66",
        });
        console.log(result);
        navigate("/"); // Registration successful hole home-e jabe
      })
      .catch((error) => {
        Swal.fire({
          title: "Error!",
          text: error.message,
          icon: "error",
          confirmButtonColor: "#EF4444",
        });
        console.log(error);
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
        navigate("/"); // Google login successful hole home-e jabe
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
      <form onSubmit={handleSubmit(handelRegister)} className="space-y-4">
        <div className="grid grid-cols-1 gap-4">
          {/* Name Field */}
          <div className="form-control w-full">
            <label className="label font-semibold text-gray-700">
              Full Name
            </label>
            <input
              type="text"
              {...register("name", { required: true })}
              className="input input-bordered w-full focus:border-[#CAEB66] outline-none"
              placeholder="Enter your name"
            />
            {errors.name && (
              <p className="text-red-500 text-sm mt-1">Name is required</p>
            )}
          </div>

          {/* photo Field */}
          <div className="form-control w-full">
            <label className="label font-semibold text-gray-700">Photo</label>
            <input
              type="file"
              {...register("photo", { required: true })}
              className="file-input file-input-bordered w-full focus:border-[#CAEB66] outline-none"
            />
            {errors.photo && (
              <p className="text-red-500 text-sm mt-1">Photo is required</p>
            )}
          </div>

          {/* Email Field */}
          <div className="form-control w-full">
            <label className="label font-semibold text-gray-700">
              Email Address
            </label>
            <input
              type="email"
              {...register("email", { required: true })}
              className="input input-bordered w-full focus:border-[#CAEB66] outline-none"
              placeholder="Email"
            />
            {errors.email && (
              <p className="text-red-500 text-sm mt-1">Email is required</p>
            )}
          </div>

          {/* Password Field */}
          <div className="form-control w-full">
            <label className="label font-semibold text-gray-700">
              Password
            </label>
            <input
              type="password"
              {...register("password", { required: true, minLength: 6 })}
              className="input input-bordered w-full focus:border-[#CAEB66] outline-none"
              placeholder="Password"
            />
            {errors.password && (
              <p className="text-red-500 text-sm mt-1">Password is required</p>
            )}
            {errors.password?.type === "minLength" && (
              <p className="text-red-500 text-sm mt-1">
                Password must be at least 6 characters long
              </p>
            )}
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            className="btn bg-[#CAEB66] hover:bg-[#b8d65a] border-none text-gray-800 w-full mt-2 font-bold uppercase tracking-wider"
          >
            Register
          </button>

          {/* Google */}
          <button
            type="button" // type="button" deya hoyeche jate form submit na hoye shudhu google login function call hoy
            onClick={handelGoogleLogin}
            className="btn bg-white text-black border-[#e5e5e5]"
          >
            <svg
              aria-label="Google logo"
              width="16"
              height="16"
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

          <p className="text-center text-sm text-gray-600 mt-2">
            Already have an account?{" "}
            <Link to="/login" className="text-blue-600 font-bold link-hover">
              Login In Now
            </Link>
          </p>
        </div>
      </form>
    </div>
  );
};

export default Register;
