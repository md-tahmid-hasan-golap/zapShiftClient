import { Link } from "react-router";
import { FaTruck, FaShieldAlt, FaClock } from "react-icons/fa"; // react-icons install thakle use korben

const AboutUs = () => {
  return (
    <div className="bg-white min-h-screen">
      {/* Hero Section */}
      <div className="bg-[#f9fafb] py-16 px-4 md:px-10 lg:px-20 text-center">
        <h1 className="text-4xl md:text-5xl font-extrabold text-gray-800 mb-4">
          About <span className="text-[#a6c44a]">ZapShift</span>
        </h1>
        <p className="text-gray-600 max-w-2xl mx-auto text-lg">
          We are dedicated to providing the fastest and most reliable delivery
          service in Bangladesh. Connecting 64 districts with speed and care.
        </p>
      </div>

      {/* Stats Section */}
      <div className="py-12 grid grid-cols-1 md:grid-cols-3 gap-8 px-4 md:px-10 lg:px-20 -mt-10">
        <div className="bg-white p-8 rounded-2xl shadow-lg border-t-4 border-[#CAEB66] text-center">
          <h3 className="text-3xl font-bold text-gray-800">64+</h3>
          <p className="text-gray-500">Districts Covered</p>
        </div>
        <div className="bg-white p-8 rounded-2xl shadow-lg border-t-4 border-[#CAEB66] text-center">
          <h3 className="text-3xl font-bold text-gray-800">1M+</h3>
          <p className="text-gray-500">Happy Customers</p>
        </div>
        <div className="bg-white p-8 rounded-2xl shadow-lg border-t-4 border-[#CAEB66] text-center">
          <h3 className="text-3xl font-bold text-gray-800">24/7</h3>
          <p className="text-gray-500">Support Available</p>
        </div>
      </div>

      {/* Mission & Vision */}
      <div className="py-16 px-4 md:px-10 lg:px-20 grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
        <div>
          <h2 className="text-3xl font-bold text-gray-800 mb-6">Our Mission</h2>
          <p className="text-gray-600 leading-relaxed">
            Our mission is to simplify logistics for businesses and individuals.
            Whether it's a small parcel or a large shipment, ZapShift ensures
            that your goods reach their destination safely and within the
            promised time frame. We leverage technology to make tracking and
            delivery seamless.
          </p>
          <button className="mt-6 px-6 py-3 bg-[#CAEB66] font-bold rounded-lg hover:bg-[#b8d65a] transition-all">
            Join Our Journey
          </button>
        </div>
        <div className="rounded-3xl overflow-hidden shadow-2xl">
          <img
            src="https://images.unsplash.com/photo-1586769852044-692d6e39241d?q=80&w=1000&auto=format&fit=crop"
            alt="Delivery team"
            className="w-full h-full object-cover"
          />
        </div>
      </div>

      {/* Why Choose Us */}
      <div className="bg-gray-50 py-16 px-4 md:px-10 lg:px-20">
        <h2 className="text-3xl font-bold text-center text-gray-800 mb-12">
          Why Choose Us?
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="flex flex-col items-center text-center p-6 bg-white rounded-xl shadow-sm">
            <div className="w-16 h-16 bg-[#f2fbda] text-[#a6c44a] rounded-full flex items-center justify-center text-2xl mb-4">
              🚚
            </div>
            <h4 className="text-xl font-bold mb-2">Fast Delivery</h4>
            <p className="text-gray-500">
              Express shipping options for your urgent needs.
            </p>
          </div>
          <div className="flex flex-col items-center text-center p-6 bg-white rounded-xl shadow-sm">
            <div className="w-16 h-16 bg-[#f2fbda] text-[#a6c44a] rounded-full flex items-center justify-center text-2xl mb-4">
              🛡️
            </div>
            <h4 className="text-xl font-bold mb-2">Secure Handling</h4>
            <p className="text-gray-500">
              Safety of your package is our top priority.
            </p>
          </div>
          <div className="flex flex-col items-center text-center p-6 bg-white rounded-xl shadow-sm">
            <div className="w-16 h-16 bg-[#f2fbda] text-[#a6c44a] rounded-full flex items-center justify-center text-2xl mb-4">
              📍
            </div>
            <h4 className="text-xl font-bold mb-2">Real-time Tracking</h4>
            <p className="text-gray-500">
              Know where your parcel is at any given time.
            </p>
          </div>
        </div>
      </div>

      {/* Call to Action */}
      <div className="py-20 text-center">
        <h2 className="text-3xl font-bold mb-6">Ready to send something?</h2>
        <Link
          to="/register"
          className="btn bg-[#CAEB66] hover:bg-[#b8d65a] border-none px-10 font-bold"
        >
          Get Started Now
        </Link>
      </div>
    </div>
  );
};

export default AboutUs;
