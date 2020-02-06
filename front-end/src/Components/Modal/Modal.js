import React, { useState, useRef } from "react";
import AccountDetails from "./Account-Details";

export default function Modal() {
  const [modal, setModal] = useState(false);

  function showModal() {
    setModal(!modal);
  }

  const modalNode = useRef();

  return (
    <div className>
      <button className='colored-btn'
        onClick={e => {
          showModal();
        }}
      >
        My Account
      </button>
      {modal ? (
        <div className="modal-container" >
          <AccountDetails showModal={showModal}/>
        </div>
      ) : null}
    </div>
  );
}
