import {
  GET_APPROVEDORDERS_REQUEST,
  GET_APPROVEDORDERS_SUCCESS,
  GET_APPROVEDORDERS_FAIL,
  POST_PREPAREORDER_REQUEST,
  POST_PREPAREORDER_SUCCESS,
  POST_PREPAREORDER_FAIL,
} from '../constants/ChefConstants'

export const chefGetApprovedOrdersReducer = (state = {}, action) => {
  switch (action.type) {
    case GET_APPROVEDORDERS_REQUEST:
      return { loading: true }
    case GET_APPROVEDORDERS_SUCCESS:
      return { loading: false, response: action.payload }
    case GET_APPROVEDORDERS_FAIL:
      return { loading: false, error: action.payload }

    default:
      return state
  }
}

export const chefPrepareOrderReducer = (state = {}, action) => {
  switch (action.type) {
    case POST_PREPAREORDER_REQUEST:
      return { loading1: true }
    case POST_PREPAREORDER_SUCCESS:
      return { loading1: false, response1: action.payload }
    case POST_PREPAREORDER_FAIL:
      return { loading1: false, error1: action.payload }
    default:
      return state
  }
}
