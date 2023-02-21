import {
  SET_BUN,
  ADD_INGREDIENT,
  DELETE_INGREDIENT,
  MOVE_INGREDIENT,
  CLEAR_CONSTRUCTOR,
} from "../constants/constants";
import { TIngredientType } from "../types/types";
import {
  ISetBun,
  IAddIngredient,
  IDeleteIngredient,
  IMoveIngredient,
  IClearConstructor,
} from "../actions/interfaces";

export const setBun = (payload: TIngredientType): ISetBun => ({
  type: SET_BUN,
  payload,
});

export const addIngredient = (payload: TIngredientType): IAddIngredient => ({
  type: ADD_INGREDIENT,
  payload,
});

export const deleteIngredient = (
  payload: TIngredientType
): IDeleteIngredient => ({
  type: DELETE_INGREDIENT,
  payload,
});

export const moveIngredient = (
  start: number,
  end: number
): IMoveIngredient => ({
  type: MOVE_INGREDIENT,
  payload: { start, end },
});

export const clearConstructor = (): IClearConstructor => ({
  type: CLEAR_CONSTRUCTOR,
});
