import { apiBurger } from "../../utils/api";

export const GET_ORDER_REQUEST = "GET_ORDER_REQUEST";
export const GET_ORDER_SUCCESS = "GET_ORDER_SUCCESS";
export const GET_ORDER_ERROR = "GET_ORDER_ERROR";

export const getOrderSuccess = (number) => ({
  type: GET_ORDER_SUCCESS,
  number,
});

export function getOrderNumber(idList) {
  return (dispatch) =>
    apiBurger
      .requestOrderDetails(idList)
      .then(({ order: { number } }) => {
        dispatch(getOrderSuccess(number));
      })
      .catch((error) => {
        console.log(error);
      });
}
