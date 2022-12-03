import { ActionType } from "../cotents/actionType";


const initialState = {
  product: []
}

export const productReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case ActionType.SET_PRODUCT:
      return { ...state, product: payload }

    default:
      return state;
  }
}

export const selectedProReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case ActionType.SELECTED_PRODUCT:
    return {
      ...state, ...payload
    }
    default:
     return state;
  }
}