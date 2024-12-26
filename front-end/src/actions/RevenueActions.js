import axios from 'axios'
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

export const getAllWeekRevenue = () => {
  return (dispatch) => {
    dispatch({
      type: GET_ALLWEEKREVENUE_REQUEST,
    })

    const header = {
      headers: {
        'Content-Type': 'application/json',
        Authorization: sessionStorage['token'],
      },
    }

    const url = 'http://localhost:8383/revenue/thisweek'

    axios
      .get(url, header)
      .then((response) => {
        dispatch({
          type: GET_ALLWEEKREVENUE_SUCCESS,
          payload: response,
        })
      })
      .catch((error) => {
        dispatch({
          type: GET_ALLWEEKREVENUE_FAIL,
          payload: error,
        })
      })
  }
}

export const getAllMonthRevenue = () => {
  return (dispatch) => {
    dispatch({
      type: GET_ALLMONTHREVENUE_REQUEST,
    })

    const header = {
      headers: {
        'Content-Type': 'application/json',
        Authorization: sessionStorage['token'],
      },
    }

    const url = 'http://localhost:8383/revenue/allmonths'

    axios
      .get(url, header)
      .then((response) => {
        dispatch({
          type: GET_ALLMONTHREVENUE_SUCCESS,
          payload: response,
        })
      })
      .catch((error) => {
        dispatch({
          type: GET_ALLMONTHREVENUE_FAIL,
          payload: error,
        })
      })
  }
}

export const getTodaysRevenue = () => {
  return (dispatch) => {
    dispatch({
      type: GET_TODAYSREVENUE_REQUEST,
    })

    const header = {
      headers: {
        'Content-Type': 'application/json',
        Authorization: sessionStorage['token'],
      },
    }

    const url = 'http://localhost:8383/revenue/daily'

    axios
      .get(url, header)
      .then((response) => {
        dispatch({
          type: GET_TODAYSREVENUE_SUCCESS,
          payload: response,
        })
      })
      .catch((error) => {
        dispatch({
          type: GET_TODAYSREVENUE_FAIL,
          payload: error,
        })
      })
  }
}

export const getThisWeeksRevenue = () => {
  return (dispatch) => {
    dispatch({
      type: GET_THISWEEKREVENUE_REQUEST,
    })

    const header = {
      headers: {
        'Content-Type': 'application/json',
        Authorization: sessionStorage['token'],
      },
    }

    const url = 'http://localhost:8383/revenue/weekly'

    axios
      .get(url, header)
      .then((response) => {
        dispatch({
          type: GET_THISWEEKREVENUE_SUCCESS,
          payload: response,
        })
      })
      .catch((error) => {
        dispatch({
          type: GET_THISWEEKREVENUE_FAIL,
          payload: error,
        })
      })
  }
}

export const getThisMonthsRevenue = () => {
  return (dispatch) => {
    dispatch({
      type: GET_THISMONTHSREVENUE_REQUEST,
    })

    const header = {
      headers: {
        'Content-Type': 'application/json',
        Authorization: sessionStorage['token'],
      },
    }

    const url = 'http://localhost:8383/revenue/monthly'

    axios
      .get(url, header)
      .then((response) => {
        dispatch({
          type: GET_THISMONTHSREVENUE_SUCCESS,
          payload: response,
        })
      })
      .catch((error) => {
        dispatch({
          type: GET_THISMONTHSREVENUE_FAIL,
          payload: error,
        })
      })
  }
}

export const getThisYearsRevenue = () => {
  return (dispatch) => {
    dispatch({
      type: GET_THISYEARSREVENUE_REQUEST,
    })

    const header = {
      headers: {
        'Content-Type': 'application/json',
        Authorization: sessionStorage['token'],
      },
    }

    const url = 'http://localhost:8383/revenue/yearly'

    axios
      .get(url, header)
      .then((response) => {
        dispatch({
          type: GET_THISYEARSREVENUE_SUCCESS,
          payload: response,
        })
      })
      .catch((error) => {
        dispatch({
          type: GET_THISYEARSREVENUE_FAIL,
          payload: error,
        })
      })
  }
}
