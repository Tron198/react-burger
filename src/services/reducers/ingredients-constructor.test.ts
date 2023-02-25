import {
  constructorListReducer as reducer,
  initialState as state,
} from "./ingredients-constructor";
import {
  setBun,
  addIngredient,
  deleteIngredient,
  moveIngredient,
  clearConstructor,
} from "../actions/ingredients-constructor";
import {
  craterBun,
  end,
  fluorescentBun,
  ingredientMain,
  ingredientSauce,
  start,
} from "../../utils/test-constants";

describe("ingredients-constructor reducer test", () => {
  it("should handle set bun", () => {
    expect(reducer(state, setBun(fluorescentBun))).toEqual({
      ...state,
      buns: [fluorescentBun],
    });
  });

  it("should handle replace bun", () => {
    expect(
      reducer({ ...state, buns: [fluorescentBun] }, setBun(craterBun))
    ).toEqual({
      ...state,
      buns: [craterBun],
    });
  });

  it("should handle set ingredient", () => {
    expect(reducer(state, addIngredient(ingredientMain))).toEqual({
      ...state,
      constructorList: [ingredientMain],
    });
  });

  it("should handle add another ingredient", () => {
    expect(
      reducer(
        { ...state, constructorList: [ingredientMain] },
        addIngredient(ingredientMain)
      )
    ).toEqual({
      ...state,
      constructorList: [ingredientMain, ingredientMain],
    });
  });

  it("should handle delete ingredient", () => {
    expect(
      reducer(
        { ...state, constructorList: [ingredientSauce, ingredientMain] },
        deleteIngredient(ingredientMain)
      )
    ).toEqual({
      ...state,
      constructorList: [ingredientSauce],
    });
  });

  it("should handle move ingredient", () => {
    expect(
      reducer(
        { ...state, constructorList: [ingredientMain, ingredientSauce] },
        moveIngredient(start, end)
      )
    ).toEqual({
      ...state,
      constructorList: [ingredientSauce, ingredientMain],
    });
  });

  it("should return initial state if clear constructor", () => {
    expect(
      reducer(
        {
          ...state,
          buns: [fluorescentBun],
          constructorList: [ingredientSauce, ingredientMain],
        },
        clearConstructor()
      )
    ).toEqual(state);
  });
});
