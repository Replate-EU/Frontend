import React, { useState } from "react";

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
          <h1>Hello Modal</h1>
        </div>
      ) : null}
    </div>
  );
}
