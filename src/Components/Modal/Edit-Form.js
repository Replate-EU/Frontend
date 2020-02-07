import React from "react";

export default function Form(props) {
  return (
    <div className="account-form">
      <form onSubmit={e => props.handleSubmit(e)}>
        <label>
          Username:
          <input
            className="general-input"
            type="text"
            name="username"
            value={props.username}
            onChange={e => {
              props.editDetails(e);
            }}
          />
        </label>
        {/* <label>
          Name:
          <input
            className="general-input"
            type="text"
            name="name"
            value={props.name}
            onChange={e => {
              props.editDetails(e);
            }}
          />
        </label> */}
        <label>
          Contact:
          <input
            className="general-input"
            type="text"
            name="contact_number"
            value={props.contact}
            onChange={e => {
              props.editDetails(e);
            }}
          />
        </label>
        <label>
          Password:
          <input
            className="general-input"
            type="password"
            name="password"
            value={props.password}
            onChange={e => {
              props.editDetails(e);
            }}
          />
        </label>
        <input type="submit" className="colored-btn" />
      </form>
    </div>
  );
}
