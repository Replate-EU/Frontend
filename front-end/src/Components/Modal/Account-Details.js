import React, { useState, useEffect, useRef } from "react";
import axiosWithAuth from "../../auth/axiosWithAuth";
import Form from "./Edit-Form";
import { connect } from "react-redux";
import {
  deleteUserDetails,
  submitUserDetails,
  editUserDetails
} from "../../state/actionCreators";
import { node } from "prop-types";

export function AccountDetails({
  user,
  userDetails,
  deleteUserDetails,
  submitUserDetails,
  editUserDetails,
  modalNode,
  showModal
}) {
  // delete user.id;
  // delete user.user_type;
  const [details, setDetails] = useState(user);
  console.log(user);
  const [update, setUpdate] = useState({});
  const [edit, setEdit] = useState(false);

  useEffect(() => {
    console.log(modalNode);
    document.addEventListener("mousedown", handleClick);
    return () => {
      document.removeEventListener("mousedown", handleClick);
    };
  }, []);

  function handleClick(e) {
    if (modalNode.current.contains(e.target)) {
      return;
    }
    showModal();
  }

  function editDetails(event) {
    setUpdate({ ...update, [event.target.name]: event.target.value });
    console.log(update);
  }

  function handleSubmit(event) {
    event.preventDefault();
    const updateUser = { ...details, ...update };
    delete updateUser.id;
    delete updateUser.user_type;
    console.log(updateUser);
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
        <div className="account-container">
          <p className="card--title">Account Details</p>
          <p className="data-row">
            <span className="data-label">Username:</span>
            <span className="data-value">{details.username}</span>
          </p>
          <p className="data-row">
            <span className="data-label">Account Type:</span>
            <span className="data-value">{details.user_type}</span>
          </p>
          <p className="data-row">
            <span className="data-label">Contact:</span>
            <span className="data-value">{details.contact_number}</span>
          </p>
        </div>
      )}
      <button
        className="button-primary button-big"
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
