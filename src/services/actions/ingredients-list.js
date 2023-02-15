import { apiBurger } from "../../utils/api";

export const GET_INGREDIENTS_REQUEST = "GET_INGREDIENTS_REQUEST";
export const GET_INGREDIENTS_SUCCESS = "GET_INGREDIENTS_SUCCESS";
export const GET_INGREDIENTS_ERROR = "GET_INGREDIENTS_ERROR";

export const getIngredientsSuccess = (data) => ({
  type: GET_INGREDIENTS_SUCCESS,
  data,
});

export function getIngredientsList() {
  return (dispatch) =>
    apiBurger
      .getIngredients()
      .then(({ data }) => {
        dispatch(getIngredientsSuccess(data));
      })
      .catch((error) => {
        console.log(error);
      });
}
