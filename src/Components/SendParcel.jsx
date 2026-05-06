import { useContext } from "react";
import { useForm } from "react-hook-form";
import { useLoaderData } from "react-router";
import { AuthContext } from "../firebase/FirebaseAuthProvider";
import Swal from "sweetalert2";
import UseAxiussecure from "./UseAxiussecure";

const SendParcel = () => {
  const { register, handleSubmit, watch } = useForm();
  const axiusSecure = UseAxiussecure();
  const { user } = useContext(AuthContext);
  const ServiceCenters = useLoaderData();
  const regionsDuplicate = ServiceCenters.map((c) => c.region);
  const regions = [...new Set(regionsDuplicate)];
  const senderRegion = watch("senderRegion");
  const receiverRegion = watch("receiverRegion");
  const districByRegion = (region) => {
    const regionDistric = ServiceCenters.filter((c) => c.region === region);
    const distics = regionDistric.map((d) => d.district);
    return distics;
  };

  const handerSendAParcel = (data) => {
    const isDocument = data.parcelType === "Document";
    const sameDistrict = data.senderDistrict === data.receiverDistrict;
    const parcelWeight = parseFloat(data.parcelWeight);
    let cost = 0;
    if (isDocument) {
      cost = sameDistrict ? 60 : 80;
    } else {
      if (parcelWeight <= 3) {
        cost = sameDistrict ? 110 : 150;
      } else {
        const minCharge = sameDistrict ? 110 : 150;
        const extraWeight = parcelWeight - 3;
        const extraCharge = sameDistrict
          ? extraWeight * 40
          : extraWeight * 40 + 40;
        cost = minCharge + extraCharge;
      }
    }
    console.log("Parcel Data:", data);
    console.log("Calculated Cost:", cost);
    Swal.fire({
      title: "Agree with the Cost?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, agree!",
    }).then((result) => {
      if (result.isConfirmed) {
        axiusSecure.post("/parcels", data).then((res) => {
          console.log("Server Response:", res.data);
        });
        // Swal.fire({
        //   title: "Agreed!",
        //   text: "Your parcel has been sent.",
        //   icon: "success",
        // });
      }
    });
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
                  Sender Name
                </label>
                <input
                  type="text"
                  {...register("senderName", { required: true })}
                  defaultValue={user?.displayName}
                  className="input input-bordered w-full rounded-lg"
                  placeholder="Sender Name"
                />
              </div>
              <div>
                <label className="label text-gray-700 font-semibold">
                  Sender Email
                </label>
                <input
                  type="email"
                  {...register("senderEmail", { required: true })}
                  defaultValue={user?.email}
                  className="input input-bordered w-full rounded-lg"
                  placeholder="Sender Email"
                />
              </div>
              <div>
                <label className="label text-gray-700 font-semibold">
                  Sender Address
                </label>
                <input
                  type="text"
                  {...register("senderAddress", { required: true })}
                  className="input input-bordered w-full rounded-lg"
                  placeholder="Full Address"
                />
              </div>
              <fieldset className="fieldset ">
                <legend className="fieldset-legend ">Sender Regions</legend>
                <select
                  {...register("senderRegion")}
                  defaultValue="Pick a Region"
                  className="select w-full"
                >
                  <option disabled={true}>Pick a Region</option>
                  {regions.map((r, index) => (
                    <option key={index} value={r}>
                      {r}
                    </option>
                  ))}
                </select>
              </fieldset>
              <fieldset className="fieldset">
                <legend className="fieldset-legend">Sender district</legend>
                <select
                  {...register("senderDistrict")}
                  defaultValue="Pick a District"
                  className="select w-full"
                >
                  <option disabled={true}>Pick a District</option>
                  {districByRegion(senderRegion).map((r, index) => (
                    <option key={index} value={r}>
                      {r}
                    </option>
                  ))}
                </select>
              </fieldset>

              <div>
                <label className="label text-gray-700 font-semibold">
                  Sender Phone
                </label>
                <input
                  type="text"
                  {...register("senderPhone", { required: true })}
                  className="input input-bordered w-full rounded-lg"
                  placeholder="017XXXXXXXX"
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
                  Receiver Name
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
                  Receiver Email
                </label>
                <input
                  type="email"
                  {...register("receiverEmail", { required: true })}
                  className="input input-bordered w-full rounded-lg"
                  placeholder="Receiver Email"
                />
              </div>
              <div>
                <label className="label text-gray-700 font-semibold">
                  Receiver Address
                </label>
                <input
                  type="text"
                  {...register("receiverAddress", { required: true })}
                  className="input input-bordered w-full rounded-lg"
                  placeholder="Full Address"
                />
              </div>
              <fieldset className="fieldset ">
                <legend className="fieldset-legend ">Receiver Regions</legend>
                <select
                  {...register("receiverRegion")}
                  defaultValue="Pick a Region"
                  className="select w-full"
                >
                  <option disabled={true}>Pick a Region</option>
                  {regions.map((r, index) => (
                    <option key={index} value={r}>
                      {r}
                    </option>
                  ))}
                </select>
              </fieldset>
              <fieldset className="fieldset ">
                <legend className="fieldset-legend ">Receiver Districts</legend>
                <select
                  {...register("receiverDistrict")}
                  defaultValue="Pick a District"
                  className="select w-full"
                >
                  <option disabled={true}>Pick a District</option>
                  {districByRegion(receiverRegion).map((d, index) => (
                    <option key={index} value={d}>
                      {d}
                    </option>
                  ))}
                </select>
              </fieldset>
              <div>
                <label className="label text-gray-700 font-semibold">
                  Receiver Phone
                </label>
                <input
                  type="text"
                  {...register("receiverPhone", { required: true })}
                  className="input input-bordered w-full rounded-lg"
                  placeholder="018XXXXXXXX"
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
