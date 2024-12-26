import {
  GET_INGREDIENT_FAIL,
  GET_INGREDIENT_REQUEST,
  GET_INGREDIENT_SUCCESS,
  RESET_INGREDIENT_STATE,
  UPDATE_INGREDIENT_FAIL,
  UPDATE_INGREDIENT_REQUEST,
  UPDATE_INGREDIENT_SUCCESS,
  RESET_ADD_INGREDIENT_STATE,
} from '../../constants/supplierconstants/supplierConstants'
import axios from 'axios'

export const getingredinet = () => {
  return (dispatch) => {
    dispatch({
      type: GET_INGREDIENT_REQUEST,
    })

    const header = {
      headers: {
        'Content-Type': 'application/json',
        Authorization: sessionStorage['token'],
      },
    }

    const supId = sessionStorage['id']
    console.log(header.headers['Authorization'])

    const url = `http://localhost:8383/supplier/get/${supId}`
    axios
      .get(url, header)
      .then((response) => {
        dispatch({
          type: GET_INGREDIENT_SUCCESS,
          payload: response,
        })
      })
      .catch((error) => {
        dispatch({
          type: GET_INGREDIENT_FAIL,
          payload: error,
        })
      })
  }
}

export const updatePrice = (ingredientId, price) => {
  return (dispatch) => {
    dispatch({
      type: UPDATE_INGREDIENT_REQUEST,
    })

    const header = {
      headers: {
        'Content-Type': 'application/json',
        Authorization: sessionStorage['token'],
      },
    }

    const supplierId = sessionStorage['id']
    console.log(header.headers['Authorization'])

    const body = {
      ingredientId,
      supplierId,
      price,
    }

    const url = `http://localhost:8383/supplier/update`
    axios
      .post(url, body, header)
      .then((response) => {
        dispatch({
          type: UPDATE_INGREDIENT_SUCCESS,
          payload: response,
        })
      })
      .catch((error) => {
        dispatch({
          type: UPDATE_INGREDIENT_FAIL,
          payload: error,
        })
      })
  }
}

export const addIngredient = (ingredientId, price) => {
  return (dispatch) => {
    dispatch({
      type: UPDATE_INGREDIENT_REQUEST,
    })

    const header = {
      headers: {
        'Content-Type': 'application/json',
        Authorization: sessionStorage['token'],
      },
    }

    const supplierId = sessionStorage['id']
    console.log(header.headers['Authorization'])

    const body = {
      ingredientId,
      supplierId,
      price,
    }

    const url = `http://localhost:8383/supplier/add`
    axios
      .post(url, body, header)
      .then((response) => {
        dispatch({
          type: UPDATE_INGREDIENT_SUCCESS,
          payload: response,
        })
      })
      .catch((error) => {
        dispatch({
          type: UPDATE_INGREDIENT_FAIL,
          payload: error,
        })
      })
  }
}

export const getIngredientReset = () => {
  return {
    type: RESET_INGREDIENT_STATE,
  }
}

export const resetAddIngredient = () => {
  return {
    type: RESET_ADD_INGREDIENT_STATE,
  }
}
