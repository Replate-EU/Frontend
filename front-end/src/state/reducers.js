import * as types from "./actionTypes";

//Reducer 1, appState
const initialAppState = false;
export function appStateReducer(appState = initialAppState, action) {
  switch (action.type) {
    case types.LOGIN_SUCCESS:
      return true;
    case types.LOG_OUT:
      return false;
    default:
      return appState;
  }
}

//user data reducer
const initialUser = {
  user_id: 0,
  user_type: "guest"
};
export function userReducer(user = initialUser, action) {
  switch (action.type) {
    case types.LOGIN_SUCCESS:
      return action.payload.user;
    case types.LOG_OUT:
      return initialUser;
    default:
      return user;
  }
}

//reducer 3, token reducer
const initialToken = localStorage.getItem("token");
export function tokenReducer(token = initialToken, action) {
  switch (action.type) {
    case types.LOGIN_SUCCESS:
      return action.payload.token;
    default:
      return token;
  }
}

//reducer 4, available pickups
const initialAvailablePickups = [];
export function availablePickupsReducer(
  availablePickups = initialAvailablePickups,
  action
) {
  switch (action.type) {
    case types.GET_AVAILABLE_PICKUPS:
      return action.payload;
    case types.ACCEPTED_PICKUP:
      return availablePickups.filter(pickup => pickup.id !== action.payload.id);
    case types.ABANDONED_PICKUP:
      return [...availablePickups, action.payload];
    default:
      return availablePickups;
  }
}

//reducer 5, accepted pickups
const initialAcceptedPickups = [];
export function acceptedPickupsReducer(
  acceptedPickups = initialAcceptedPickups,
  action
) {
  switch (action.type) {
    case types.GET_ACCEPTED_PICKUPS:
      return action.payload;
    case types.ACCEPTED_PICKUP:
      return [...acceptedPickups, action.payload];
    case types.ABANDONED_PICKUP:
      return acceptedPickups.filter(pickup => pickup.id !== action.payload.id);
    default:
      return acceptedPickups;
  }
}

//reducer 6 listed pickups
const initialListedPickups = [];
export function listedPickupsReducer(
  listedPickups = initialListedPickups,
  action
) {
  switch (action.type) {
    case types.GET_LISTED_PICKUPS:
      return action.payload;
    case types.SUBMITTED_PICKUP:
      return [...listedPickups, action.payload];
    case types.EDITED_PICKUP:
      return listedPickups.map(pickup =>
        pickup.id === action.payload.id ? action.payload : pickup
      );
    case types.DELETED_PICKUP:
      return listedPickups.filter(pickup => pickup.id !== action.payload.id);
    default:
      return listedPickups;
  }
}

//reducer 7, user details
const initialUserDetails = null;
export function userDetailsReducer(userDetails = initialUserDetails, action) {
  switch (action.type) {
    case types.LOGIN_SUCCESS:
      return action.payload.account_details;
    case types.SUBMITTED_USER_DETAILS:
      return action.payload;
    case types.EDITED_USER_DETAILS:
      return action.payload;
    case types.DELETED_USER_DETAILS:
      return null;
    default:
      return userDetails;
  }
}
