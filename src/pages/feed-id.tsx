import { useEffect } from "react";
import { OrderInfo } from "../components/order-info/order-info";
import {
  wsConnectionClosed,
  wsConnectionStart,
} from "../services/actions/wsActions";
import { useDispatch } from "../services/hooks/hooks";

export const FeedId = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(wsConnectionStart());
    return () => {
      dispatch(wsConnectionClosed());
    };
  }, []);

  return (
    <>
      <OrderInfo />
    </>
  );
};
