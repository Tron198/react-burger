import {
    GET_INGREDIENTS_REQUEST,
    GET_INGREDIENTS_SUCCESS,
    GET_INGREDIENTS_ERROR
  } from '../actions/ingredients-list';
  
  export const ingredientsListState = {
    ingredientsList: [],
    ingredientsRequest: false,
    ingredientsError: false,
  }
  
  export const ingredientsListReducer = (state = ingredientsListState, action) => {
    switch (action.type) {
      case GET_INGREDIENTS_REQUEST: {
        return {
          ...state,
          ingredientsRequest: true
        }
      }
      case GET_INGREDIENTS_SUCCESS: {
        return {
          ...state,
          ingredientsList: [...action.data],
          ingredientsError: false,
        }
      }
      case GET_INGREDIENTS_ERROR: {
        return {
          ...state,
          ingredientsRequest: false,
          ingredientsError: true
        }
      }
      default: {
        return state;
      }
    }
  }