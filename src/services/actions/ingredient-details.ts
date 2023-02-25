import {
  SET_INGREDIENT_DETAILS,
  DELETE_INGREDIENT_DETAILS,
} from "../constants/constants";
import { TIngredientType } from "../types/types";
import {
  ISetIngredientDetails,
  IDeleteIngredientDetails,
} from "../actions/interfaces";

export const setIngredientDetails = (
  payload: TIngredientType
): ISetIngredientDetails => ({
  type: SET_INGREDIENT_DETAILS,
  payload,
});

export const deleteIngredientDetails = (): IDeleteIngredientDetails => ({
  type: DELETE_INGREDIENT_DETAILS,
});
