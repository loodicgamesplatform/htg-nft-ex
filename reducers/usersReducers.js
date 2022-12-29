import { AUTH, SIGNUP_FAIL } from "../constants/actionsConstants.js";

const usersReducers = (state = { userData: null }, action) => {
  switch (action.type) {
    case AUTH:
      localStorage.setItem("user", JSON.stringify(action.payload));
      return { ...state, userdata: action.payload };

    case SIGNUP_FAIL:
      return { error: action.payload };

    default:
      return state;
  }
};

export default usersReducers;
