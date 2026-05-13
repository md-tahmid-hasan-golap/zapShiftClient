import { Link } from "react-router";

const Paymentcancel = () => {
  return (
    <div>
      <h2>Payment Cancelled</h2>
      <p>Your payment was cancelled.</p>
      <Link
        to="/dashboard/myParcels"
        className="btn bg-[#ACC857] text-black mt-4"
      >
        Back to My Parcels
      </Link>
    </div>
  );
};

export default Paymentcancel;
