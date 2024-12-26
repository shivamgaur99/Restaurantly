import {
  GET_INGREDIENT_FAIL,
  GET_INGREDIENT_REQUEST,
  GET_INGREDIENT_SUCCESS,
  RESET_INGREDIENT_STATE,
  UPDATE_INGREDIENT_FAIL,
  UPDATE_INGREDIENT_REQUEST,
  UPDATE_INGREDIENT_SUCCESS,
  RESET_UPDATE_INGREDIENT_STATE,
  ADD_INGREDIENT_FAIL,
  ADD_INGREDIENT_REQUEST,
  ADD_INGREDIENT_SUCCESS,
  RESET_ADD_INGREDIENT_STATE,
} from '../../constants/supplierconstants/supplierConstants'

export const supplierGetAllIngredientReducer = (state = {}, action) => {
  switch (action.type) {
    case GET_INGREDIENT_REQUEST:
      return { loading: true }
    case GET_INGREDIENT_SUCCESS:
      return { loading: false, response: action.payload }
    case GET_INGREDIENT_FAIL:
      return { loading: false, error: action.payload }
    case RESET_INGREDIENT_STATE:
      return (state = '')
    default:
      return state
  }
}

export const supplierUpdateIngredientReducer = (state = {}, action) => {
  switch (action.type) {
    case UPDATE_INGREDIENT_REQUEST:
      return { loading: true }
    case UPDATE_INGREDIENT_SUCCESS:
      return { loading: false, response1: action.payload }
    case UPDATE_INGREDIENT_FAIL:
      return { loading: false, error1: action.payload }
    case RESET_UPDATE_INGREDIENT_STATE:
      return (state = '')
    default:
      return state
  }
}

export const supplierAddIngredientReducer = (state = {}, action) => {
  switch (action.type) {
    case ADD_INGREDIENT_REQUEST:
      return { loading: true }
    case ADD_INGREDIENT_SUCCESS:
      return { loading: false, response: action.payload }
    case ADD_INGREDIENT_FAIL:
      return { loading: false, error1: action.payload }
    case RESET_ADD_INGREDIENT_STATE:
      return (state = '')
    default:
      return state
  }
}
