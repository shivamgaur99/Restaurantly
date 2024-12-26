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
} from '../../constants/ownerconstants/ownerConstants'

import axios from 'axios'

export const addEmployee = (name, username, email, password, role) => {
  return (dispatch) => {
    dispatch({
      type: OWNER_ADDEMPLOYEE_REQUEST,
    })

    const header = {
      headers: {
        'Content-Type': 'application/json',
      },
    }

    const body = {
      name,
      username,
      email,
      password,
      role,
    }
    const url = 'http://localhost:8383/admin/register'
    axios
      .post(url, body, header)
      .then((response) => {
        console.log('in action')
        console.log(response)
        dispatch({
          type: OWNER_ADDEMPLOYEE_SUCCESS,
          payload: response,
        })
      })
      .catch((error) => {
        dispatch({
          type: OWNER_ADDEMPLOYEE_FAIL,
          payload: error,
        })
      })
  }
}

export const addTable = (tableNo, capacity, status) => {
  return (dispatch) => {
    dispatch({
      type: ADD_TABLE_REQUEST,
    })

    const header = {
      headers: {
        'Content-Type': 'application/json',
        Authorization: sessionStorage['token'],
      },
    }
    const body = {
      tableNo,
      capacity,
      status,
    }
    const url = 'http://localhost:8383/table/add'
    axios
      .post(url, body, header)
      .then((response) => {
        console.log('in action')
        console.log(response)
        dispatch({
          type: ADD_TABLE_SUCCESS,
          payload: response,
        })
      })
      .catch((error) => {
        dispatch({
          type: ADD_TABLE_FAIL,
          payload: error,
        })
      })
  }
}
export const getalltables = () => {
  return (dispatch) => {
    dispatch({
      type: GET_TABLE_REQUEST,
    })

    const header = {
      headers: {
        'Content-Type': 'application/json',
        Authorization: sessionStorage['token'],
      },
    }

    const url = 'http://localhost:8383/table'
    axios
      .get(url, header)
      .then((response) => {
        console.log('in action')
        console.log(response)
        dispatch({
          type: GET_TABLE_SUCCESS,
          payload: response,
        })
      })
      .catch((error) => {
        dispatch({
          type: GET_TABLE_FAIL,
          payload: error,
        })
      })
  }
}

export const resetAddEmployee = () => {
  return {
    type: RESET_ADDEMPLOYEE_STATE,
  }
}

export const resetAddTable = () => {
  return {
    type: RESET_TABLE_STATE,
  }
}
