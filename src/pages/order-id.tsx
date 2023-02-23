import { useEffect } from "react";
import { OrderInfoUser } from "../components/order-info-user/order-info-user";
import {
  wsConnectionClosedUser,
  wsConnectionStartUser,
} from "../services/actions/wsActions";
import { useDispatch } from "../services/hooks/hooks";

export const OrderId = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(wsConnectionStartUser());
    return () => {
      dispatch(wsConnectionClosedUser());
    };
  }, []);

  return (
    <>
      <OrderInfoUser />
    </>
  );
};
