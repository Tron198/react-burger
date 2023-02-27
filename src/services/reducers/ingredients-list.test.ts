import {
  ingredientsListReducer as reducer,
  initialState as state,
} from "./ingredients-list";
import { getIngredientsSuccess } from "../actions/ingredients-list";
import { ingredients } from "../../utils/test-constants";

describe("get ingredients reducer test", () => {
  it("should handle get burger ingredients success", () => {
    expect(reducer(state, getIngredientsSuccess(ingredients))).toEqual({
      ingredientsList: ingredients,
    });
  });
});
