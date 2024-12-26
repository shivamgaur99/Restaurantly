import axios from 'axios'
import {
  GET_APPROVEDORDERS_REQUEST,
  GET_APPROVEDORDERS_SUCCESS,
  GET_APPROVEDORDERS_FAIL,
  POST_PREPAREORDER_REQUEST,
  POST_PREPAREORDER_SUCCESS,
  POST_PREPAREORDER_FAIL,
} from '../constants/ChefConstants'

export const getApprovedOrd = () => {
  return (dispatch) => {
    dispatch({
      type: GET_APPROVEDORDERS_REQUEST,
    })

    const header = {
      headers: {
        'Content-Type': 'application/json',
        Authorization: sessionStorage['token'],
      },
    }

    const chefId = sessionStorage['id']

    const url = `http://localhost:8383/chef/approvedorders/${chefId}`

    axios
      .get(url, header)
      .then((response) => {
        dispatch({
          type: GET_APPROVEDORDERS_SUCCESS,
          payload: response,
        })
      })
      .catch((error) => {
        dispatch({
          type: GET_APPROVEDORDERS_FAIL,
          payload: error,
        })
      })
  }
}

export const postPrepareOrd = (orderId) => {
  return (dispatch) => {
    dispatch({
      type: POST_PREPAREORDER_REQUEST,
    })

    const header = {
      headers: {
        'Content-Type': 'application/json',
        Authorization: sessionStorage['token'],
      },
    }

    const chefId = sessionStorage['id']

    const url = `http://localhost:8383/chef/prepared/${chefId}/${orderId}`

    axios
      .post(url, {}, header)
      .then((response) => {
        dispatch({
          type: POST_PREPAREORDER_SUCCESS,
          payload: response,
        })
      })
      .catch((error) => {
        dispatch({
          type: POST_PREPAREORDER_FAIL,
          payload: error,
        })
      })
  }
}
