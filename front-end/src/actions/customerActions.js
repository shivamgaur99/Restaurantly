import {
  CUSTOMER_SIGNUP_REQUEST,
  CUSTOMER_SIGNUP_SUCCESS,
  CUSTOMER_SIGNUP_FAIL,
  CUSTOMER_SIGNIN_REQUEST,
  CUSTOMER_SIGNIN_SUCCESS,
  CUSTOMER_SIGNIN_FAIL,
  CUSTOMER_SIGNOUT,
  CUSTOMER_GETCART_REQUEST,
  CUSTOMER_GETCART_SUCCESS,
  CUSTOMER_GETCART_FAIL,
  CUSTOMER_CARTUPDATE_REQUEST,
  CUSTOMER_CARTUPDATE_SUCCESS,
  CUSTOMER_CARTUPDATE_FAIL,
  CUSTOMER_PLACEORDER_REQUEST,
  CUSTOMER_PLACEORDER_SUCCESS,
  CUSTOMER_PLACEORDER_FAIL,
  CUSTOMER_ADDTOCART_REQUEST,
  CUSTOMER_ADDTOCART_SUCCESS,
  CUSTOMER_ADDTOCART_FAIL,
  CUSTOMER_BOOKTABLE_REQUEST,
  CUSTOMER_BOOKTABLE_SUCCESS,
  CUSTOMER_BOOKTABLE_FAIL,
  CUSTOMER_GETORDERS_FAIL,
  CUSTOMER_GETORDERS_REQUEST,
  CUSTOMER_GETORDERS_SUCCESS,
  CUSTOMER_FEEDBACK_FAIL,
  CUSTOMER_FEEDBACK_REQUEST,
  CUSTOMER_FEEDBACK_SUCCESS,
  CUSTOMER_FEEDBACK_RESET,
  CUSTOMER_PAYBILL_SUCCESS,
  CUSTOMER_PAYBILL_FAIL,
  CUSTOMER_PAYBILL_REQUEST,
} from "../constants/customerConstants";

import axios from "axios";

export const customerLogout = () => {
  return (dispatch) => {
    sessionStorage.removeItem("id");
    sessionStorage.removeItem("userName");
    sessionStorage.removeItem("email");
    sessionStorage.removeItem("role");
    sessionStorage.removeItem("name");
    sessionStorage.removeItem("token");
    sessionStorage.removeItem("Loggedin");
    dispatch({ type: CUSTOMER_SIGNOUT });
    document.location.href = "/";
  };
};

export const signup = (
  name,
  username,
  email,
  password,
  contact,
  city,
  state,
  country
) => {
  return (dispatch) => {
    dispatch({
      type: CUSTOMER_SIGNUP_REQUEST,
    });

    const header = {
      headers: {
        "Content-Type": "application/json",
      },
    };

    const body = {
      name,
      username,
      email,
      password,
      contact,
      address: {
        city,
        state,
        country,
      },
    };
    const url = "http://localhost:8383/customer/register";
    axios
      .post(url, body, header)
      .then((response) => {
        dispatch({
          type: CUSTOMER_SIGNUP_SUCCESS,
          payload: response.data,
        });
      })
      .catch((error) => {
        dispatch({
          type: CUSTOMER_SIGNUP_FAIL,
          payload: error,
        });
      });
  };
};

export const getallorders = () => {
  return (dispatch) => {
    dispatch({
      type: CUSTOMER_GETORDERS_REQUEST,
    });

    const header = {
      headers: {
        "Content-Type": "application/json",
        Authorization: sessionStorage["token"],
      },
    };

    const id = sessionStorage["id"];

    const url = `http://localhost:8383/customer/getallorders/${id}`;
    axios
      .get(url, header)
      .then((response) => {
        dispatch({
          type: CUSTOMER_GETORDERS_SUCCESS,
          payload: response,
        });
      })
      .catch((error) => {
        dispatch({
          type: CUSTOMER_GETORDERS_FAIL,
          payload: error,
        });
      });
  };
};

export const getallordersWithId = (custId) => {
  return (dispatch) => {
    dispatch({
      type: CUSTOMER_GETORDERS_REQUEST,
    });

    const header = {
      headers: {
        "Content-Type": "application/json",
        Authorization: sessionStorage["token"],
      },
    };

    const id = custId;

    const url = `http://localhost:8383/customer/getallorders/${id}`;
    axios
      .get(url, header)
      .then((response) => {
        dispatch({
          type: CUSTOMER_GETORDERS_SUCCESS,
          payload: response,
        });
      })
      .catch((error) => {
        dispatch({
          type: CUSTOMER_GETORDERS_FAIL,
          payload: error,
        });
      });
  };
};

export const paybill = (custId) => {
  return (dispatch) => {
    dispatch({
      type: CUSTOMER_PAYBILL_REQUEST,
    });

    const header = {
      headers: {
        "Content-Type": "application/json",
        Authorization: sessionStorage["token"],
      },
    };

    const id = custId;
    console.log(custId);
    const url = `http://localhost:8383/customer/paybill/${custId}`;
    axios
      .get(url, header)
      .then((response) => {
        dispatch({
          type: CUSTOMER_PAYBILL_SUCCESS,
          payload: response,
        });
      })
      .catch((error) => {
        dispatch({
          type: CUSTOMER_PAYBILL_FAIL,
          payload: error,
        });
      });
  };
};

export const feedback = (message, rating) => {
  return (dispatch) => {
    dispatch({
      type: CUSTOMER_FEEDBACK_REQUEST,
    });

    const header = {
      headers: {
        "Content-Type": "application/json",
        Authorization: sessionStorage["token"],
      },
    };

    const id = sessionStorage["id"];

    const body = {
      message,
      rating,
    };
    const url = `http://localhost:8383/customer/feedback`;
    axios
      .post(url, body, header)
      .then((response) => {
        dispatch({
          type: CUSTOMER_FEEDBACK_SUCCESS,
          payload: response,
        });
      })
      .catch((error) => {
        dispatch({
          type: CUSTOMER_FEEDBACK_FAIL,
          payload: error,
        });
      });
  };
};

export const resetFeedback = () => {
  return {
    type: CUSTOMER_FEEDBACK_RESET,
  };
};

export const signin = (username, password) => {
  return (dispatch) => {
    dispatch({
      type: CUSTOMER_SIGNIN_REQUEST,
    });

    const header = {
      headers: {
        "Content-Type": "application/json",
      },
    };

    const body = {
      username,
      password,
    };

    const url = "http://localhost:8383/customer/login";

    axios
      .post(url, body, header)
      .then((response) => {
        dispatch(
          {
            type: CUSTOMER_SIGNIN_SUCCESS,
            payload: response.data,
          },
          console.log(response.data)
        );
      })
      .catch((error) => {
        dispatch({
          type: CUSTOMER_SIGNIN_FAIL,
          payload: error,
        });
      });
  };
};

export const getCart = () => {
  return (dispatch) => {
    dispatch({
      type: CUSTOMER_GETCART_REQUEST,
    });

    const header = {
      headers: {
        "Content-Type": "application/json",
        Authorization: sessionStorage["token"],
      },
    };
    const custId = sessionStorage["id"];
    const url = `http://localhost:8383/cart/getcart/${custId}`;

    axios
      .get(url, header)
      .then((response) => {
        dispatch({
          type: CUSTOMER_GETCART_SUCCESS,
          payload: response,
        });
      })
      .catch((error) => {
        dispatch({
          type: CUSTOMER_GETCART_FAIL,
          payload: error,
        });
      });
  };
};

export const booktable = (tableNo, capacity) => {
  return (dispatch) => {
    dispatch({
      type: CUSTOMER_BOOKTABLE_REQUEST,
    });

    const header = {
      headers: {
        "Content-Type": "application/json",
        Authorization: sessionStorage["token"],
      },
    };
    const customer_id = sessionStorage["id"];
    const url = `http://localhost:8383/table/book`;

    const body = {
      customer_id,
      tableNo,
      capacity,
      status: "BOOKED",
      waiter_id: 1,
    };

    axios
      .post(url, body, header)
      .then((response) => {
        dispatch({
          type: CUSTOMER_BOOKTABLE_SUCCESS,
          payload: response,
        });
      })
      .catch((error) => {
        dispatch({
          type: CUSTOMER_BOOKTABLE_FAIL,
          payload: error,
        });
      });
  };
};

export const updateCartQty = (menuId, qty) => {
  return (dispatch) => {
    dispatch({
      type: CUSTOMER_CARTUPDATE_REQUEST,
    });

    const header = {
      headers: {
        "Content-Type": "application/json",
        Authorization: sessionStorage["token"],
      },
    };

    console.log("token ");
    console.log(sessionStorage["token"]);

    const custId = sessionStorage["id"];
    const url = `http://localhost:8383/cart/update/${custId}/${menuId}/${qty}`;

    axios
      .post(url, {}, header)
      .then((response) => {
        dispatch({
          type: CUSTOMER_CARTUPDATE_SUCCESS,
          payload: response,
        });
      })
      .catch((error) => {
        dispatch({
          type: CUSTOMER_CARTUPDATE_FAIL,
          payload: error,
        });
      });
  };
};

export const cusPlaceOrder = (placeOrders) => {
  return (dispatch) => {
    dispatch({
      type: CUSTOMER_PLACEORDER_REQUEST,
    });

    const header = {
      headers: {
        "Content-Type": "application/json",
        Authorization: sessionStorage["token"],
      },
    };
    const url = "http://localhost:8383/manager/add";

    console.log("In action ");
    console.log(placeOrders);

    const body = {
      placeOrders,
    };

    axios
      .post(url, body, header)
      .then((response) => {
        dispatch({
          type: CUSTOMER_PLACEORDER_SUCCESS,
          payload: response,
        });
      })
      .catch((error) => {
        dispatch({
          type: CUSTOMER_PLACEORDER_FAIL,
          payload: error,
        });
      });
  };
};

export const cusAddtoCart = (menuId, qty) => {
  return (dispatch) => {
    dispatch({
      type: CUSTOMER_ADDTOCART_REQUEST,
    });

    const header = {
      headers: {
        "Content-Type": "application/json",
        Authorization: sessionStorage["token"],
      },
    };
    const url = "http://localhost:8383/cart/add";

    const custId = sessionStorage["id"];

    const body = {
      custId,
      menuId,
      qty,
    };

    axios
      .post(url, body, header)
      .then((response) => {
        dispatch({
          type: CUSTOMER_ADDTOCART_SUCCESS,
          payload: response,
        });
      })
      .catch((error) => {
        dispatch({
          type: CUSTOMER_ADDTOCART_FAIL,
          payload: error,
        });
      });
  };
};
