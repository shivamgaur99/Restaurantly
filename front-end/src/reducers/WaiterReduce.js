import {
  GET_PREPAREDORDERS_REQUEST,
  GET_PREPAREDORDERS_SUCCESS,
  GET_PREPAREDORDERS_FAIL,
  POST_SERVEORDER_REQUEST,
  POST_SERVEORDER_SUCCESS,
  POST_SERVEORDER_FAIL,
} from '../constants/WaiterConstants'

export const waiterGetPreparedOrdersReducer = (state = {}, action) => {
  switch (action.type) {
    case GET_PREPAREDORDERS_REQUEST:
      return { loading: true }
    case GET_PREPAREDORDERS_SUCCESS:
      return { loading: false, response: action.payload }
    case GET_PREPAREDORDERS_FAIL:
      return { loading: false, error: action.payload }

    default:
      return state
  }
}

export const waiterServeOrderReducer = (state = {}, action) => {
  switch (action.type) {
    case POST_SERVEORDER_REQUEST:
      return { loading1: true }
    case POST_SERVEORDER_SUCCESS:
      return { loading1: false, response1: action.payload }
    case POST_SERVEORDER_FAIL:
      return { loading1: false, error1: action.payload }
    default:
      return state
  }
}
