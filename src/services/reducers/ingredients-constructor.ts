import {
  SET_BUN,
  ADD_INGREDIENT,
  DELETE_INGREDIENT,
  MOVE_INGREDIENT,
  CLEAR_CONSTRUCTOR,
} from "../constants/constants";
import { TUnionAction } from "../actions/interfaces";
import { TIngredientType } from "../types/types";

type TInitialState = {
  constructorList: Array<TIngredientType>;
  buns: Array<TIngredientType>;
};

const initialState: TInitialState = {
  constructorList: [],
  buns: [],
};

export const constructorListReducer = (
  state = initialState,
  action: TUnionAction
): TInitialState => {
  switch (action.type) {
    case SET_BUN: {
      return {
        ...state,
        buns: state.buns.find((item) => item._id === action.payload._id)
          ? [...state.buns]
          : [action.payload],
      };
    }
    case ADD_INGREDIENT: {
      return {
        ...state,
        constructorList: [...state.constructorList, action.payload],
      };
    }
    case DELETE_INGREDIENT: {
      return {
        ...state,
        constructorList: state.constructorList.filter(
          (element) => element.id !== action.payload.id
        ),
      };
    }
    case MOVE_INGREDIENT: {
      let res = [];

      const { start, end } = action.payload;
      if (start === end) {
        return state;
      } else if (start > end) {
        res = [
          ...state.constructorList.slice(0, end),
          state.constructorList[start],
          ...state.constructorList.slice(end, start),
          ...state.constructorList.slice(start + 1),
        ];
      } else {
        // start < end
        res = [
          ...state.constructorList.slice(0, start),
          ...state.constructorList.slice(start + 1, end + 1),
          state.constructorList[start],
          ...state.constructorList.slice(end + 1),
        ];
      }
      return {
        ...state,
        constructorList: res,
      };
    }
    case CLEAR_CONSTRUCTOR: {
      return {
        ...state,
        constructorList: [],
        buns: [],
      };
    }
    default: {
      return state;
    }
  }
};
