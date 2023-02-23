import styles from "./order-details.module.css";
import { useSelector } from "../../services/hooks/hooks";
import done from "../../images/done.png";
import Loader from "../loder/loader";

export const OrderDetails = () => {
  const orderId = useSelector((state) => state.orderDetails.id);

  if (!orderId) {
    return <Loader />;
  }
  return (
    <div className={styles.order}>
      <h3 className={`${styles.orderTitle} text text_type_digits-large mt-20`}>
        {orderId}
      </h3>
      <p className="text text_type_main-medium mt-8 mb-15">
        идентификатор заказа
      </p>
      <img src={done} alt="Готово!" />
      <p className="text text_type_main-default mt-15 mb-2">
        Ваш заказ начали готовить
      </p>
      <p className="text text_type_main-default text_color_inactive mb-30">
        Дождитесь готовности на орбитальной станции
      </p>
    </div>
  );
};
