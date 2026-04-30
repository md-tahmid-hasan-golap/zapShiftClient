import booking from "../../src/assets/banner/bookingIcon.png";

const HowItWork = () => {
  return (
    <div className="py-12 px-4 max-w-7xl mx-auto">
      {/* Section Title */}
      <h2 className="text-3xl md:text-4xl font-bold text-center mb-10">
        How it <span className="text-blue-600">Works</span>
      </h2>

      {/* Parent Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
        {/* Child Card - 1 */}
        <div className="flex flex-col items-center text-center p-6 bg-white rounded-2xl shadow-sm hover:shadow-md transition-shadow duration-300 border border-gray-100">
          <div className="w-20 h-20 mb-4 bg-blue-50 rounded-full flex items-center justify-center p-4">
            <img
              src={booking}
              alt="Booking"
              className="w-full h-full object-contain"
            />
          </div>
          <h4 className="text-xl font-semibold mb-2">Booking Pick & Drop</h4>
          <p className="text-gray-600 text-sm">
            From personal packages to business shipments — we deliver on time,
            every time.
          </p>
        </div>

        {/* Child Card - 2 */}
        <div className="flex flex-col items-center text-center p-6 bg-white rounded-2xl shadow-sm hover:shadow-md transition-shadow duration-300 border border-gray-100">
          <div className="w-20 h-20 mb-4 bg-green-50 rounded-full flex items-center justify-center p-4">
            <img
              src={booking}
              alt="COD"
              className="w-full h-full object-contain"
            />
          </div>
          <h4 className="text-xl font-semibold mb-2">Cash On Delivery</h4>
          <p className="text-gray-600 text-sm">
            From personal packages to business shipments — we deliver on time,
            every time.
          </p>
        </div>

        {/* Child Card - 3 */}
        <div className="flex flex-col items-center text-center p-6 bg-white rounded-2xl shadow-sm hover:shadow-md transition-shadow duration-300 border border-gray-100">
          <div className="w-20 h-20 mb-4 bg-orange-50 rounded-full flex items-center justify-center p-4">
            <img
              src={booking}
              alt="Hub"
              className="w-full h-full object-contain"
            />
          </div>
          <h4 className="text-xl font-semibold mb-2">Delivery Hub</h4>
          <p className="text-gray-600 text-sm">
            From personal packages to business shipments — we deliver on time,
            every time.
          </p>
        </div>

        {/* Child Card - 4 */}
        <div className="flex flex-col items-center text-center p-6 bg-white rounded-2xl shadow-sm hover:shadow-md transition-shadow duration-300 border border-gray-100">
          <div className="w-20 h-20 mb-4 bg-purple-50 rounded-full flex items-center justify-center p-4">
            <img
              src={booking}
              alt="SME"
              className="w-full h-full object-contain"
            />
          </div>
          <h4 className="text-xl font-semibold mb-2">Booking SME</h4>
          <p className="text-gray-600 text-sm">
            From personal packages to business shipments — we deliver on time,
            every time.
          </p>
        </div>
      </div>
    </div>
  );
};

export default HowItWork;
