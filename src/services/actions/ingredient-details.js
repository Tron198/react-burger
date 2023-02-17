export const SET_INGREDIENT_DETAILS = "SET_INGREDIENT_DETAILS";
export const DELETE_INGREDIENT_DETAILS = "DELETE_INGREDIENT_DETAILS";

export const setIgredientDetails = (ingredient) => ({
  type: SET_INGREDIENT_DETAILS,
  payload: ingredient,
});

export const deleteIgredientDetails = () => ({
  type: DELETE_INGREDIENT_DETAILS,
});
