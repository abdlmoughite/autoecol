import React from "react";
import "./Contact.css";
import Contact from "./ContactForm";

function ContactForm() {


  return (
    <section className="contact-form-section">
      <div className="container-contact-form">
        <Contact/>
        <img
          src={`${process.env.PUBLIC_URL}/image/Contact.png`}
          alt="contact"
        />
      </div>
    </section>
  );
}

export default ContactForm;
