import React from "react";
import ReactDOM from "react-dom";
import "../css/Modal.css";

function Modal({ children }) {
  return ReactDOM.createPortal(
    <div className="modalBackground">
      <div className="container-add">{children}</div>
    </div>,
    document.getElementById("modal")
  );
}

export { Modal };
