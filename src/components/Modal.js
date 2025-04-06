import React, { useState } from "react";
import './Modal.css';

const Modal = ({ isOpen, onClose, onSubmit }) => {
  const [email, setEmail] = useState("");
  const [userType, setUserType] = useState("brand");
  const [error, setError] = useState("");

  if (!isOpen) return null;

  const validateEmail = (email) => {
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return regex.test(email);
  };

  const handleSubmit = () => {
    if (!email) {
      setError("Email is required");
      return;
    }
    if (!validateEmail(email)) {
      setError("Please enter a valid email address");
      return;
    }
    setError("");
    onSubmit({ email, userType });
  };

  return (
    <div className="modal-overlay">
      <div className="modal-content">
        <h2>Get Started</h2>
        <p>Enter your email, and we'll send you the details.</p>

        <input 
          type="email" 
          placeholder="Enter your email" 
          className={`input-field ${error ? 'error' : ''}`}
          required 
          value={email}
          onChange={(e) => {
            setEmail(e.target.value);
            setError("");
          }}
        />
        {error && <div className="error-message">{error}</div>}

        <select 
          className="select-field"
          value={userType}
          onChange={(e) => setUserType(e.target.value)}
        >
          <option value="brand">I'm a Brand</option>
          <option value="influencer">I'm an Influencer</option>
        </select>

        <div className="modal-buttons">
          <button onClick={onClose} className="cancel-btn">Cancel</button>
          <button onClick={handleSubmit} className="submit-btn">Submit</button>
        </div>
      </div>
    </div>
  );
};

export default Modal;