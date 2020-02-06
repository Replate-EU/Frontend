import axios from "../auth/axiosWithAuth";
import * as types from "./actionTypes";

//creates an action object with type and payload
const action = (type, payload) => ({ type, payload });

//if login successfull, dispatch LOGIN_SUCCESS, else set login form error to error response
export const login = (credentials, history) => async dispatch => {
  try {
    const response = await axios().post("/api/auth/login", credentials);
    const { token, user } = response.data;
    localStorage.setItem("token", token);
    dispatch(
      action(types.LOGIN_SUCCESS, {
        user,
        token,
        account_details: user.account_details
      })
    );
    history.push(`/${user.user_type}/dashboard`);
  } catch (error) {
    console.debug(error);
  }
};

export const checkToken = history => async dispatch => {
  try {
    const response = await axios().get("/api/auth");
    const { account_details } = response.data;
    const user = response.data;
    delete user.account_details;
    dispatch(action(types.TOKEN_CHECK_SUCCESS, { user, account_details }));
    history.push(`/${user.user_type}/dashboard`);
  } catch (error) {
    console.debug(error);
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
export const logout = history => dispatch => {
  localStorage.removeItem("token");
  dispatch(action(types.LOG_OUT));
  history.push("/login");
};

export const getAvailablePickups = () => async dispatch => {
  const response = await axios().get("/api/pickups");
  const pickups = response.data;
  dispatch(action(types.GET_AVAILABLE_PICKUPS, pickups));
};

//takes in pickup object without id and with claimed_by set to userId
export const acceptPickup = pickupData => async dispatch => {
  try {
    const acceptedPickup = {
      ...pickupData
    };
    delete pickupData.address;
    delete pickupData.name;
    delete pickupData.business_id;
    delete pickupData.id;
    await axios().put(`/api/pickups/${acceptedPickup.id}`, pickupData);
    dispatch(action(types.ACCEPTED_PICKUP, acceptedPickup));
  } catch (error) {
    console.log(error);
  }
};

export const abandonPickup = pickupData => async dispatch => {
  //pikcup object as payload
  try {
    const acceptedPickup = {
      ...pickupData
    };
    delete pickupData.address;
    delete pickupData.name;
    delete pickupData.business_id;
    delete pickupData.id;
    await axios().put(`/api/pickups/${acceptedPickup.id}`, pickupData);
    dispatch(action(types.ABANDONED_PICKUP, acceptedPickup));
  } catch (error) {
    console.log(error);
  }
};

export const getAcceptedPickups = () => async dispatch => {
  //array of pickups as payload
  try {
    const response = await axios().get("/api/pickups/me");
    const acceptedPickups = response.data;
    dispatch(action(types.GET_ACCEPTED_PICKUPS, acceptedPickups));
  } catch (error) {
    console.log(error);
  }
};

export const getListedPickups = () => async dispatch => {
  //array of pickups as payload
  const response = await axios().get("/api/pickups/me");
  const listedPickups = response.data;
  dispatch(action(types.GET_LISTED_PICKUPS, listedPickups));
};

export const submitPickup = pickupData => async dispatch => {
  //new pickup object as a payload
  const response = await axios().post("/api/pickups", pickupData);
  const newPickup = response.data;
  dispatch(action(types.SUBMITTED_PICKUP, newPickup));
};

export const editPickup = pickupData => async dispatch => {
  const { id } = pickupData;
  const updatedPickup = { ...pickupData };
  delete pickupData.id;
  delete pickupData.business_id;
  delete pickupData.name;
  delete pickupData.address;
  try {
    await axios().put(`/api/pickups/${id}`, pickupData);
    dispatch(action(types.EDITED_PICKUP, updatedPickup));
  } catch (error) {
    console.log(error);
  }
};

export const deletePickup = id => async dispatch => {
  console.log(id);

  const response = await axios().delete(`/api/pickups/${id}`);
  const deleted = response.data;
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
