import React, { useState, useEffect } from "react";
import axiosWithAuth from "axios";
import Form from "./Edit-Form";

export default function AccountDetails() {
  //   useEffect(() => {
  //     axiosWithAuth
  //       .get("localhost:7000/api/users/1")
  //       .then(res => {
  //         console.log(res);
  //       })
  //       .catch(err => {
  //         console.log(err);
  //       });
  //   }, []);
  const [details, setDetails] = useState({
    username: "darragh1",
    name: "Darragh Ferry",
    user_type: "volunteer",
    contact_number: "123-456-7890"
  });
  const [update, setUpdate] = useState({});
  const [edit, setEdit] = useState(false);

  function editDetails(event) {
    setUpdate({ ...update, [event.target.name]: event.target.value });
    console.log(update);
  }

  function handleSubmit(event) {
    event.preventDefault();
    setDetails({ ...details, ...update });
    showEdit();
    console.log(details);
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
          <h3>Name: {details.name}</h3>
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
