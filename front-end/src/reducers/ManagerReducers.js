import {
  MANAGER_GETORDERS_REQUEST,
  MANAGER_GETORDERS_SUCCESS,
  MANAGER_GETORDERS_FAIL,
  MANAGER_GETORDERS_RESET,
  GET_CHEFS_REQUEST,
  GET_CHEFS_SUCCESS,
  GET_CHEFS_FAIL,
  GET_CHEFS_RESET,
  MANAGER_APPROVEORDER_REQUEST,
  MANAGER_APPROVEORDER_SUCCESS,
  MANAGER_APPROVEORDER_FAIL,
  MANAGER_APPROVEORDER_RESET,
  GET_WAITERS_REQUEST,
  GET_WAITERS_SUCCESS,
  GET_WAITERS_FAIL,
  GET_WAITERS_RESET,
  ASSIGN_WAITER_SUCCESS,
  ASSIGN_WAITER_REQUEST,
  ASSIGN_WAITER_FAIL,
  ASSIGN_WAITER_RESET,
} from '../constants/ManagerConstants'
import {
  GET_TABLE_REQUEST,
  GET_TABLE_SUCCESS,
  GET_TABLE_FAIL,
  RESET_TABLE_STATE,
} from '../constants/ownerconstants/ownerConstants'

export const managerGetOrdersReducer = (state = {}, action) => {
  switch (action.type) {
    case MANAGER_GETORDERS_REQUEST:
      return { loading: true }
    case MANAGER_GETORDERS_SUCCESS:
      return { loading: false, response: action.payload }
    case MANAGER_GETORDERS_FAIL:
      return { loading: false, error: action.payload }
    case MANAGER_GETORDERS_RESET:
      return (state = '')
    default:
      return state
  }
}

export const getChefsReducer = (state = {}, action) => {
  switch (action.type) {
    case GET_CHEFS_REQUEST:
      return { loading1: true }
    case GET_CHEFS_SUCCESS:
      return { loading1: false, response1: action.payload }
    case GET_CHEFS_FAIL:
      return { loading1: false, error1: action.payload }
    case GET_CHEFS_RESET:
      return (state = '')
    default:
      return state
  }
}

export const approveOrderReducer = (state = {}, action) => {
  switch (action.type) {
    case MANAGER_APPROVEORDER_REQUEST:
      return { loading2: true }
    case MANAGER_APPROVEORDER_SUCCESS:
      return { loading2: false, response2: action.payload }
    case MANAGER_APPROVEORDER_FAIL:
      return { loading2: false, error2: action.payload }
    case MANAGER_APPROVEORDER_RESET:
      return (state = '')
    default:
      return state
  }
}

export const getWaitersReducer = (state = {}, action) => {
  switch (action.type) {
    case GET_WAITERS_REQUEST:
      return { loading: true }
    case GET_WAITERS_SUCCESS:
      return { loading: false, response: action.payload }
    case GET_WAITERS_FAIL:
      return { loading: false, error: action.payload }
    case GET_WAITERS_RESET:
      return (state = '')
    default:
      return state
  }
}

export const assignWaiterReducer = (state = {}, action) => {
  switch (action.type) {
    case ASSIGN_WAITER_REQUEST:
      return { loading1: true }
    case ASSIGN_WAITER_SUCCESS:
      return { loading1: false, response1: action.payload }
    case ASSIGN_WAITER_FAIL:
      return { loading1: false, error1: action.payload }
    case ASSIGN_WAITER_RESET:
      return (state = '')
    default:
      return state
  }
}

export const managergetalltablesReducer = (state = {}, action) => {
  switch (action.type) {
    case GET_TABLE_REQUEST:
      return { loading2: true }
    case GET_TABLE_SUCCESS:
      return { loading2: false, response2: action.payload }
    case GET_TABLE_FAIL:
      return { loading2: false, error2: action.payload }
    case RESET_TABLE_STATE:
      return (state = '')
    default:
      return state
  }
}
