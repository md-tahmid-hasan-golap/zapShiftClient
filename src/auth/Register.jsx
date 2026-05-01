import { useContext } from "react";
import { useForm } from "react-hook-form";
import { AuthContext } from "../firebase/FirebaseAuthProvider";
import Swal from "sweetalert2";
import { Link, useNavigate } from "react-router";
import axios from "axios";

const Register = () => {
  const { creatUser, signInWithGoogle, updateProfile } =
    useContext(AuthContext);
  const navigate = useNavigate();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const handelRegister = async (data) => {
    console.log("Form Data:", data);
    const photoFile = data.photo[0];
    const formData = new FormData();
    // ImgBB expect correct key as 'image'
    formData.append("image", photoFile);

    try {
      // ১. প্রথমে ImgBB-তে ইমেজ আপলোড করা
      const imageApiUrl = `https://api.imgbb.com/1/upload?key=${import.meta.env.VITE_imageUploadUrl}`;
      const imageRes = await axios.post(imageApiUrl, formData);
      const imageUrl = imageRes.data.data.display_url;

      // ২. Firebase-এ ইউজার অ্যাকাউন্ট তৈরি করা
      const result = await creatUser(data.email, data.password);

      // ৩. ইউজারের প্রোফাইল (Name & Photo) আপডেট করা
      const userProfile = {
        displayName: data.name,
        photoURL: imageUrl,
      };

      await updateProfile(userProfile);

      // ৪. সাকসেস মেসেজ দেখানো
      Swal.fire({
        title: "Registration Successful!",
        text: "Welcome to ZapShift",
        icon: "success",
        confirmButtonColor: "#CAEB66",
      });

      // ৫. সফল হলে হোম পেজে পাঠানো
      navigate("/");
    } catch (error) {
      console.error("Error during registration:", error);

      // ImgBB বা Firebase এর স্পেসিফিক এরর মেসেজ দেখানো
      const errorMessage =
        error.response?.data?.error?.message || error.message;

      Swal.fire({
        title: "Error!",
        text: errorMessage,
        icon: "error",
        confirmButtonColor: "#EF4444",
      });
    }
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
        navigate("/");
      })
      .catch((error) => {
        Swal.fire({
          title: "Login Failed",
          text: error.message,
          icon: "error",
          confirmButtonColor: "#EF4444",
        });
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
              {...register("name", { required: "Name is required" })}
              className="input input-bordered w-full focus:border-[#CAEB66] outline-none"
              placeholder="Enter your name"
            />
            {errors.name && (
              <p className="text-red-500 text-sm mt-1">{errors.name.message}</p>
            )}
          </div>

          {/* Photo Field */}
          <div className="form-control w-full">
            <label className="label font-semibold text-gray-700">Photo</label>
            <input
              type="file"
              {...register("photo", { required: "Photo is required" })}
              className="file-input file-input-bordered w-full focus:border-[#CAEB66] outline-none"
            />
            {errors.photo && (
              <p className="text-red-500 text-sm mt-1">
                {errors.photo.message}
              </p>
            )}
          </div>

          {/* Email Field */}
          <div className="form-control w-full">
            <label className="label font-semibold text-gray-700">
              Email Address
            </label>
            <input
              type="email"
              {...register("email", { required: "Email is required" })}
              className="input input-bordered w-full focus:border-[#CAEB66] outline-none"
              placeholder="Email"
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
              placeholder="Password"
            />
            {errors.password && (
              <p className="text-red-500 text-sm mt-1">
                {errors.password.message}
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

          {/* Google Login */}
          <button
            type="button"
            onClick={handelGoogleLogin}
            className="btn bg-white text-black border-[#e5e5e5]"
          >
            <svg width="16" height="16" viewBox="0 0 512 512">
              <path fill="#fff" d="m0 0H512V512H0" />
              <path
                fill="#34a853"
                d="M153 292c30 82 118 95 171 60h62v48A192 192 0 0190 341"
              />
              <path
                fill="#4285f4"
                d="m386 400a140 175 0 0053-179H260v74h102q-7 37-38 57"
              />
              <path
                fill="#fbbc02"
                d="m90 341a208 200 0 010-171l63 49q-12 37 0 73"
              />
              <path
                fill="#ea4335"
                d="m153 219c22-69 116-109 179-50l55-54c-78-75-230-72-297 55"
              />
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
