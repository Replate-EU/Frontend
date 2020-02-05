import axios from "../auth/axiosWithAuth";
import * as types from "./actionTypes";

//creates an action object with type and payload
const action = (type, payload) => ({ type, payload });

//if login successfull, dispatch LOGIN_SUCCESS, else set login form error to error response
export const login = (credentials, setLoginError) => async dispatch => {
  try {
    const response = await axios().post("/api/auth/login", credentials);
    const { token, user, account_details } = response.body;
    dispatch(action(types.LOGIN_SUCCESS, { user, token, account_details }));
  } catch (error) {
    setLoginError(error);
  }
};

export const checkToken = () => async dispatch => {
  try {
    const response = await axios().get("/api/users");
    const { user, account_details } = res.body;
    dispatch(action(types.TOKEN_CHECK_SUCCESS, { user, account_details }));
  } catch (error) {
    localStorage.removeItem("token");
    dispatch(action(types.TOKEN_CHECK_FAILURE));
  }
};

//isn't doing anything since register is better handled inside the form
export const register = userData => async dispatch => {
  try {
    const response = await axios().post("/api/auth/register");
  } catch (error) {}
};

//logoout
export const logout = () => dispatch => {
  localStorage.removeItem("token");
  dispatch(action(types.LOG_OUT));
};

export const getAvailablePickups = () => async dispatch => {
  const response = await axios().get("/api/pickups");
  const pickups = response.body;
  dispatch(action(types.GET_AVAILABLE_PICKUPS, pickups));
};

//takes in pickup object without id and with claimed_by set to userId
export const acceptPickup = pickupData => async dispatch => {
  const response = await axios.put(`/api/pickups/${pickupData.id}`, pickupData);
  const updatedPickup = response.body;
  dispatch(action(types.ACCEPTED_PICKUP, updatedPickup));
};

export const abandonPickup = pickupData => async dispatch => {
  //pikcup object as payload
  const response = await axios.put(`/api/pickups/${pickupData.id}`, pickupData);
  const updatedPickup = response.body;
  dispatch(action(types.ABANDONED_PICKUP, updatedPickup));
};

export const getAcceptedPickups = () => async dispatch => {
  //array of pickups as payload
  const response = await axios().get("/api/pickups/me");
  const acceptedPickups = response.body;
  dispatch(action(types.GET_ACCEPTED_PICKUPS), acceptedPickups);
};

export const getListedPickups = () => async dispatch => {
  //array of pickups as payload
  const response = await axios().get("/api/pickups/me");
  const listedPickups = response.body;
  dispatch(action(types.GET_LISTED_PICKUPS), listedPickups);
};

export const submitPickup = pickupData => async dispatch => {
  //new pickup object as a payload
  const response = await axios().post("/api/pickups", pickupData);
  const newPickup = response.body;
  dispatch(action(types.SUBMITTED_PICKUP), newPickup);
};

export const editPickup = pickupData => async dispatch => {
  const response = await axios.put(`/api/pickups/${pickupData.id}`, pickupData);
  const updatedPickup = response.body;
  dispatch(action(types.EDITED_PICKUP, updatedPickup));
};

export const deletePickup = id => async dispatch => {
  const response = await axios().delete(`/api/pickups/${id}`);
  const deleted = response.body;
  dispatch(action(types.DELETED_PICKUP, id));
};

export const submitUserDetails = userDetails => async dispatch => {
  try {
    await axios().post("/api/users/details");
    dispatch(action(types.SUBMITTED_USER_DETAILS, userDetails));
  } catch (error) {
    return error;
  }
};

export const editUserDetails = userDetails => async dispatch => {
  try {
    await axios().put("/api/users/details");
    dispatch(action(types.EDITED_USER_DETAILS, userDetails));
  } catch (error) {
    return error;
  }
};

export const deleteUserDetails = () => async dispatch => {
  try {
    await axios().delete("/api/users/details");
    dispatch(action(types.DELETED_USER_DETAILS));
  } catch (error) {
    return error;
  }
};
