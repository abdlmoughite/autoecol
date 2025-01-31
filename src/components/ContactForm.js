import React, { useState } from "react";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const [errors, setErrors] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  //   const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const validateForm = () => {
    let formErrors = { ...errors };
    let isValid = true;

    if (!formData.name) {
      formErrors.name = "Name is required";
      isValid = false;
    } else {
      formErrors.name = "";
    }

    if (!formData.email || !/\S+@\S+\.\S+/.test(formData.email)) {
      formErrors.email = "Please enter a valid email";
      isValid = false;
    } else {
      formErrors.email = "";
    }

    if (!formData.subject) {
      formErrors.subject = "Subject is required";
      isValid = false;
    } else {
      formErrors.subject = "";
    }

    if (!formData.message) {
      formErrors.message = "Message is required";
      isValid = false;
    } else {
      formErrors.message = "";
    }

    setErrors(formErrors);
    return isValid;
  };

  const handleSubmit = (e) => {
    if (validateForm()) {
      //   setSubmitted(true);
      console.log("Form data submitted:", formData);
    }
  };

  return (
    <form
      className="contact-form"
      onSubmit={handleSubmit}
      action="https://formspree.io/f/xrbbrvkk"
      method="post"
    >
      <h2>
        Contactez-<span style={{ color: "#C3D900" }}>nous</span>
      </h2>
      <div className="form-group">
        <label htmlFor="name">Nom</label>
        <input
          type="text"
          id="name"
          name="name"
          value={formData.name}
          onChange={handleChange}
          className={errors.name ? "error" : ""}
        />
        {errors.name && <span className="error-message">{errors.name}</span>}
      </div>

      <div className="form-group">
        <label htmlFor="email">Email</label>
        <input
          type="email"
          id="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          className={errors.email ? "error" : ""}
        />
        {errors.email && <span className="error-message">{errors.email}</span>}
      </div>

      <div className="form-group">
        <label htmlFor="message">Commentaire</label>
        <textarea
          id="message"
          name="message"
          value={formData.message}
          onChange={handleChange}
          className={errors.message ? "error" : ""}
        ></textarea>
        {errors.message && (
          <span className="error-message">{errors.message}</span>
        )}
      </div>

      <button type="submit" className="submit-btn">
        Envoyer
      </button>
    </form>
  );
};

export default Contact;
