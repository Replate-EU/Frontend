import React from "react";

export default function Form(props) {
  return (
    <div className="account-form">
      <form onSubmit={e => props.handleSubmit(e)}>
        <label>
          Username:
          <input
            type="text"
            name="username"
            value={props.username}
            onChange={e => {
              props.editDetails(e);
            }}
          />
        </label>
        <label>
          Name:
          <input
            type="text"
            name="name"
            value={props.name}
            onChange={e => {
              props.editDetails(e);
            }}
          />
        </label>
        <label>
          Contact:
          <input
            type="text"
            name="contact"
            value={props.contact}
            onChange={e => {
              props.editDetails(e);
            }}
          />
        </label>
        <label>
          Password:
          <input
            type="password"
            name="password"
            value={props.password}
            onChange={e => {
              props.editDetails(e);
            }}
          />
        </label>
        <input type="submit" />
      </form>
    </div>
  );
}
