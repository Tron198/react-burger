export const SET_BUN = 'SET_BUN';
export const ADD_INGREDIENT = 'ADD_INGREDIENT';
export const DELETE_INGREDIENT = 'DELETE_INGREDIENT';
export const MOVE_INGREDIENT = 'MOVE_INGREDIENT';
export const CLEAR_CONSTRUCTOR = 'CLEAR_CONSTRUCTOR';

export const setBun = (payload) => ({
    type: SET_BUN,
    payload
})

export const addIngredient = (payload) => ({
    type: ADD_INGREDIENT,
    payload
})

export const deleteIngredient = (payload) => ({
    type: DELETE_INGREDIENT,
    payload
})

export const moveIngredient = (start, end) => ({
    type: MOVE_INGREDIENT,
    payload: { start, end }
})

export const clearConstructor = () => ({
    type: CLEAR_CONSTRUCTOR
})