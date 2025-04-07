import React, { useState, useEffect } from "react";
import './Modal.css';
import Button from './Button';
import ProgressBar from './ProgressBar';
import { saveUserData } from "../FirebaseSource";

const GetStartedModal = ({ isOpen, onClose, userType }) => {
  const [email, setEmail] = useState("");
  const [selectedUserType, setSelectedUserType] = useState(userType || "brand");
  const [error, setError] = useState("");
  const [step, setStep] = useState(1);
  const [isLoading, setIsLoading] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  // Update selectedUserType when userType prop changes
  useEffect(() => {
    if (userType) {
      setSelectedUserType(userType);
    }
  }, [userType]);

  // Reset step when modal is closed
  useEffect(() => {
    if (!isOpen) {
      setStep(1);
    }
  }, [isOpen]);

  if (!isOpen) return null;

  const validateEmail = (email) => {
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return regex.test(email);
  };

  const handleNext = async () => {
    if (!email) {
      setError("Email is required");
      return;
    }
    if (!validateEmail(email)) {
      setError("Please enter a valid email address");
      return;
    }
    setError("");
    setIsLoading(true);

    try {
      await saveUserData({ email, userType: selectedUserType });
      setStep(2);
    } catch (error) {
      setError("Something went wrong. Please try again.");
    } finally {
      setIsLoading(false);
    }
  };

  const handleSubmit = async () => {
    if (!email) {
      setError("Email is required");
      return;
    }
    if (!validateEmail(email)) {
      setError("Please enter a valid email address");
      return;
    }
    setError("");
    setIsLoading(true);

    try {
      await saveUserData({ email, userType: selectedUserType });
      setIsSuccess(true);
      
      if (selectedUserType === "brand") {
        setTimeout(() => {
          onClose();
        }, 1000);
      }
    } catch (error) {
      setError("Something went wrong. Please try again.");
    } finally {
      setIsLoading(false);
    }
  };

  // Step 2 content for influencers
  const renderStep2 = () => {
    return (
      <>
        <h2>Tell Us About Your Content</h2>
        <p>We'll use this information to match you with the right brands.</p>
        
        {/* Additional fields for influencers can be added here */}
        <div className="form-group">
          <label>Instagram Username</label>
          <input 
            type="text" 
            placeholder="@yourusername" 
            className="input-field"
          />
        </div>

        <div className="modal-buttons">
          <Button text="Cancel" variant="secondary" onClick={onClose} />
          <Button text="Submit" variant="primary" onClick={handleSubmit} />
        </div>
      </>
    );
  };

  // Step 1 content
  const renderStep1 = () => {
    if (isSuccess && selectedUserType === "influencer") {
      return (
        <>
          <h2>Thank You!</h2>
          <p>We'll be in touch with you shortly.</p>
          <div className="modal-buttons">
            <Button text="Close" variant="primary" onClick={onClose} />
          </div>
        </>
      );
    }

    return (
      <>
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
          value={selectedUserType}
          onChange={(e) => setSelectedUserType(e.target.value)}
        >
          <option value="brand">I'm a Brand</option>
          <option value="influencer">I'm an Influencer</option>
        </select>

        {isLoading && <ProgressBar />}

        <div className="modal-buttons">
          <Button text="Cancel" variant="secondary" onClick={onClose} />
          <Button 
            text={selectedUserType === "brand" ? "Submit" : "Next"}
            variant="primary"
            onClick={selectedUserType === "brand" ? handleSubmit : handleNext}
            disabled={isLoading}
          />
        </div>
      </>
    );
  };

  return (
    <div className="modal-overlay">
      <div className="modal-content">
        {step === 1 ? renderStep1() : renderStep2()}
      </div>
    </div>
  );
};

export default GetStartedModal;