import React from "react";
import "./WhatsAppButton.css"; // Add custom styles

const WhatsAppButton = () => {
  return (
    <a
      href="https://wa.me/<YOUR_PHONE_NUMBER>"
      target="_blank"
      rel="noopener noreferrer"
      className="whatsapp-button"
    >
      <i className="fab fa-whatsapp"></i>
    </a>
  );
};

export default WhatsAppButton;
