import { GET_INGREDIENTS_SUCCESS } from "../constants/constants";
import { TUnionAction } from "../actions/interfaces";
import { TIngredientType } from "../types/types";

type TInitialState = {
  ingredientsList: Array<TIngredientType>;
};

const initialState: TInitialState = {
  ingredientsList: [],
};

export const ingredientsListReducer = (
  state = initialState,
  action: TUnionAction
): TInitialState => {
  switch (action.type) {
    case GET_INGREDIENTS_SUCCESS: {
      return {
        ...state,
        ingredientsList: [...action.payload],
      };
    }
    default: {
      return state;
    }
  }
};
