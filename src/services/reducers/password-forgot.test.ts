import {
  passwordForgotReducer as reducer,
  initialState as state,
} from "./password-forgot";
import { passwordForgotSuccess } from "../actions/password-forgot";

describe("forgot-password reducer test", () => {
  it("should handle forgot-password success", () => {
    expect(reducer(state, passwordForgotSuccess(true))).toEqual({
      success: true,
    });
  });
  it("should return the initial state if handle forgot-password failed", () => {
    expect(reducer(state, passwordForgotSuccess(false))).toEqual(state);
  });
});
