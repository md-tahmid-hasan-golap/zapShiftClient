import { useQuery } from "@tanstack/react-query";
import { useContext } from "react";
import { AuthContext } from "../firebase/FirebaseAuthProvider";
import UseAxiussecure from "./UseAxiussecure";
import { FaEdit, FaEye, FaTrashAlt } from "react-icons/fa";
import Swal from "sweetalert2";
import { Link } from "react-router";

const MyParcels = () => {
  const { user } = useContext(AuthContext);
  const axiusSecure = UseAxiussecure();
  const { data: parcels = [], refetch } = useQuery({
    queryKey: ["myParcels", user?.email],
    queryFn: async () => {
      const res = await axiusSecure.get(`/myParcel/${user?.email}`);
      return res.data;
    },
  });

  const handelParcelDelete = (id) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        axiusSecure.delete(`/deleteParcel/${id}`).then((res) => {
          // console.log("Delete Response:", res.data);
          if (res.data.deletedCount) {
            refetch();
            Swal.fire({
              title: "Deleted!",
              text: "Your parcel has been deleted.",
              icon: "success",
            });
            Swal.fire({
              title: "Deleted!",
              text: "Your Parcel has been deleted.",
              icon: "success",
            });
          }
        });
      }
    });
  };

  const handelPayment = (parcel) => {
    const handelPayment = async () => {
      const paymentInfo = {
        cost: parcel.cost,
        parcelId: parcel._id,
        senderEmail: parcel.senderEmail,
        parcelName: parcel.parcelName,
      };
      const res = await axiusSecure.post(
        "/create-checkout-session",
        paymentInfo,
      );
      console.log(res.data);
      window.location.href = res.data.url;
    };
    handelPayment();
  };

  return (
    <div>
      {/* <h2>This is My Parcels {parcels.length}</h2> */}
      <div className="overflow-x-auto">
        <table className="table table-zebra">
          {/* head */}
          <thead>
            <tr>
              <th></th>
              <th>Name</th>
              <th>Cost</th>
              <th>Payment Status</th>
              <th>Delivery Status</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {parcels.map((parcel, index) => (
              <tr key={parcel._id}>
                <th>{index + 1}</th>
                <td>{parcel.parcelName}</td>
                <td>{parcel.cost}</td>
                <td>
                  {parcel.paymentStatus === "paid" ? (
                    <span className="text-green-600 font-semibold">Paid</span>
                  ) : (
                    <button
                      onClick={() => handelPayment(parcel)}
                      className=" font-bold btn bg-[#ACC857]"
                    >
                      Pay
                    </button>
                  )}
                </td>
                <td>{parcel.deliveryStatus}</td>
                <td className="flex items-center gap-2">
                  {/* View/Details Button */}
                  <button
                    className="btn btn-ghost btn-sm text-blue-600 hover:bg-blue-100"
                    title="View Details"
                  >
                    <FaEye size={18} />
                  </button>

                  {/* Edit Button */}
                  <button
                    className="btn btn-ghost btn-sm text-green-600 hover:bg-green-100"
                    title="Edit"
                  >
                    <FaEdit size={18} />
                  </button>

                  {/* Delete Button */}
                  <button
                    onClick={() => handelParcelDelete(parcel._id)}
                    className="btn btn-ghost btn-sm text-red-600 hover:bg-red-100"
                    title="Delete"
                  >
                    <FaTrashAlt size={18} />
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default MyParcels;
