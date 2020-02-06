import React, { useState, useEffect } from "react";
import axiosWithAuth from "../../auth/axiosWithAuth";
import Form from "./Edit-Form";
import { connect } from "react-redux";
import {
  deleteUserDetails,
  submitUserDetails,
  editUserDetails
} from "../../state/actionCreators";

export function AccountDetails({
  user,
  userDetails,
  deleteUserDetails,
  submitUserDetails,
  editUserDetails
}) {
  const [details, setDetails] = useState(user);

  const [update, setUpdate] = useState({});
  const [edit, setEdit] = useState(false);

  function editDetails(event) {
    setUpdate({ ...update, [event.target.name]: event.target.value });
    console.log(update);
  }

  function handleSubmit(event) {
    event.preventDefault();
    const updateUser = { ...details, ...update };
    axiosWithAuth()
      .put("/api/users", updateUser)
      .then(res => {
        setDetails(updateUser);
      })
      .catch(err => {
        console.log(err);
      });
    showEdit();
    console.log(updateUser);
  }

  function showEdit() {
    setEdit(!edit);
  }

  return (
    <>
      {edit ? (
        <Form
          update={update}
          editDetails={editDetails}
          handleSubmit={handleSubmit}
        />
      ) : (
        <div className="account">
          <h2>Account Details</h2>
          <h3>Username: {details.username}</h3>
          <h3>Account Type: {details.user_type}</h3>
          <h3>Contact: {details.contact_number}</h3>
        </div>
      )}
      <button
        onClick={e => {
          showEdit();
        }}
      >
        {edit ? "Cancel" : "Edit Account Details"}
      </button>
    </>
  );
}

function mapStateToProps(state) {
  return {
    user: state.user,
    userDetails: state.userDetails
  };
}

export default connect(mapStateToProps, {
  editUserDetails,
  deleteUserDetails,
  submitUserDetails
})(AccountDetails);
