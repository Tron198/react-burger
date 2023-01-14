import { SET_INGREDIENT_DETAILS, DELETE_INGREDIENT_DETAILS } from '../actions/ingredient-details';

export const ingredientDetailsState = {
  ingredientDetails: null
}

export const ingredientDetailsReducer = (state = ingredientDetailsState, action) => {
  switch (action.type) {
    case SET_INGREDIENT_DETAILS: {
      return {
        ...state,
        ingredientDetails: action.ingredient
      }
    }
    case DELETE_INGREDIENT_DETAILS: {
      return {
        ...state,
        ingredientDetails: null
      }
    }
    default: {
      return state;
    }
  }
}