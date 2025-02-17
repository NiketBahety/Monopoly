import React, { useState, useRef, useEffect } from "react";
import "./copyLink.css";
import { FaCopy, FaCheck } from "react-icons/fa";

const CopyLink = () => {
  const [isCopied, setIsCopied] = useState(false);
  const currentURL = window.location.href;
  const inputRef = useRef(null);

  useEffect(() => {
    if (inputRef.current) {
      inputRef.current.style.width = "0"; // Reset width
      inputRef.current.style.width = inputRef.current.scrollWidth + "px"; // Set to content width
    }
  }, [currentURL]); // Recalculate on URL change

  const handleCopyClick = async () => {
    try {
      await navigator.clipboard.writeText(currentURL);
      setIsCopied(true);
    } catch (err) {
      console.error("Failed to copy: ", err);
    }
  };

  return (
    <div className="copy-link-container">
      <input
        type="text"
        value={currentURL}
        readOnly
        className="copy-link-input"
        ref={inputRef} // Add ref to the input
      />
      <button className="copy-link-button" onClick={handleCopyClick}>
        {isCopied ? <FaCheck /> : <FaCopy />}
      </button>
    </div>
  );
};

export default CopyLink;
