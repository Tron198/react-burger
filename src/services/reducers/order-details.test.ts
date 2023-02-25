import {
  orderDetailsReducer as reducer,
  initialState as state,
} from "./order-details";
import { deleteOrderSuccess, getOrderSuccess } from "../actions/order-details";
import { number } from "../../utils/test-constants";

describe("order-details reducer test", () => {
  it("should handle get order details success", () => {
    expect(reducer(state, getOrderSuccess(number))).toEqual({
      number: number,
    });
  });
  it("should return the initial state if delete order number", () => {
    expect(reducer({ ...state, number: number }, deleteOrderSuccess())).toEqual(
      state
    );
  });
});
