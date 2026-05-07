import { useQuery } from "@tanstack/react-query";
import { useContext } from "react";
import { AuthContext } from "../firebase/FirebaseAuthProvider";
import UseAxiussecure from "./UseAxiussecure";

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
    </div>
  );
};

export default MyParcels;
