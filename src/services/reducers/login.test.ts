import { getLoginReducer as reducer, initialState as state } from "./login";
import { getLoginSuccess } from "../actions/login";
import { logoutSuccess } from "../actions/logout";

describe("authorization reducer test", () => {
  it("should handle user authorization success", () => {
    expect(reducer(state, getLoginSuccess(true))).toEqual({
      login: true,
    });
  });
  it("should handle user logout success", () => {
    expect(reducer(state, logoutSuccess(true))).toEqual({
      login: false,
    });
  });
});
