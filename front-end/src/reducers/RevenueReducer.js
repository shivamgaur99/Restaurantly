import {
  GET_ALLWEEKREVENUE_REQUEST,
  GET_ALLWEEKREVENUE_SUCCESS,
  GET_ALLWEEKREVENUE_FAIL,
  GET_ALLMONTHREVENUE_REQUEST,
  GET_ALLMONTHREVENUE_SUCCESS,
  GET_ALLMONTHREVENUE_FAIL,
  GET_TODAYSREVENUE_REQUEST,
  GET_TODAYSREVENUE_SUCCESS,
  GET_TODAYSREVENUE_FAIL,
  GET_THISWEEKREVENUE_REQUEST,
  GET_THISWEEKREVENUE_SUCCESS,
  GET_THISWEEKREVENUE_FAIL,
  GET_THISMONTHSREVENUE_REQUEST,
  GET_THISMONTHSREVENUE_SUCCESS,
  GET_THISMONTHSREVENUE_FAIL,
  GET_THISYEARSREVENUE_REQUEST,
  GET_THISYEARSREVENUE_SUCCESS,
  GET_THISYEARSREVENUE_FAIL,
} from '../constants/RevenueConstants'

export const allWeekRevenueReducer = (state = {}, action) => {
  switch (action.type) {
    case GET_ALLWEEKREVENUE_REQUEST:
      return { loading: true }
    case GET_ALLWEEKREVENUE_SUCCESS:
      return { loading: false, response: action.payload }
    case GET_ALLWEEKREVENUE_FAIL:
      return { loading: false, error: action.payload }
    default:
      return state
  }
}

export const allMonthRevenueReducer = (state = {}, action) => {
  switch (action.type) {
    case GET_ALLMONTHREVENUE_REQUEST:
      return { loading: true }
    case GET_ALLMONTHREVENUE_SUCCESS:
      return { loading: false, response: action.payload }
    case GET_ALLMONTHREVENUE_FAIL:
      return { loading: false, error: action.payload }
    default:
      return state
  }
}

export const todaysRevenueReducer = (state = {}, action) => {
  switch (action.type) {
    case GET_TODAYSREVENUE_REQUEST:
      return { loading: true }
    case GET_TODAYSREVENUE_SUCCESS:
      return { loading: false, response: action.payload }
    case GET_TODAYSREVENUE_FAIL:
      return { loading: false, error: action.payload }
    default:
      return state
  }
}

export const thisWeekRevenueReducer = (state = {}, action) => {
  switch (action.type) {
    case GET_THISWEEKREVENUE_REQUEST:
      return { loading1: true }
    case GET_THISWEEKREVENUE_SUCCESS:
      return { loading1: false, response1: action.payload }
    case GET_THISWEEKREVENUE_FAIL:
      return { loading1: false, error1: action.payload }
    default:
      return state
  }
}

export const thisMonthRevenueReducer = (state = {}, action) => {
  switch (action.type) {
    case GET_THISMONTHSREVENUE_REQUEST:
      return { loading2: true }
    case GET_THISMONTHSREVENUE_SUCCESS:
      return { loading2: false, response2: action.payload }
    case GET_THISMONTHSREVENUE_FAIL:
      return { loading2: false, error2: action.payload }
    default:
      return state
  }
}

export const thisYearRevenueReducer = (state = {}, action) => {
  switch (action.type) {
    case GET_THISYEARSREVENUE_REQUEST:
      return { loading3: true }
    case GET_THISYEARSREVENUE_SUCCESS:
      return { loading3: false, response3: action.payload }
    case GET_THISYEARSREVENUE_FAIL:
      return { loading3: false, error3: action.payload }
    default:
      return state
  }
}
