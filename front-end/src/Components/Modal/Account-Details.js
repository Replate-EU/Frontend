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
  showModal
}) {
  const [details, setDetails] = useState(user);

  const [update, setUpdate] = useState({});
  const [edit, setEdit] = useState(false);

  const modalNode = useRef();

  useEffect(() => {
    document.addEventListener('mousedown', handleClick)
    return () => {
      document.removeEventListener('mousedown', handleClick)
    }
  }, [])

  function handleClick(e){
    if(modalNode.current.contains(e.target)){
      return
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
    <div className='modalCard' ref={modalNode}>
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
      <button className='colored-btn'
        onClick={e => {
          showEdit();
        }}
      >
        {edit ? "Cancel" : "Edit Account Details"}
      </button>
    </div>
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
