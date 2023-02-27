import {
  passwordResetReducer as reducer,
  initialState as state,
} from "./password-reset";
import { passwordResetSuccess } from "../actions/password-reset";

describe("reset-password reducer test", () => {
  it("should handle reset-password success", () => {
    expect(reducer(state, passwordResetSuccess(true))).toEqual({
      success: true,
    });
  });
  it("should return the initial state if handle reset-password failed", () => {
    expect(reducer(state, passwordResetSuccess(false))).toEqual(state);
  });
});
