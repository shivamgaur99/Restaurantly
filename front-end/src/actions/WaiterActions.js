import axios from 'axios'
import {
  GET_PREPAREDORDERS_REQUEST,
  GET_PREPAREDORDERS_SUCCESS,
  GET_PREPAREDORDERS_FAIL,
  POST_SERVEORDER_REQUEST,
  POST_SERVEORDER_SUCCESS,
  POST_SERVEORDER_FAIL,
} from '../constants/WaiterConstants'

export const getPreparedOrd = () => {
  return (dispatch) => {
    dispatch({
      type: GET_PREPAREDORDERS_REQUEST,
    })

    const header = {
      headers: {
        'Content-Type': 'application/json',
        Authorization: sessionStorage['token'],
      },
    }

    const waiterId = sessionStorage['id']

    const url = `http://localhost:8383/waiter/getorder/${waiterId}`

    axios
      .get(url, header)
      .then((response) => {
        dispatch({
          type: GET_PREPAREDORDERS_SUCCESS,
          payload: response,
        })
      })
      .catch((error) => {
        dispatch({
          type: GET_PREPAREDORDERS_FAIL,
          payload: error,
        })
      })
  }
}

export const postServeOrd = (orderId) => {
  return (dispatch) => {
    dispatch({
      type: POST_SERVEORDER_REQUEST,
    })

    const header = {
      headers: {
        'Content-Type': 'application/json',
        Authorization: sessionStorage['token'],
      },
    }
    const url = `http://localhost:8383/waiter/order/${orderId}`

    axios
      .post(url, {}, header)
      .then((response) => {
        dispatch({
          type: POST_SERVEORDER_SUCCESS,
          payload: response,
        })
      })
      .catch((error) => {
        dispatch({
          type: POST_SERVEORDER_FAIL,
          payload: error,
        })
      })
  }
}
