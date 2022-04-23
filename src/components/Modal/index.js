import React from "react";

const Modal = ({ onClose, currentPhoto }) => {
  const { name, description, category, index, link, github, imgid } =
    currentPhoto;

  return (
    <div className="modalBackdrop">
      <div className="modalContainer">
        <h3 className="modalTitle">{name} </h3>
        <img src={`./assets/apps/${imgid}.jpg`} alt="current category" />
        <p>{description}</p>
        <a href={link}>Deployment</a>
        <a href={github}>Github</a>
        <button type="button" onClick={onClose}>
          Close this modal
        </button>
      </div>
    </div>
  );
};

export default Modal;
