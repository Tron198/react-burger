import React, { useCallback, useState } from "react";
import styles from "./pages.module.css";
import { useSelector } from "../services/hooks/hooks";
import { BurgerIngredients } from "../components/burger-ingredients/burger-ingredients";
import { BurgerConstructor } from "../components/burger-constructor/burger-constructor";
import { PriceCount } from "../components/price-count/price-count";
import { useHistory } from "react-router-dom";
import {
  getOrderNumber,
  deleteOrderSuccess,
} from "../services/actions/order-details";
import { useDispatch } from "../services/hooks/hooks";
import { Modal } from "../components/modal/modal";
import { OrderDetails } from "../components/order-details/order-details";
import { clearConstructor } from "../services/actions/ingredients-constructor";

export const Main = () => {
  const dispatch = useDispatch();
  const history = useHistory();
  const authorization = useSelector((state) => state.getLogin.login);

  const main = useSelector((state) => state.constructorList.constructorList);
  const buns = useSelector((state) => state.constructorList.buns);
  const mainList = main.map((element) => element._id);
  const bunsList = buns.map((element) => element._id);
  const idList = mainList.concat(bunsList).concat(bunsList);

  const [openOrderModal, setOrderOpenModal] = useState(false);

  const handleOrderOpenModal = useCallback(() => {
    if (!authorization) {
      history.replace({ pathname: `/login` });
    } else {
      setOrderOpenModal(true);
      dispatch(getOrderNumber(idList));
    }
  }, []);

  const closeOrderModal = useCallback(() => {
    setOrderOpenModal(false);
    dispatch(deleteOrderSuccess());
    dispatch(clearConstructor());
  }, []);

  return (
    <>
      <main className={styles.main}>
        <BurgerIngredients />
        <div className={styles.twoBlocks}>
          <BurgerConstructor />
          {buns.length > 0 ? (
            <PriceCount onClick={handleOrderOpenModal} />
          ) : null}
        </div>
      </main>

      {openOrderModal && (
        <Modal onClose={closeOrderModal}>
          <OrderDetails />
        </Modal>
      )}
    </>
  );
};
