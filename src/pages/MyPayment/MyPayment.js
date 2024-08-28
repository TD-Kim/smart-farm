import React, { useEffect } from "react";
import styles from "./MyPayment.module.scss";
import PaymentsList from "./PaymentsList";
import { useDispatch, useSelector } from "react-redux";
import PaymentEmpty from "../../components/payment-empty/PaymentEmpty";
import { fetchPayment } from "../../store/payment/paymentSlice";

function MyPayment() {
  const { payment, isLoading, error } = useSelector(
    (state) => state.paymentSlice
  );
  const { uid } = useSelector((state) => state.userSlice);
  const dispatch = useDispatch();

  useEffect(() => {
    if (uid) {
      dispatch(fetchPayment({ collectionName: ["users", uid, "payments"] }));
    }
  }, [uid, dispatch]);

  if (isLoading === true) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error}</div>;
  }

  return (
    <div className={styles.myPayments}>
      {payment.length === 0 ? (
        <PaymentEmpty title={"결제내역"} />
      ) : (
        <div className={styles.myPayment}>
          <h1>결제 내역</h1>
          <PaymentsList />
        </div>
      )}
    </div>
  );
}

export default MyPayment;
