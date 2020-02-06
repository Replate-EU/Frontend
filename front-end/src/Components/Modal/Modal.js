import React, { useState, useRef, useEffect } from "react";
import AccountDetails from "./Account-Details";

export default function Modal() {
  const [modal, setModal] = useState(false);

  function showModal() {
    setModal(!modal);
  }

  const modalNode = useRef();

  return (
    <div className>
      <button
        className="colored-btn"
        onClick={e => {
          showModal();
        }}
      >
        My Account
      </button>
      {modal ? (
        <div className="modal-container" ref={modalNode}>
          <AccountDetails
            showModal={showModal}
            modalNode={modalNode}
            showModal={showModal}
          />
        </div>
      ) : null}
    </div>
  );
}
