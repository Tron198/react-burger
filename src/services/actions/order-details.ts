import { apiBurger } from "../../utils/api";
import {
  GET_ORDER_SUCCESS,
  DELETE_ORDER_SUCCESS,
} from "../constants/constants";
import { IGetOrderSuccess, IDeleteOrderSuccess } from "../actions/interfaces";
import { AppThunk } from "../types/types";

export const getOrderSuccess = (number: string): IGetOrderSuccess => ({
  type: GET_ORDER_SUCCESS,
  payload: number,
});

export const deleteOrderSuccess = (): IDeleteOrderSuccess => ({
  type: DELETE_ORDER_SUCCESS,
});

export const getOrderNumber: AppThunk = (idList: string[]) => {
  return (dispatch) =>
    apiBurger
      .requestOrderDetails(idList)
      .then(({ order: { number } }) => {
        dispatch(getOrderSuccess(number));
      })
      .catch((error) => {
        console.log(error);
      });
};
