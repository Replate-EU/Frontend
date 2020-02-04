import React from "react";

export default function Form() {
  return (
    <div className="account-form">
      <form>
        <label>
          Username:
          <input type="text" name="username" />
        </label>
        <label>
          Name:
          <input type="text" name="name" />
        </label>
        <label>
          Contact:
          <input type="text" name="contact" />
        </label>
        <label>
          Name:
          <input type="text" name="username" />
        </label>
        <label>
          Password:
          <input type="password" name="password" />
        </label>
      </form>
    </div>
  );
}
