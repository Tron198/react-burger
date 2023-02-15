export const SET_INGREDIENT_DETAILS = "SET_INGREDIENT_DETAILS";
export const DELETE_INGREDIENT_DETAILS = "DELETE_INGREDIENT_DETAILS";

export const setIgredientDetails = (payload) => ({
  type: SET_INGREDIENT_DETAILS,
  payload,
});

export const deleteIgredientDetails = () => ({
  type: DELETE_INGREDIENT_DETAILS,
});
