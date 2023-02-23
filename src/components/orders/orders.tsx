import styles from "./orders.module.css";
import { useSelector } from "../../services/hooks/hooks";

export const Orders = () => {
  const total = useSelector((store) => store.webSocket.total);
  const totalToday = useSelector((store) => store.webSocket.totalToday);
  const orders = useSelector((store) => store.webSocket.orders);

  return (
    <section className={`${styles.orders} ml-4 mt-25`}>
      <div className={styles.ordersStatus}>
        <div className={styles.title}>
          <h3 className="text text_type_main-medium">Готовы:</h3>
          <ul className={styles.list}>
            {orders &&
              orders.slice(0, 30).map((order) => {
                if (order.status === "done") {
                  return (
                    <li
                      key={order._id}
                      className={`${styles.textColor} text text_type_digits-default`}
                    >
                      {order.number}
                    </li>
                  );
                }
              })}
          </ul>
        </div>
        <div className={styles.title}>
          <h3 className="text text_type_main-medium">В работе:</h3>
          <ul className={styles.list}>
            {orders.map((order) => {
              if (order.status === "pending") {
                return (
                  <li key={order._id} className="text text_type_digits-default">
                    {order.number}
                  </li>
                );
              }
            })}
          </ul>
        </div>
      </div>
      <div>
        <h3 className="text text_type_main-medium">Выполнено за все время:</h3>
        <p className={`${styles.counter} text text_type_digits-large`}>
          {total}
        </p>
      </div>
      <div>
        <h3 className="text text_type_main-medium">Выполнено за сегодня:</h3>
        <p className={`${styles.counter} text text_type_digits-large`}>
          {totalToday}
        </p>
      </div>
    </section>
  );
};
