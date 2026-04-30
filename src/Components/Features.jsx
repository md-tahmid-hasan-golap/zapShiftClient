import safeImg from "../../src/assets/banner/safe-delivery.png";
import supportImg from "../../src/assets/banner/live-tracking.png";

const Features = () => {
  const features = [
    {
      title: "Live Parcel Tracking",
      desc: "Stay updated in real-time with our live parcel tracking feature. From pick-up to delivery, monitor your shipment's journey and get instant status updates for complete peace of mind.",
      image: supportImg,
    },
    {
      title: "100% Safe Delivery",
      desc: "We ensure your parcels are handled with the utmost care and delivered securely to their destination. Our reliable process guarantees safe and damage-free delivery every time.",
      image: safeImg,
    },
    {
      title: "24/7 Call Center Support",
      desc: "Our dedicated support team is available around the clock to assist you with any questions, updates, or delivery concerns—anytime you need us.",
      image: supportImg,
    },
  ];

  return (
    <div className="max-w-6xl mx-auto px-4 py-10 space-y-6">
      {features.map((feature, index) => (
        <div
          key={index}
          className="flex flex-col md:flex-row items-center bg-white rounded-2xl shadow-sm border border-gray-100 p-6 md:p-8 gap-6 hover:shadow-md transition-all duration-300"
        >
          {/* Image Section - Choto kora hoyeche */}
          <div className="w-full md:w-1/4 flex justify-center items-center">
            <img
              src={feature.image}
              alt={feature.title}
              className="h-32 md:h-40 w-auto object-contain" // Height komiye deya hoyeche
            />
          </div>

          {/* Vertical Divider */}
          <div className="hidden md:block h-24 border-l border-dotted border-gray-300 mx-2"></div>

          {/* Text Section */}
          <div className="w-full md:w-3/4 text-center md:text-left">
            <h3 className="text-[#03464D] text-xl md:text-2xl font-bold mb-3">
              {feature.title}
            </h3>
            <p className="text-gray-500 text-sm md:text-base leading-relaxed">
              {feature.desc}
            </p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Features;
