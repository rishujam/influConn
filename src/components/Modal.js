import React from "react";
import './Modal.css';

const Modal = ({ isOpen, onClose, onSubmit }) => {
  if (!isOpen) return null;

  return (
    <div className="modal-overlay">
      <div className="modal-content">
        <h2>Get Started</h2>
        <p>Enter your email, and we’ll send you the details.</p>

        <input type="email" placeholder="Enter your email" className="input-field" required />

        <select className="select-field">
          <option value="brand">I'm a Brand</option>
          <option value="influencer">I'm an Influencer</option>
        </select>

        <div className="modal-buttons">
          <button onClick={onClose} className="cancel-btn">Cancel</button>
          <button onClick={onSubmit} className="submit-btn">Submit</button>
        </div>
      </div>
    </div>
  );
};

export default Modal;