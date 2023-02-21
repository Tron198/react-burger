import { apiBurger } from "../../utils/api";
import { GET_INGREDIENTS_SUCCESS } from "../constants/constants";
import { TIngredientType } from "../types/types";
import { IGetIngredientsSuccess } from "../actions/interfaces";
import { AppThunk } from "../types/types";

export const getIngredientsSuccess = (
  data: Array<TIngredientType>
): IGetIngredientsSuccess => ({
  type: GET_INGREDIENTS_SUCCESS,
  payload: data,
});

export const getIngredientsList: AppThunk = () => {
  return (dispatch) =>
    apiBurger
      .getIngredients()
      .then(({ data }) => {
        dispatch(getIngredientsSuccess(data));
      })
      .catch((error) => {
        console.log(error);
      });
};
