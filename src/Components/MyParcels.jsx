import { useQuery } from "@tanstack/react-query";
import { useContext } from "react";
import { AuthContext } from "../firebase/FirebaseAuthProvider";
import UseAxiussecure from "./UseAxiussecure";
import { FaEdit, FaEye, FaTrashAlt } from "react-icons/fa";

const MyParcels = () => {
  const { user } = useContext(AuthContext);
  const axiusSecure = UseAxiussecure();
  const { data: parcels = [] } = useQuery({
    queryKey: ["myParcels", user?.email],
    queryFn: async () => {
      const res = await axiusSecure.get(`/myParcel/${user?.email}`);
      return res.data;
    },
  });

  return (
    <div>
      <h2>This is My Parcels {parcels.length}</h2>
      <div className="overflow-x-auto">
        <table className="table table-zebra">
          {/* head */}
          <thead>
            <tr>
              <th></th>
              <th>Name</th>
              <th>Cost</th>
              <th>Payment Status</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {parcels.map((parcel, index) => (
              <tr key={parcel._id}>
                <th>{index + 1}</th>
                <td>{parcel.parcelName}</td>
                <td>{parcel.cost}</td>
                <td>Payment Status</td>
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
