import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router } from "react-router-dom";
import "./index.css";
import App from "./App";
import thunk from "redux-thunk";
import { combineReducers, createStore, applyMiddleware, compose } from "redux";
import { Provider } from "react-redux";
// import * as serviceWorker from './serviceWorker';
/* 
state = {
  appState: "loggedIn" || "loggedOut",
  user: { user_type: "guest" || "volunteer" || "business", user_id: 0 },//guest and 0 by default, either until login or tokenCheck are passed
  token: "", //on initial render check local storage,  set to empty string if couldn't find one
  availablePickups: [], //pickups array, pickups available for volunteers to accept, empty if user type is not volunteer
  acceptedPickups: [], //pickups array, pickups accepted by logged in volunteer, empty if user type is not volunteer
  listedPickups: [], //pickups array, pickups listed by logged in business, empty if user type is not business
  userDetails: null //null by default and on initial render, on login fetched with other data, differs between user types
};
 */

//Combining all the reducers
const mainReducer = combineReducers({
  appState: appStateReducer,
  user: userReducer,
  token: tokenReducer,
  availablePickups: availablePickupsReducer,
  acceptedPickups: acceptedPickupsReducer,
  listedPickups: listedPickupsReducer,
  userDetails: userDetailsReducer
});

//Creating a store
const store = createStore(
  mainReducer,
  {},
  compose(
    applyMiddleware(thunk /* ,etc , other middlewares */),
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
  )
);

ReactDOM.render(
  <Provider store={store}>
    <Router>
      <App />
    </Router>
  </Provider>,
  document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
// serviceWorker.unregister();
