import parcelVector from "../../src/assets/banner/location-merchant.png"; // Image-er vector file-ti ekhane use koro

const MerchantCTA = () => {
  return (
    <div className="max-w-7xl mx-auto px-4 py-10">
      <div className="bg-[#03464D] rounded-[40px] p-8 md:p-16 flex flex-col md:flex-row items-center justify-between relative overflow-hidden">
        {/* Background Subtle Wave Effect (Optional) */}
        <div className="absolute top-0 right-0 opacity-20 pointer-events-none">
          {/* Tumi chaile ekhane kono wave svg ba pattern dite paro */}
        </div>

        {/* Text Content */}
        <div className="w-full md:w-3/5 text-left z-10">
          <h2 className="text-white text-xl md:text-3xl font-bold mb-6 leading-tight">
            Merchant and Customer Satisfaction{" "}
            <br className="hidden md:block" />
            is Our First Priority
          </h2>
          <p className="text-gray-300 text-sm md:text-lg mb-10 max-w-xl leading-relaxed">
            We offer the lowest delivery charge with the highest value along
            with 100% safety of your product. ZapShift courier delivers your
            parcels in every corner of Bangladesh right on time.
          </p>

          {/* Buttons */}
          <div className="flex flex-wrap gap-4">
            <button className="bg-[#B4E34C] text-black font-bold py-3 px-8 rounded-full hover:bg-[#a2cc43] transition-all shadow-lg">
              Become a Merchant
            </button>
            <button className="border border-[#B4E34C] text-white font-medium py-3 px-8 rounded-full hover:bg-[#B4E34C]/10 transition-all">
              Earn with ZapShift Courier
            </button>
          </div>
        </div>

        {/* Vector Image Section */}
        <div className="w-full md:w-2/5 mt-10 md:mt-0 flex justify-center md:justify-end z-10">
          <img
            src={parcelVector}
            alt="Parcel Vector"
            className="w-64 md:w-full max-w-md object-contain opacity-80"
          />
        </div>
      </div>
    </div>
  );
};

export default MerchantCTA;
