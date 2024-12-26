import {
  CUSTOMER_SIGNUP_REQUEST,
  CUSTOMER_SIGNUP_SUCCESS,
  CUSTOMER_SIGNUP_FAIL,
  CUSTOMER_SIGNIN_REQUEST,
  CUSTOMER_SIGNIN_SUCCESS,
  CUSTOMER_SIGNIN_FAIL,
  CUSTOMER_SIGNOUT,
  CUSTOMER_GETCART_REQUEST,
  CUSTOMER_GETCART_SUCCESS,
  CUSTOMER_GETCART_FAIL,
  CUSTOMER_CARTUPDATE_REQUEST,
  CUSTOMER_CARTUPDATE_SUCCESS,
  CUSTOMER_CARTUPDATE_FAIL,
  CUSTOMER_PLACEORDER_REQUEST,
  CUSTOMER_PLACEORDER_SUCCESS,
  CUSTOMER_PLACEORDER_FAIL,
  CUSTOMER_ADDTOCART_REQUEST,
  CUSTOMER_ADDTOCART_SUCCESS,
  CUSTOMER_ADDTOCART_FAIL,
  CUSTOMER_BOOKTABLE_FAIL,
  CUSTOMER_BOOKTABLE_REQUEST,
  CUSTOMER_BOOKTABLE_SUCCESS,
  CUSTOMER_GETORDERS_FAIL,
  CUSTOMER_GETORDERS_REQUEST,
  CUSTOMER_GETORDERS_SUCCESS,
  CUSTOMER_FEEDBACK_FAIL,
  CUSTOMER_FEEDBACK_REQUEST,
  CUSTOMER_FEEDBACK_SUCCESS,
  CUSTOMER_FEEDBACK_RESET,
} from '../constants/customerConstants'

export const customerSignupReducer = (state = {}, action) => {
  switch (action.type) {
    case CUSTOMER_SIGNUP_REQUEST:
      return { loading: true }
    case CUSTOMER_SIGNUP_SUCCESS:
      return { loading: false, response: action.payload }
    case CUSTOMER_SIGNUP_FAIL:
      return { loading: false, error: action.payload }
    default:
      return state
  }
}

export const customerSigninReducer = (state = {}, action) => {
  switch (action.type) {
    case CUSTOMER_SIGNIN_REQUEST:
      return { loading1: true }
    case CUSTOMER_SIGNIN_SUCCESS:
      return { loading1: false, response1: action.payload }
    case CUSTOMER_FEEDBACK_FAIL:
      return { loading1: false, error1: action.payload }
    case CUSTOMER_SIGNOUT:
      return {}
    default:
      return state
  }
}

export const customerCartReducer = (state = {}, action) => {
  switch (action.type) {
    case CUSTOMER_GETCART_REQUEST:
      return { loading: true }
    case CUSTOMER_GETCART_SUCCESS:
      return { loading: true, response: action.payload }
    case CUSTOMER_GETCART_FAIL:
      return { loading: true, error: action.payload }
    default:
      return state
  }
}

export const updateCartcustomerCartReducer = (state = {}, action) => {
  switch (action.type) {
    case CUSTOMER_CARTUPDATE_REQUEST:
      return { loading1: true }
    case CUSTOMER_CARTUPDATE_SUCCESS:
      return { loading1: true, response1: action.payload }
    case CUSTOMER_CARTUPDATE_FAIL:
      return { loading1: true, error1: action.payload }
    default:
      return state
  }
}

export const customerPlaceOrderReducer = (state = {}, action) => {
  switch (action.type) {
    case CUSTOMER_PLACEORDER_REQUEST:
      return { loading2: true }
    case CUSTOMER_PLACEORDER_SUCCESS:
      return { loading2: true, response2: action.payload }
    case CUSTOMER_PLACEORDER_FAIL:
      return { loading2: true, error2: action.payload }
    default:
      return state
  }
}

export const customerAddToCartReducer = (state = {}, action) => {
  switch (action.type) {
    case CUSTOMER_ADDTOCART_REQUEST:
      return { loading1: true }
    case CUSTOMER_ADDTOCART_SUCCESS:
      return { loading1: true, response1: action.payload }
    case CUSTOMER_ADDTOCART_FAIL:
      return { loading1: true, error1: action.payload }
    default:
      return state
  }
}

export const customerBookTableReducer = (state = {}, action) => {
  switch (action.type) {
    case CUSTOMER_BOOKTABLE_REQUEST:
      return { loading1: true }
    case CUSTOMER_BOOKTABLE_SUCCESS:
      return { loading1: true, response1: action.payload }
    case CUSTOMER_BOOKTABLE_FAIL:
      return { loading1: true, error1: action.payload }
    default:
      return state
  }
}

export const customerGetAllOrdersReducer = (state = {}, action) => {
  switch (action.type) {
    case CUSTOMER_GETORDERS_REQUEST:
      return { loading: true }
    case CUSTOMER_GETORDERS_SUCCESS:
      return { loading: true, response: action.payload }
    case CUSTOMER_GETORDERS_FAIL:
      return { loading: true, error: action.payload }
    default:
      return state
  }
}

export const customerFeedbackReducer = (state = {}, action) => {
  switch (action.type) {
    case CUSTOMER_GETORDERS_REQUEST:
      return { loading: true }
    case CUSTOMER_GETORDERS_SUCCESS:
      return { loading: true, response: action.payload }
    case CUSTOMER_GETORDERS_FAIL:
      return { loading: true, error: action.payload }
    case CUSTOMER_FEEDBACK_RESET:
      return (state = '')
    default:
      return state
  }
}

export const customerPaybillReducer = (state = {}, action) => {
  switch (action.type) {
    case CUSTOMER_GETORDERS_REQUEST:
      return { loading: true }
    case CUSTOMER_GETORDERS_SUCCESS:
      return { loading: true, response: action.payload }
    case CUSTOMER_GETORDERS_FAIL:
      return { loading: true, error: action.payload }
    case CUSTOMER_FEEDBACK_RESET:
      return (state = '')
    default:
      return state
  }
}
