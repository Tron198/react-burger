import {
  ingredientDetailsReducer as reducer,
  initialState as state,
} from "./ingredient-details";
import {
  setIngredientDetails,
  deleteIngredientDetails,
} from "../actions/ingredient-details";
import { ingredientMain } from "../../utils/test-constants";

describe("ingredient-details reducer test", () => {
  it("should handle set ingredient details", () => {
    expect(reducer(state, setIngredientDetails(ingredientMain))).toEqual({
      ingredientDetails: ingredientMain,
    });
  });
  it("should return the initial state if delete ingredient details", () => {
    expect(
      reducer(
        { ...state, ingredientDetails: ingredientMain },
        deleteIngredientDetails()
      )
    ).toEqual(state);
  });
});
