import { useForm } from "react-hook-form";

const SendParcel = () => {
  const { register, handleSubmit } = useForm();

  const handerSendAParcel = (data) => {
    console.log(data);
  };

  return (
    <div className="max-w-5xl mx-auto px-4 py-10 md:py-20">
      {/* Header Section */}
      <div className="mb-10">
        <h1 className="text-3xl font-extrabold text-gray-900 sm:text-4xl mb-6">
          Send Parcel
        </h1>
        <p className="text-base text-gray-700 font-semibold mb-3">
          Enter your parcel details
        </p>
        <div className="w-full border-t-2 border-gray-200"></div>
      </div>

      <form onSubmit={handleSubmit(handerSendAParcel)} className="space-y-10">
        {/* Radio Group */}
        <div className="flex flex-wrap items-center gap-8 bg-gray-50 p-4 rounded-xl">
          <label className="flex items-center gap-3 cursor-pointer group">
            <input
              {...register("parcelType")}
              type="radio"
              value="Document"
              defaultChecked
              className="w-5 h-5 cursor-pointer accent-[#D4ED79]"
            />
            <span className="text-gray-800 font-medium group-hover:text-black transition-colors">
              Document
            </span>
          </label>

          <label className="flex items-center gap-3 cursor-pointer group">
            <input
              {...register("parcelType")}
              type="radio"
              value="Not-Document"
              className="w-5 h-5 cursor-pointer accent-[#D4ED79]"
            />
            <span className="text-gray-800 font-medium group-hover:text-black transition-colors">
              Not-Document
            </span>
          </label>
        </div>

        {/* Parcel Name & Weight */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="form-control w-full">
            <label className="label text-gray-900 font-bold">Parcel Name</label>
            <input
              type="text"
              {...register("parcelName", { required: true })}
              className="input input-bordered w-full focus:outline-none focus:ring-2 focus:ring-[#D4ED79] rounded-lg"
              placeholder="Ex: Electronics, Books..."
            />
          </div>
          <div className="form-control w-full">
            <label className="label text-gray-900 font-bold">
              Parcel Weight (KG)
            </label>
            <input
              type="number"
              {...register("parcelWeight", { required: true, min: 0 })}
              className="input input-bordered w-full focus:outline-none focus:ring-2 focus:ring-[#D4ED79] rounded-lg"
              placeholder="0.00"
              step="0.01"
            />
          </div>
        </div>

        <div className="border-t border-gray-200"></div>

        {/* Sender & Receiver Details */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Sender Details */}
          <div className="space-y-4">
            <h2 className="text-xl font-bold text-gray-800 border-l-4 border-[#D4ED79] pl-3 mb-6">
              Sender Details
            </h2>
            <div className="space-y-4">
              <div>
                <label className="label text-gray-700 font-semibold">
                  Name
                </label>
                <input
                  type="text"
                  {...register("senderName", { required: true })}
                  className="input input-bordered w-full rounded-lg"
                  placeholder="Sender Name"
                />
              </div>
              <div>
                <label className="label text-gray-700 font-semibold">
                  Address
                </label>
                <input
                  type="text"
                  {...register("senderAddress", { required: true })}
                  className="input input-bordered w-full rounded-lg"
                  placeholder="Full Address"
                />
              </div>
              <div>
                <label className="label text-gray-700 font-semibold">
                  Phone
                </label>
                <input
                  type="text"
                  {...register("senderPhone", { required: true })}
                  className="input input-bordered w-full rounded-lg"
                  placeholder="017XXXXXXXX"
                />
              </div>
              <div>
                <label className="label text-gray-700 font-semibold">
                  District
                </label>
                <input
                  type="text"
                  {...register("senderDistrict", { required: true })}
                  className="input input-bordered w-full rounded-lg"
                  placeholder="District"
                />
              </div>
            </div>
          </div>

          {/* Receiver Details */}
          <div className="space-y-4">
            <h2 className="text-xl font-bold text-gray-800 border-l-4 border-[#D4ED79] pl-3 mb-6">
              Receiver Details
            </h2>
            <div className="space-y-4">
              <div>
                <label className="label text-gray-700 font-semibold">
                  Name
                </label>
                <input
                  type="text"
                  {...register("receiverName", { required: true })}
                  className="input input-bordered w-full rounded-lg"
                  placeholder="Receiver Name"
                />
              </div>
              <div>
                <label className="label text-gray-700 font-semibold">
                  Address
                </label>
                <input
                  type="text"
                  {...register("receiverAddress", { required: true })}
                  className="input input-bordered w-full rounded-lg"
                  placeholder="Full Address"
                />
              </div>
              <div>
                <label className="label text-gray-700 font-semibold">
                  Phone
                </label>
                <input
                  type="text"
                  {...register("receiverPhone", { required: true })}
                  className="input input-bordered w-full rounded-lg"
                  placeholder="018XXXXXXXX"
                />
              </div>
              <div>
                <label className="label text-gray-700 font-semibold">
                  District
                </label>
                <input
                  type="text"
                  {...register("receiverDistrict", { required: true })}
                  className="input input-bordered w-full rounded-lg"
                  placeholder="District"
                />
              </div>
            </div>
          </div>
        </div>

        {/* Submit Button */}
        <div className="pt-8 border-t border-gray-100 flex justify-center sm:justify-start">
          <button
            type="submit"
            className="w-full sm:w-auto px-12 py-4 bg-[#D4ED79] text-gray-900 font-bold rounded-2xl shadow-lg hover:bg-[#c1d96b] transition-all transform active:scale-95 text-lg"
          >
            Proceed to Confirm Booking
          </button>
        </div>
      </form>
    </div>
  );
};

export default SendParcel;
