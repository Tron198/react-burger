import {
  registrationReducer as reducer,
  initialState as state,
} from "./register";
import { registrationSuccess } from "../actions/register";
import { user } from "../../utils/test-constants";

describe("registration reducer test", () => {
  it("should handle registration success", () => {
    expect(
      reducer(state, registrationSuccess({ success: true, user: user }))
    ).toEqual({
      success: true,
      user: user,
    });
  });
  it("should return the initial state if registration failed", () => {
    expect(
      reducer(
        state,
        registrationSuccess({ success: false, user: { email: "", name: "" } })
      )
    ).toEqual(state);
  });
});
