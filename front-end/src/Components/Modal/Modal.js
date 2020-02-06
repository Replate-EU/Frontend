import React, { useState, useRef, useEffect } from "react";
import AccountDetails from "./Account-Details";

export default function Modal() {
  const [modal, setModal] = useState(false);

  function showModal() {
    setModal(!modal);
  }

  const modalNode = useRef();
  // console.log(modalNode);

  // useEffect(() => {
  //   document.addEventListener("mousedown", handleClick);
  //   return () => {
  //     document.removeEventListener("mousedown", handleClick);
  //   };
  // }, []);

  // function handleClick(e) {
  //   console.log(e);
  //   if (modalNode.current.contains(e.target)) {
  //     return;
  //   }
  //   showModal();
  // }

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
          <AccountDetails showModal={showModal} modalNode={modalNode} showModal={showModal}/>
        </div>
      ) : null}
    </div>
  );
}
