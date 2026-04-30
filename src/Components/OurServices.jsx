import service from "../../src/assets/banner/service.png";

const OurServices = () => {
  const services = [
    {
      title: "Express & Standard Delivery",
      desc: "We deliver parcels within 24-72 hours in Dhaka, Chittagong, Sylhet, Khulna, and Rajshahi. Express delivery available in Dhaka within 4-6 hours from pick-up to drop-off.",
    },
    {
      title: "Nationwide Delivery",
      desc: "We deliver parcels nationwide with home delivery in every district, ensuring your products reach customers within 48-72 hours.",
      highlight: true, // highlighted card
    },
    {
      title: "Fulfillment Solution",
      desc: "We also offer customized service with inventory management support, online order processing, packaging, and after sales support.",
    },
    {
      title: "Cash on Home Delivery",
      desc: "100% cash on delivery anywhere in Bangladesh with guaranteed safety of your product.",
    },
    {
      title: "Corporate Service / Contract In Logistics",
      desc: "Customized corporate services which includes warehouse and inventory management support.",
    },
    {
      title: "Parcel Return",
      desc: "Through our reverse logistics facility we allow end customers to return or exchange their products with online business merchants.",
    },
  ];

  return (
    <div className="bg-[#03464D] py-20 px-6 rounded-[40px] mb-6">
      {/* Header */}
      <div className="text-center mb-16">
        <h2 className="text-white text-3xl md:text-4xl font-bold mb-4">
          Our Services
        </h2>
        <p className="text-white/80 text-sm md:text-base max-w-2xl mx-auto leading-relaxed">
          Enjoy fast, reliable parcel delivery with real-time tracking and zero
          hassle. From personal packages to business shipments — we deliver on
          time, every time.
        </p>
      </div>

      {/* Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-7xl mx-auto">
        {services.map((item, index) => (
          <div
            key={index}
            className={`${
              item.highlight ? "bg-[#B4E34C] text-black" : "bg-white text-black"
            } p-8 rounded-[30px] flex flex-col items-center text-center shadow-lg transition-transform hover:scale-[1.02] duration-300`}
          >
            {/* Image Icon with Circle Wrapper */}
            <div className="w-16 h-16 bg-[#E8F0FE] rounded-full flex items-center justify-center mb-6 overflow-hidden">
              <img
                src={service}
                alt={item.title}
                className="w-10 h-10 object-contain"
              />
            </div>

            {/* Content */}
            <h3 className="text-xl font-bold mb-4 leading-snug px-4">
              {item.title}
            </h3>
            <p
              className={`${item.highlight ? "text-black/80" : "text-gray-600"} text-sm leading-relaxed`}
            >
              {item.desc}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default OurServices;
