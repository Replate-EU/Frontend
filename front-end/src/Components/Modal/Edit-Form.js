import React from "react";

export default function Form(props) {
  return (
    <form className="inner-form" onSubmit={e => props.handleSubmit(e)}>
      <h1 className="card--title">Account details</h1>
      <label className="form--label">
        <input
          required
          className="form--input"
          type="text"
          name="username"
          value={props.username}
          onChange={e => {
            props.editDetails(e);
          }}
        />
        <span className="input--label">Username</span>
      </label>
      {/* <label className="form--label">
          Name:
          <input required
            className="form--input"
            type="text"
            name="name"
            value={props.name}
            onChange={e => {
              props.editDetails(e);
            }}
          />
        </label> */}
      <label className="form--label">
        <input
          required
          className="form--input"
          type="text"
          name="contact_number"
          value={props.contact}
          onChange={e => {
            props.editDetails(e);
          }}
        />
        <span className="input--label">Contact</span>
      </label>
      <label className="form--label">
        <input
          required
          className="form--input"
          type="password"
          name="password"
          value={props.password}
          onChange={e => {
            props.editDetails(e);
          }}
        />
        <span className="input--label">Password</span>
      </label>
      <button type="submit" className="button-secondary button-small">
        Submit
      </button>
    </form>
  );
}
