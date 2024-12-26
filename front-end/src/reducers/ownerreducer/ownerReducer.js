import {
  OWNER_ADDEMPLOYEE_REQUEST,
  OWNER_ADDEMPLOYEE_SUCCESS,
  OWNER_ADDEMPLOYEE_FAIL,
  RESET_ADDEMPLOYEE_STATE,
  GET_TABLE_FAIL,
  GET_TABLE_REQUEST,
  GET_TABLE_SUCCESS,
  RESET_TABLE_STATE,
  ADD_TABLE_FAIL,
  ADD_TABLE_REQUEST,
  ADD_TABLE_SUCCESS,
  RESET_ADDTABLE_STATE,
} from '../../constants/ownerconstants/ownerConstants'

export const ownerAddEmployeeReducer = (state = {}, action) => {
  switch (action.type) {
    case OWNER_ADDEMPLOYEE_REQUEST:
      return { loading: true }
    case OWNER_ADDEMPLOYEE_SUCCESS:
      return { loading: false, response: action.payload }
    case OWNER_ADDEMPLOYEE_FAIL:
      return { loading: false, error: action.payload }
    case RESET_ADDEMPLOYEE_STATE:
      return (state = '')
    default:
      return state
  }
}

export const ownergetalltablesReducer = (state = {}, action) => {
  switch (action.type) {
    case GET_TABLE_REQUEST:
      return { loading: true }
    case GET_TABLE_SUCCESS:
      return { loading: false, response: action.payload }
    case GET_TABLE_FAIL:
      return { loading: false, error: action.payload }
    case RESET_TABLE_STATE:
      return (state = '')
    default:
      return state
  }
}

export const owneraddtableReducer = (state = {}, action) => {
  switch (action.type) {
    case ADD_TABLE_REQUEST:
      return { loading: true }
    case ADD_TABLE_SUCCESS:
      return { loading: false, response: action.payload }
    case ADD_TABLE_FAIL:
      return { loading: false, error: action.payload }
    case RESET_ADDTABLE_STATE:
      return (state = '')
    default:
      return state
  }
}
