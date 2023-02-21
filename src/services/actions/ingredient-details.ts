import {
  SET_INGREDIENT_DETAILS,
  DELETE_INGREDIENT_DETAILS,
} from "../constants/constants";
import { TIngredientType } from "../types/types";
import {
  ISetIgredientDetails,
  IDeleteIgredientDetails,
} from "../actions/interfaces";

export const setIgredientDetails = (
  payload: TIngredientType
): ISetIgredientDetails => ({
  type: SET_INGREDIENT_DETAILS,
  payload,
});

export const deleteIgredientDetails = (): IDeleteIgredientDetails => ({
  type: DELETE_INGREDIENT_DETAILS,
});
