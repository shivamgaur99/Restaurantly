import axios from "axios";
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
} from "../constants/ManagerConstants";

export const getMOrders = () => {
  return (dispatch) => {
    dispatch({
      type: MANAGER_GETORDERS_REQUEST,
    });

    const header = {
      headers: {
        "Content-Type": "application/json",
        Authorization: sessionStorage["token"],
      },
    };

    const url = "http://localhost:8383/manager/orders";

    axios
      .get(url, header)
      .then((response) => {
        dispatch({
          type: MANAGER_GETORDERS_SUCCESS,
          payload: response,
        });
      })
      .catch((error) => {
        dispatch({
          type: MANAGER_GETORDERS_FAIL,
          payload: error,
        });
      });
  };
};

export const getChefs = () => {
  return (dispatch) => {
    dispatch({
      type: GET_CHEFS_REQUEST,
    });

    const header = {
      headers: {
        "Content-Type": "application/json",
        Authorization: sessionStorage["token"],
      },
    };

    const url = "http://localhost:8383/admin/chefs";

    axios
      .get(url, header)
      .then((response) => {
        dispatch({
          type: GET_CHEFS_SUCCESS,
          payload: response,
        });
      })
      .catch((error) => {
        dispatch({
          type: GET_CHEFS_FAIL,
          payload: error,
        });
      });
  };
};

export const postApprovedOrder = (chefId, customerId) => {
  return (dispatch) => {
    dispatch({
      type: MANAGER_APPROVEORDER_REQUEST,
    });

    const header = {
      headers: {
        "Content-Type": "application/json",
        Authorization: sessionStorage["token"],
      },
    };

    const url = "http://localhost:8383/order/add";

    const category = "DINEIN";

    const body = {
      chefId,
      customerId,
      category,
    };

    axios
      .post(url, body, header)
      .then((response) => {
        dispatch({
          type: MANAGER_APPROVEORDER_SUCCESS,
          payload: response,
        });
      })
      .catch((error) => {
        dispatch({
          type: MANAGER_APPROVEORDER_FAIL,
          payload: error,
        });
      });
  };
};

export const getAllWaiters = () => {
  return (dispatch) => {
    dispatch({
      type: GET_WAITERS_REQUEST,
    });
    console.log("in call");

    const header = {
      headers: {
        "Content-Type": "application/json",
        Authorization: sessionStorage["token"],
      },
    };

    const url = "http://localhost:8383/admin/waiters";

    axios
      .get(url, header)
      .then((response) => {
        dispatch({
          type: GET_WAITERS_SUCCESS,
          payload: response,
        });
      })
      .catch((error) => {
        dispatch({
          type: GET_WAITERS_FAIL,
          payload: error,
        });
      });
  };
};

export const assignWaiterToTable = (waiterId, tableNo) => {
  return (dispatch) => {
    dispatch({
      type: ASSIGN_WAITER_REQUEST,
    });

    const header = {
      headers: {
        "Content-Type": "application/json",
        Authorization: sessionStorage["token"],
      },
    };

    const url = `http://localhost:8383/waiter/assign/${waiterId}/${tableNo}`;

    axios
      .post(url, {}, header)
      .then((response) => {
        dispatch({
          type: ASSIGN_WAITER_SUCCESS,
          payload: response,
        });
        alert("Waiter Assigned successfully");
      })
      .catch((error) => {
        dispatch({
          type: ASSIGN_WAITER_FAIL,
          payload: error,
        });
      });
  };
};
