import axios from "axios";

const Axiussecure = axios.create({
  baseURL: "http://localhost:3000",
});
const UseAxiussecure = () => {
  return Axiussecure;
};

export default UseAxiussecure;
