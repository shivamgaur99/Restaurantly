import {
  ADMIN_SIGNUP_REQUEST,
  ADMIN_SIGNUP_SUCCESS,
  ADMIN_SIGNUP_FAIL,
  ADMIN_SIGNIN_REQUEST,
  ADMIN_SIGNIN_SUCCESS,
  ADMIN_SIGNIN_FAIL,
  ADMIN_SIGNOUT,
  GET_STOCK_REQUEST,
  GET_STOCK_SUCCESS,
  GET_STOCK_FAIL,
  GET_SUPPLIER_REQUEST,
  GET_SUPPLIER_FAIL,
  GET_SUPPLIER_SUCCESS,
  UPDATE_STOCK_FAIL,
  UPDATE_STOCK_REQUEST,
  UPDATE_STOCK_SUCCESS,
  GET_MENU_REQUEST,
  GET_MENU_SUCCESS,
  GET_MENU_FAIL,
  GET_INGREDIENT_FAIL,
  GET_INGREDIENT_REQUEST,
  GET_INGREDIENT_SUCCESS,
  ADD_MENU_FAIL,
  ADD_MENU_REQUEST,
  ADD_MENU_SUCCESS,
  RESET_ADD_MENU,
  EDIT_MENU_REQUEST,
  EDIT_MENU_SUCCESS,
  EDIT_MENU_FAIL,
  RESET_EDIT_MENU,
  DELETE_MENU_REQUEST,
  DELETE_MENU_SUCCESS,
  DELETE_MENU_FAIL,
  RESET_DELETE_MENU,
  RESET_UPDATE_STOCK,
  GET_FEEDBACK_FAIL,
  GET_FEEDBACK_REQUEST,
  GET_FEEDBACK_SUCCESS,
  GET_PROFILE_FAIL,
  GET_PROFILE_REQUEST,
  GET_PROFILE_SUCCESS,
  UPDATE_PROFILE_FAIL,
  UPDATE_PROFILE_REQUEST,
  UPDATE_PROFILE_SUCCESS,
  RESET_UPDATE_PROFILE,
} from "../constants/adminConstants";

export const adminSignupReducer = (state = {}, action) => {
  switch (action.type) {
    case ADMIN_SIGNUP_REQUEST:
      return { loading: true };
    case ADMIN_SIGNUP_SUCCESS:
      return { loading: false, response: action.payload };
    case ADMIN_SIGNUP_FAIL:
      return { loading: false, error: action.payload };
    default:
      return state;
  }
};

export const adminSigninReducer = (state = {}, action) => {
  switch (action.type) {
    case ADMIN_SIGNIN_REQUEST:
      return { loading: true };
    case ADMIN_SIGNIN_SUCCESS:
      return { loading: false, response: action.payload };
    case ADMIN_SIGNIN_FAIL:
      return { loading: false, error: action.payload };
    case ADMIN_SIGNOUT:
      return {};
    default:
      return state;
  }
};

export const admincheckStockReducer = (state = {}, action) => {
  switch (action.type) {
    case GET_STOCK_REQUEST:
      return { loading: true };
    case GET_STOCK_SUCCESS:
      return { loading: false, response: action.payload };
    case GET_STOCK_FAIL:
      return { loading: false, error: action.payload };
    case ADMIN_SIGNOUT:
      return {};
    default:
      return state;
  }
};

export const adminsupplierReducer = (state = {}, action) => {
  switch (action.type) {
    case GET_SUPPLIER_REQUEST:
      return { loading: true };
    case GET_SUPPLIER_SUCCESS:
      return { loading: false, response: action.payload };
    case GET_SUPPLIER_FAIL:
      return { loading: false, error: action.payload };
    case ADMIN_SIGNOUT:
      return {};
    default:
      return state;
  }
};

export const adminupdateReducer = (state = {}, action) => {
  switch (action.type) {
    case UPDATE_STOCK_REQUEST:
      return { loading1: true };
    case UPDATE_STOCK_SUCCESS:
      return { loading1: false, response1: action.payload };
    case UPDATE_STOCK_FAIL:
      return { loading1: false, error1: action.payload };
    case RESET_UPDATE_STOCK:
      return (state = "");
    default:
      return state;
  }
};

export const adminmenuReducer = (state = {}, action) => {
  switch (action.type) {
    case GET_MENU_REQUEST:
      return { loading: true };
    case GET_MENU_SUCCESS:
      return { loading: false, response: action.payload };
    case GET_MENU_FAIL:
      return { loading: false, error: action.payload };

    default:
      return state;
  }
};

export const admingetFeedbackReducer = (state = {}, action) => {
  switch (action.type) {
    case GET_FEEDBACK_REQUEST:
      return { loading: true };
    case GET_FEEDBACK_SUCCESS:
      return { loading: false, response: action.payload };
    case GET_FEEDBACK_FAIL:
      return { loading: false, error: action.payload };

    default:
      return state;
  }
};

export const admingetprofileReducer = (state = {}, action) => {
  switch (action.type) {
    case GET_PROFILE_REQUEST:
      return { loading: true };
    case GET_PROFILE_SUCCESS:
      return { loading: false, response: action.payload };
    case GET_PROFILE_FAIL:
      return { loading: false, error: action.payload };

    default:
      return state;
  }
};

export const admingetallingredientsReducer = (state = {}, action) => {
  switch (action.type) {
    case GET_INGREDIENT_REQUEST:
      return { loading: true };
    case GET_INGREDIENT_SUCCESS:
      return { loading: false, response: action.payload };
    case GET_INGREDIENT_FAIL:
      return { loading: false, error: action.payload };

    default:
      return state;
  }
};
export const adminAddMenuReducer = (state = {}, action) => {
  switch (action.type) {
    case ADD_MENU_REQUEST:
      return { loading1: true };
    case ADD_MENU_SUCCESS:
      return { loading1: false, response1: action.payload };
    case ADD_MENU_FAIL:
      return { loading1: false, error1: action.payload };
    case RESET_ADD_MENU:
      return (state = "");
    default:
      return state;
  }
};

export const editMenuReducer = (state = {}, action) => {
  switch (action.type) {
    case EDIT_MENU_REQUEST:
      return { loading: true };
    case EDIT_MENU_SUCCESS:
      return { loading: false, response1: action.payload };
    case EDIT_MENU_FAIL:
      return { loading: false, error: action.payload };
    case RESET_EDIT_MENU:
      return (state = "");
    default:
      return state;
  }
};

export const deleteMenuReducer = (state = {}, action) => {
  switch (action.type) {
    case DELETE_MENU_REQUEST:
      return { loading: true };
    case DELETE_MENU_SUCCESS:
      return { loading: false, response1: action.payload };
    case DELETE_MENU_FAIL:
      return { loading: false, error: action.payload };
    case RESET_DELETE_MENU:
      return (state = "");
    default:
      return state;
  }
};

export const adminupdateProfileReducer = (state = {}, action) => {
  switch (action.type) {
    case UPDATE_PROFILE_REQUEST:
      return { loading: true };
    case UPDATE_PROFILE_SUCCESS:
      return { loading: false, response1: action.payload };
    case UPDATE_PROFILE_FAIL:
      return { loading: false, error: action.payload };
    case RESET_UPDATE_PROFILE:
      return (state = "");
    default:
      return state;
  }
};
