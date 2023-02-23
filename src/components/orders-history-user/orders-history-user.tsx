import styles from "./orders-history-user.module.css";
import { OrderCard } from "../order-card/order-card";
import { useSelector } from "../../services/hooks/hooks";

export const OrdersHistoryUser = () => {
  const orders = useSelector((state) => state.webSocketUser.orders);

  return (
    <>
      <ul className={styles.scroll}>
        {orders.map((order) => (
          <li key={order._id}>
            <OrderCard order={order} />
          </li>
        ))}
      </ul>
    </>
  );
};
