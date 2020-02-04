import React, { useState } from "react";
import Form from "./Edit-Form";

export default function AccountDetails() {
  const [details, setDetails] = useState({
    username: "darragh1",
    user_type: "volunteer",
    contact_number: "123-456-7890"
  });
  const [edit, setEdit] = useState(false);

  function showEdit() {
    setEdit(!edit);
  }

  return (
    <>
      {edit ? (
        <Form />
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
        Edit Account Details
      </button>
    </>
  );
}
