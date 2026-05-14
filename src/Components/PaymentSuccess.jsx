import { useEffect, useState } from "react";
import { useSearchParams } from "react-router";
import UseAxiussecure from "./UseAxiussecure";

const PaymentSuccess = () => {
  const [searchParams] = useSearchParams();
  const [paymentInfo, setPaymentInfo] = useState();
  const sessionId = searchParams.get("session_id");
  const axiusSecure = UseAxiussecure();
  console.log("Session ID:", sessionId);
  useEffect(() => {
    if (sessionId) {
      // Handle successful payment logic here
      axiusSecure
        .patch(`/payment-success?session_id=${sessionId}`)
        .then((res) => {
          console.log("Payment success response:", res.data);
          setPaymentInfo({
            transactionId: res.data.transactionId,
            trackingId: res.data.trackingId,
          });
        })
        .catch((error) => {
          console.error("Error handling payment success:", error);
        });
    }
  }, [sessionId, axiusSecure]);
  return (
    <div>
      <h2>Payment Successful!</h2>
      <p>Transaction ID: {paymentInfo?.transactionId}</p>
      <p>Tracking ID: {paymentInfo?.trackingId}</p>
    </div>
  );
};

export default PaymentSuccess;
