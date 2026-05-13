import { useQuery } from "@tanstack/react-query";
import { useParams } from "react-router";
import UseAxiussecure from "./UseAxiussecure";

const Pay = () => {
  const { id } = useParams();
  const axiusSecure = UseAxiussecure();
  const { data: parcel } = useQuery({
    queryKey: ["pay", id],
    queryFn: async () => {
      // Fetch parcel details using the id.
      const res = await axiusSecure.get(`/parcel/${id}`);
      return res.data;
    },
  });

  const handelPayment = async () => {
    const paymentInfo = {
      cost: parcel.cost,
      parcelId: parcel._id,
      senderEmail: parcel.senderEmail,
      parcelName: parcel.parcelName,
    };
    const res = await axiusSecure.post("/create-checkout-session", paymentInfo);
    console.log(res.data);
    window.location.href = res.data.url;
  };
  return (
    <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
      <h2 className="text-xl sm:text-2xl font-semibold break-words">
        {parcel?.parcelName}
        <span className="text-[#ACC857] ml-2">T.K {parcel?.cost}</span>
      </h2>

      <button
        onClick={handelPayment}
        className="w-full sm:w-auto font-bold btn bg-[#ACC857] text-black"
      >
        Pay Now
      </button>
    </div>
  );
};

export default Pay;
