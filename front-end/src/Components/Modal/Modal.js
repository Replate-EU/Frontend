import React, { useState } from "react";
import AccountDetails from "./Account-Details";

export default function Modal() {
  const [modal, setModal] = useState(false);

  function showModal() {
    setModal(!modal);
  }

  return (
    <div>
      <button
        onClick={e => {
          showModal();
        }}
      >
        Show Modal
      </button>
      {modal ? (
        <div className="modal-container">
          <AccountDetails />
        </div>
      ) : null}
    </div>
  );
}
